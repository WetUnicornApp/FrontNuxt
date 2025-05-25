import { AlertsBasic, Icon } from '../../.nuxt/components';
<script setup lang="ts">
const props = defineProps<{
    message?: string
}>();

const message = props.message ?? 'SOMETHING_WENT_WRONG';

</script>

<template>
    <AlertsBasic icon="material-symbols:warning" :message="message" color="bg-warning-1" />
</template>