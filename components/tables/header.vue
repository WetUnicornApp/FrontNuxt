<script setup lang="ts">
const props = defineProps<{
    title: string,
    type: string
}>();
</script>

<template>

    <div class="d-flex justify-content-between m-2">
        <h3 class="fw-bold">
            {{ $t(props.title) }}
        </h3>
        <nuxt-link :to="'/' + props.type + '/create'" active-class="active-link">
            <Icon name="material-symbols:add-circle-outline" class="icon --btn fs-2 --a-increase" />
        </nuxt-link>
    </div>
</template>