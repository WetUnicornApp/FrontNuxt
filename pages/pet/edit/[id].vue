<script setup lang="ts">
import type { PetModel } from '~/models/pet-models/pet';
import { getData } from '~/scripts/api/fetch';

definePageMeta({
    layout: "big-form",
});

const route = useRoute();
const id = route.params.id;

const isError = ref(false)

const res = await getData<string, PetModel>({
    endpoint: `/pet/view/${id}`,
    method: 'GET',
});

isError.value = res.success

console.log(res.data)
const Owner = ref<PetModel>(res.data);


</script>

<template>
    <PetForm :model="Owner" :action="'/pet/edit/' + res.data.id" title="EDIT_PET" />
</template>
