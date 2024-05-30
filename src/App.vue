<template>
    <nav-bar></nav-bar>
    <n-config-provider :theme-overrides="darkThemeOverrides">
        <n-message-provider>
            <NavBar />
            <main>
                <RouterView />
            </main>
            <n-global-style />
        </n-message-provider>
    </n-config-provider>
</template>
<script lang="ts" setup>
import { type GlobalThemeOverrides, NConfigProvider } from 'naive-ui'
import { useTitle } from '@vueuse/core'
import NavBar from '@/components/NavBar.vue'

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
</script>
<style lang="scss" scoped></style>
