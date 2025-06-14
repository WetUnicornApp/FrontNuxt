<script setup lang="ts">
import type { OwnerModel } from '~/models/owner-models/owner';
import { getData } from '~/scripts/api/fetch';

definePageMeta({
    layout: "big-form",
});

const route = useRoute();
const id = route.params.id;

const isError = ref(false)

const res = await getData<string, OwnerModel>({
    endpoint: `/owner/view/${id}`,
    method: 'GET',
});

isError.value = res.success

console.log(res.data)
const Owner = ref<OwnerModel>(res.data);


</script>

<template>
    <OwnerForm :model="Owner" :action="'/owner/edit/' + res.data.id" title="EDIT_OWNER" />
</template>
