<script setup lang="ts">
// import { useI18n } from "vue-i18n";

import '@/components/buttons/send';
import type { VisitModel } from '~/models/visit-models/visit';
import { Empty } from '~/models/visit-models/visit';

definePageMeta({
  layout: "big-form",
});

const Visit = ref<VisitModel>(Empty);


</script>

<template>
  <div class="">
    <form id="page-user-register-form" class="bg-2 p-4 rounded-4">
      <div class="my-4">
        <h2 class="text-center">{{ $t("CREATE_VISIT") }}</h2>
      </div>
      <div class="m-md-3">
        <SelectsBasic v-model="Visit.pet" :name="$t('PET')" :placeholder="$t('PET')"
          icon="material-symbols:pet-supplies" :label="$t('PET')" :required="true" endpoint="/pet/list?simple=1" />
      </div>
      <!-- <ButtonsSend :action="login" /> -->
    </form>
  </div>
</template>
