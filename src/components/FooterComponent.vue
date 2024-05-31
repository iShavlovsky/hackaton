<template>
    <footer class="footer-w display-flex align-items-center">
        <div class="container display-flex flex-row justify-between align-items-center">
            <p>© revshareparty</p>
            <nav class="footer-nav">
                <ul class="display-flex flex-row gap-40">
                    <li>
                        <RouterLink to="/party-page">party-page</RouterLink>
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
                        <RouterLink to="/create-party">create-party</RouterLink>
                    </li>
                </ul>
            </nav>
            <ul class="display-flex flex-row gap-4">
                <li>
                    <a class="social-footer pointer" title="Join our community in X">
                        <img alt="X" src="/images/LogoX.svg" />
                    </a>
                </li>
                <li>
                    <a class="social-footer pointer" title="Follow the news in our Telegram channel">
                        <img alt="Telegram" src="/images/LogoTelegram.svg" />
                    </a>
                </li>
                <li>
                    <a class="social-footer pointer" title="Join our Discord community">
                        <img alt="Discord" src="/images/LogoDiscord.svg" />
                    </a>
                </li>
                <li>
                    <a class="social-footer pointer" title="Lets go check our videos">
                        <img alt="Youtube" src="/images/LogoYoutube.svg" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>
<style lang="scss" scoped>
.footer-w {
    height: 133px;
    width: 100%;
    padding: 50px 0;

    .container {
        width: 100%;
    }
}

.social-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #252526;
    border: 1px solid transparent;
    width: 52px;
    height: 52px;
    border-radius: 12px;
    transition: all 0.25s ease-in-out;

    &:hover {
        border: 1px solid #92fe75;
        background-color: #151518;
    }
}
</style>
