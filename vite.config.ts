import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import postcssScss from 'postcss-scss'
import autoprefixer from 'autoprefixer'

export default defineConfig(({ mode }) => {
    const isDevelopment = mode === 'development'
    return {
        build: {
            minify: 'esbuild',
            esbuild: {
                drop: isDevelopment ? ['console', 'debug'] : [],
                sourcemap: isDevelopment
            },
            rollupOptions: {
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            const libraries = [
                                'axios',
                                'pinia',
                                'vue-router'
                                // '@wagmi/vue',
                                // '@vueuse/core',
                                // '@tanstack/vue-query'
                            ]
                            const pattern = new RegExp('/node_modules/(' + libraries.join('|') + ')/')

                            const match = id.match(pattern)
                            if (match) {
                                return match[1].replace('@', '')
                            }
                            return id.toString().split('node_modules/')[1].split('/')[0].toString()
                        }
                    }
                }
            }
        },
        base: process.env.NODE_ENV === 'production' ? '/hackaton/' : '/',
        plugins: [
            tsconfigPaths(),
            vue({
                script: {
                    globalTypeFiles: ['./src/globals.d.ts']
                }
            }),
            AutoImport({
                resolvers: [NaiveUiResolver()],
                include: [
                    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
                    /\.vue$/,
                    /\.vue\?vue/, // .vue
                    /\.md$/
                ],

                // global imports to register
                imports: ['vue', 'vue-router'],

                injectAtEnd: true,

                // Generate corresponding .eslintrc-auto-import.json file.
                // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
                eslintrc: {
                    enabled: true,
                    filepath: './.eslintrc-auto-import.json' // Default `./.eslintrc-auto-import.json`
                }
            }),
            Components({
                resolvers: [NaiveUiResolver()]
            })
        ],
        resolve: {
            alias: {
                '~': fileURLToPath(new URL('./*', import.meta.url)),
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        css: {
            postcss: {
                syntax: postcssScss,
                plugins: [
                    autoprefixer({
                        grid: 'autoplace'
                    })
                ]
            },
            preprocessorOptions: {
                scss: {
                    additionalData: ``
                }
            }
        }
    }
})
