<script setup>
import card from '/status/card.vue'
import OK from '/status/OK.vue'
import NotGood from '/status/NotGood.vue'
import Review from '/status/Review.vue'
import Bad from '/status/Bad.vue'
import Off from '/status/Off.vue'
</script>

<template>
    <card title="所有服务">
        <template #status>
            <OK />
        </template>
    </card>
</template>