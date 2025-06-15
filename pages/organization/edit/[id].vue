<script setup lang="ts">
import type { OrganizationModel } from '~/models/organization-models/organization';
import { getData } from '~/scripts/api/fetch';

definePageMeta({
    layout: "big-form",
});

const route = useRoute();
const id = route.params.id;

const isError = ref(false)

const res = await getData<string, OrganizationModel>({
    endpoint: `/organization/view/${id}`,
    method: 'GET',
});

isError.value = res.success

const Owner = ref<OrganizationModel>(res.data);


</script>

<template>
    <OrganizationForm :model="Owner" :action="'/organization/edit/' + res.data.id" title="EDIT_ORGANIZATION" />
</template>
