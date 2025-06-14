<script setup lang="ts">
import { Empty, type OwnerModel } from '~/models/owner-models/owner';

definePageMeta({
  layout: "big-form",
});

const Owner = ref<OwnerModel>(Empty);


</script>

<template>

  <OwnerForm :model="Owner" action="/owner/create" title="CREATE_OWNER" />
</template>
