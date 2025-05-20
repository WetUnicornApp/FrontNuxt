<script setup lang="ts">
const props = defineProps<{ params: unknown }>();
const source = props.params.actionSource
console.log(props)
</script>


<template>
    <div class="actions d-flex my-auto h-100">
        <nuxt-link :to="source + 'edit'" class="my-auto h-100">
            <Icon name="material-symbols:edit-square-outline" class="icon --btn fs-3 mx-1 --a-increase my-auto h-100"
                :title="$t('EDIT')" />
        </nuxt-link>
        <Icon name="material-symbols:delete-rounded" class="icon --btn fs-3 mx-1 --a-increase my-auto "
            :title="$t('REMOVE')" />
        <nuxt-link :to="source + 'view'" class="my-auto h-100">
            <Icon name="material-symbols-light:eye-tracking-rounded"
                class="icon --btn fs-3 mx-1 --a-increase my-auto h-100" :title="$t('VIEW')" />
        </nuxt-link>

    </div>
</template>

<style scoped></style>
