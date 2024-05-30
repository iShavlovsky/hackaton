<template>
    <n-theme-editor>
        <n-config-provider :theme-overrides="darkThemeOverrides">
            <n-message-provider>
                <NavBar />
                <main>
                    <RouterView />
                </main>
                <n-global-style />
            </n-message-provider>
        </n-config-provider>
    </n-theme-editor>
</template>
<script lang="ts" setup>
import { type GlobalThemeOverrides, NThemeEditor } from 'naive-ui'
import { useTitle } from '@vueuse/core'
import NavBar from '@/components/NavBar.vue'

// const serverUrl = import.meta.env.VITE_MORALIS_NODES_TESTNET_LINEA_SITE_1
// const appId = import.meta.env.VITE_MORALIS_TESTNET_NODE_API_KEY
// const provider = new ethers.JsonRpcProvider(`${serverUrl}${appId}`)

useTitle('Rev Share Party')
const darkThemeOverrides: GlobalThemeOverrides = {
    common: {
        baseColor: '#000000',
        primaryColor: '#92FE75',
        bodyColor: '#000000',
        borderColor: '#92FE75'
    },
    Button: {
        color: '#151518',
        textColor: '#92FE75',
        borderHover: '#8F75FE',
        borderFocus: '#8F75FE'
    },
    Dropdown: {
        color: '#151518',
        optionTextColor: '#FFF',
        optionColorHover: '#92FE75'
    }
}

const lightThemeOverrides: GlobalThemeOverrides = {
    common: {}
}

// const user = ref<Moralis.User<Moralis.Attributes> | void | null>(null)
// const isAuthenticated = computed<boolean>(() => user.value !== null)

onMounted(() => {
    // console.log(provider)
    // if (!isAuthenticated.value) {
    //     user.value = Moralis.User.current()
    // }
})

// const logIn = async () => {
//     if (!isAuthenticated.value) {
//         user.value = await Moralis.authenticate({
//             signingMessage: 'Log in using Moralis'
//         })
//             .then(user => user)
//             .catch(error => {
//                 console.error(error)
//             })
//     }
//     console.log('logged in user:', user.value)
// }
//
// const logOut = async () => {
//     await Moralis.User.logOut()
//     user.value = null
//     console.log('logged out')
// }
</script>
<style lang="scss" scoped></style>
