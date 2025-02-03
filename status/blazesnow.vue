<script setup>
import card from '/status/card.vue'
import OK from '/status/OK.vue'
import NotGood from '/status/NotGood.vue'
import Review from '/status/Review.vue'
import Bad from '/status/Bad.vue'
import Off from '/status/Off.vue'
</script>

<template>
    <card title="blazesnow.com" link="https://blazesnow.com">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="blazesnow.org" link="https://blazesnow.org">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="blazesnow.cn" link="https://blazesnow.cn">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="blazesnow.github.io" link="https://blazesnow.github.io">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="blazesnow.pages.dev" link="https://blazesnow.pages.dev">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="blazesnow.vercel.app" link="https://blazesnow.vercel.app">
        <template #status>
            <OK />
        </template>
    </card>
</template>