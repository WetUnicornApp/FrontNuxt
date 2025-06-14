<script setup lang="ts">
import { getData } from '~/scripts/api/fetch';

const props = defineProps<{
    action: string;
    redirect: string;
}>();

const emit = defineEmits<{
    (e: 'deleted'): void;
}>();

const remove = async () => {
    const res = await getData<string, string>({
        endpoint: props.action,
        method: 'DELETE',
    });

    if (res.success) {
        emit('deleted');
        navigateTo(props.redirect);
    }
};
</script>

<template>
    <Icon name="material-symbols:delete-rounded" class="icon --btn fs-3 mx-1 --a-increase my-auto h-100"
        :title="$t('REMOVE')" @click="remove" />
</template>

<style scoped>
.icon {
    cursor: pointer;
}
</style>
