<script setup>
import card from '/status/card.vue'
import OK from '/status/OK.vue'
import NotGood from '/status/NotGood.vue'
import Review from '/status/Review.vue'
import Bad from '/status/Bad.vue'
import Off from '/status/Off.vue'
</script>

<template>
    <card title="onedrivehosts.blazesnow.com" link="https://onedrivehosts.blazesnow.com">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="github.com" link="https://raw.githubusercontent.com/BlazeSnow/OneDriveHosts/main/hosts">
        <template #status>
            <OK />
        </template>
    </card>
    <card title="gitee.com" link="https://gitee.com/blazesnow/OneDriveHosts/raw/main/hosts">
        <template #status>
            <OK />
        </template>
    </card>
</template>