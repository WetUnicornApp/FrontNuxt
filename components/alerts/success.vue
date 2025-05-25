import { AlertsBasic, Icon } from '../../.nuxt/components';
<script setup lang="ts">
const props = defineProps<{
    message?: string
}>();

const message = props.message ?? 'SUCCESS';

</script>

<template>
    <AlertsBasic icon="clarity:success-standard-solid" :message="message" color="bg-success-1" />
</template>