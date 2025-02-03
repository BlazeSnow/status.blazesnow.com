<script setup>
import card from '/status/card.vue'
import OK from '/status/OK.vue'
import NotGood from '/status/NotGood.vue'
import Review from '/status/Review.vue'
import Bad from '/status/Bad.vue'
import Off from '/status/Off.vue'
</script>

<template>
    <card title="blazesnow.com" link="https://blazesnow.com" description="主站">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="blazesnow.org" link="https://blazesnow.org" description="备用">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="blazesnow.cn" link="https://blazesnow.cn" description="粤ICP备2024284878号">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="blazesnow.github.io" link="https://blazesnow.github.io" description="GitHub Pages">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="blazesnow.pages.dev" link="https://blazesnow.pages.dev" description="Cloudflare Pages">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="blazesnow.vercel.app" link="https://blazesnow.vercel.app" description="Vercel">
        <template #status>
            <OK />
        </template>
    </card>
</template>