<script setup lang="ts">
import { Empty, type OrganizationModel } from '~/models/organization-models/organization';

definePageMeta({
  layout: "big-form",
});

const Organization = ref<OrganizationModel>(Empty);


</script>

<template>

  <OrganizationForm :model="Organization" action="/organization/create" title="CREATE_ORGANIZATION" />
</template>
