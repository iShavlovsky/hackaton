<template>
    <n-config-provider :theme-overrides="themeOverrides">
        <n-message-provider>
            <RouterView />
        </n-message-provider>
    </n-config-provider>
</template>
<script lang="ts" setup>
import { type GlobalThemeOverrides, NConfigProvider } from 'naive-ui'
import { useTitle } from '@vueuse/core'

useTitle('Rev Share Party')
const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#92FE75',
        baseColor: '#92FE75'
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
</script>
<style scoped></style>
