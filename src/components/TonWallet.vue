<template>
    <div id="ton-connect"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

const connectToWallet = async () => {
    try {
        const tonConnectUI = new (window as any).TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://your-app-url.com/tonconnect-manifest.json',
            buttonRootId: 'ton-connect'
        })
        const connectedWallet = await tonConnectUI.connectWallet()
        console.log(connectedWallet)
    } catch (error) {
        console.error('Error connecting to wallet:', error)
    }
}

onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js'
    script.onload = connectToWallet
    document.head.appendChild(script)
})
</script>
