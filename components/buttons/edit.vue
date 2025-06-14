<script setup lang="ts">
const props = defineProps<{
    action: string
}>();
</script>

<template>
    <nuxt-link :to="props.action" class="my-auto h-100">
        <Icon name="material-symbols:edit-square-outline" class="icon --btn fs-3 mx-1 --a-increase my-auto h-100"
            :title="$t('EDIT')" />
    </nuxt-link>
</template>