import { AlertsBasic, Icon } from '../../.nuxt/components';
<script setup lang="ts">
const props = defineProps<{
    message?: string
}>();

const message = props.message ?? 'SOMETHING_WENT_WRONG';

</script>

<template>
    <AlertsBasic icon="material-symbols:dangerous-rounded" :message="message" color="bg-danger-1" />
</template>