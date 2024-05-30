<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <n-space>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </n-space>
    </header>
</template>

<style scoped></style>
