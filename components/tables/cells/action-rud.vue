<script setup lang="ts">

const props = defineProps<{
    params: {
        actionSource: string;
        data: { id: number };
        onDeleted?: () => void;
    };
}>();

const source = props.params.actionSource;
const id = props.params.data.id;

const handleDeleted = () => {
    if (props.params.onDeleted) {
        props.params.onDeleted();
    }
};
</script>

<template>
    <div class="actions d-flex my-auto h-100 justify-content-end">
        <ButtonsView :action="source + 'view/' + id" />
        <ButtonsRemove :action="source + 'delete/' + id" :redirect="source + 'list'" @deleted="handleDeleted" />
        <ButtonsEdit :action="source + 'edit/' + id" />
    </div>
</template>

<style scoped></style>
