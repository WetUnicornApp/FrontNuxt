<script setup lang="ts">
const props = defineProps<{
    action: string
}>();
</script>

<template>
        <nuxt-link :to="props.action" class="my-auto h-100">
            <Icon name="material-symbols-light:eye-tracking-rounded"
                class="icon --btn fs-3 mx-1 --a-increase my-auto h-100" :title="$t('VIEW')" />
        </nuxt-link>
</template>