<template>
    <n-config-provider :theme="darkTheme">
        <n-message-provider>
            <RouterView />
        </n-message-provider>
    </n-config-provider>
</template>
<script lang="ts" setup>
import { darkTheme, GlobalThemeOverrides, NConfigProvider } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#FF0000'
    },
    Button: {
        textColor: '#FF0000'
    },
    Dropdown: {
        color: '#FF0000'
    }
}
</script>
<style scoped></style>
