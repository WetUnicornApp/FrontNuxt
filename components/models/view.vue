<script setup lang="ts">
import { getData } from '~/scripts/api/fetch';

const props = defineProps<{
    id: string,
    type: string,
    title: string
}>();


const res = await getData<string, unknown>({
    endpoint: '/' + props.type + '/view/' + props.id,
    method: 'GET',
});

const edit = '/' + props.type + '/edit/' + props.id;
const remove = '/' + props.type + '/delete/' + props.id;

const obj = computed(() => {
    const filtered = {};
    for (const key in res.data) {
        if (key !== 'id' && key !== 'identifier' && !key.endsWith('_id')) {
            let k = key.toUpperCase();
            (filtered[k]) = res.data[key];
        }
    }
    return filtered;
});
</script>


<template>
    <div>
        <div class="d-flex m-2 bg-2 rounded p-3 justify-content-between">
            <span class="fs-4 fw-bold">
                {{ $t(props.title) }}
            </span>
            <div class="d-flex">
                <ButtonsEdit :action="edit" />
                <ButtonsRemove :action="remove" redirect="/owner/list" />
            </div>

        </div>
        <div class="m-2 bg-2 rounded p-3">

            <div v-for="(val, label) in obj" :key="val" class="d-flex flex-wrap">
                <p class="mx-1">{{ $t(label) }}:</p>
                <p class="mx-1 fw-bold">{{ $t(val) }}</p>
            </div>
        </div>
    </div>
</template>