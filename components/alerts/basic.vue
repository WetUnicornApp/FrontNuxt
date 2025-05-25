<script lang="ts" setup>
const props = defineProps<{
    color: string,
    icon: string,
    message: string
}>()
</script>

<template>
    <div :class="'d-flex p-3 rounded ' + props.color">
        <Icon :name="props.icon" class="icon fs-3 my-auto me-2" :title="$t(props.message)" />
        <span class="my-auto">{{ $t(props.message) }}</span>
    </div>
</template>

<style scoped></style>