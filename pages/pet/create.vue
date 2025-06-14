<script setup lang="ts">
import { Empty, type PetModel } from '~/models/pet-models/pet';


definePageMeta({
  layout: "big-form",
});

const pet = ref<PetModel>(Empty);


</script>

<template>

  <PetForm :model="pet" action="/pet/create" title="CREATE_PET" />
</template>
