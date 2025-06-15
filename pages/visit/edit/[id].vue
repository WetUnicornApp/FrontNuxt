<script setup lang="ts">
import type { VisitModel } from '~/models/visit-models/visit';
import { getData } from '~/scripts/api/fetch';

definePageMeta({
    layout: "big-form",
});

const route = useRoute();
const id = route.params.id;

const isError = ref(false)

const res = await getData<string, VisitModel>({
    endpoint: `/visit/view/${id}`,
    method: 'GET',
});

isError.value = res.success

console.log(res.data)
const Visit = ref<VisitModel>(res.data);


</script>

<template>
    <VisitForm :model="Visit" :action="'/visit/edit/' + res.data.id" title="EDIT_VISIT" />
</template>
