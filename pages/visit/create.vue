<script setup lang="ts">
import { Empty, type VisitModel } from '~/models/visit-models/visit';

definePageMeta({
  layout: "big-form",
});

const Visit = ref<VisitModel>(Empty);


</script>

<template>

  <VisitForm :model="Visit" action="/visit/create" title="CREATE_VISIT" />
</template>
