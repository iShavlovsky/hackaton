<template>
    <section>
        <div class="container main-container-padding">
            <RouterLink class="display-flex align-items-center" to="/">
                <n-icon :component="ChevronBackOutline" :depth="1" :size="24" color="#fff" />
                <p>Back</p>
            </RouterLink>
        </div>
    </section>
    <section>
        <div class="container main-container-padding max-w-648">
            <div class="display-grid gap-16 text-center">
                <h1>Create party</h1>
                <p class="op-06">Unite with others to increase reward</p>
            </div>
            <div class="display-grid gap-16 mt-40">
                <div class="party-form-w">
                    <n-input v-model:value="value" placeholder="Basic Input" type="text" />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { ChevronBackOutline } from '@vicons/ionicons5'

import { ref } from 'vue'

const value = ref(null)
</script>
<style>
.max-w-648 {
    max-width: 648px;
}

.party-form-w {
    background-color: #151518;
    border-radius: 24px;
    padding: 40px;
}
</style>
