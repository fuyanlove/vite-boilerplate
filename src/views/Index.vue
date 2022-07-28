<template>
    <div class="p-index">
        Index

        <img src="@/assets/img/test.png" style="width: 32px" />
        <test style="width: 32px" />
        <!-- <img src="~/axios/test.svg" svg-inline style="width: 32px" /> -->
    </div>
</template>

<script setup>
import test from "@/assets/img/test.svg?component";
</script>

<script>
export default {
    name: "IndexPage",
    props: [],
    data: function () {
        return {};
    },
    computed: {},
    methods: {},
    created: function () {},
    components: {},
};
</script>

<style scoped lang="less">
@import "@/assets/css/index.less";
</style>
