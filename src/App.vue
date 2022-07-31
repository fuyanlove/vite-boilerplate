<template>
  <router-view />
</template>

<script setup lang="ts">
import { provide, reactive, computed } from "vue";
import { useHead } from "@vueuse/head";
import { title, keys, desc } from "../project.json";
const SEO = reactive({
    title: title,
    description: desc,
    keywords: keys,
});

useHead({
    title: computed(() => SEO.title),
    meta: [
        {
            name: `description`,
            content: computed(() => SEO.description),
        },
        {
            name: `keywords`,
            content: computed(() => SEO.keywords),
        },
    ],
});

provide("SEO", SEO);
</script>

<style lang="less">
@import "@/assets/css/app.less";
</style>
