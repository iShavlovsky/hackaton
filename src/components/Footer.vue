<template>
    <footer class="footer display-flex align-items-center">
        <div class="container display-flex flex-row justify-between">
            <p>© revshareparty</p>
            <nav class="footer-nav">
                <ul class="display-flex flex-row gap-40">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <a>Newsletter</a>
                    </li>
                    <li>
                        <a>Whitepaper</a>
                    </li>
                    <li>
                        <a>Terms</a>
                    </li>
                    <li>
                        <a>Privacy</a>
                    </li>
                    <li>
                        <RouterLink to="/about">About</RouterLink>
                    </li>
                </ul>
            </nav>
            <ul class="display-flex flex-row gap-4">
                <li>
                    <a>tw</a>
                </li>
                <li>
                    <a>tg</a>
                </li>
                <li>
                    <a>ds</a>
                </li>
                <li>
                    <a>yt</a>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>
<style lang="scss" scoped>
.footer {
    height: 133px;
    width: 100%;

    .container {
        width: 100%;
    }
}
</style>
