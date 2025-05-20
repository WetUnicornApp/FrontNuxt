<script setup lang="ts">
// import { useI18n } from "vue-i18n";

import { ButtonsSave } from '#components';
import '@/components/buttons/send';
import type { VisitModel } from '~/models/visit-models/visit';
import { Empty } from '~/models/visit-models/visit';

definePageMeta({
  layout: "big-form",
});

const Visit = ref<VisitModel>(Empty);

const send = () => {
  return null
}


</script>

<template>
  <div class="">
    <form id="page-user-register-form" class="">
      <div class="my-2">
        <h2 class="text-center">{{ $t("CREATE_VISIT") }}</h2>
      </div>
      <div class="m-3">
        <SelectsBasic v-model="Visit.pet" :name="$t('PET')" :placeholder="$t('PET')"
          icon="material-symbols:pet-supplies" :label="$t('PET')" :required="true" endpoint="/pet/list?simple=1" />
      </div>

      <div class="m-3">
        <SelectsBasic v-model="Visit.owner" name="owner" :placeholder="$t('OWNER')"
          icon="material-symbols:person-rounded" :label="$t('OWNER')" :required="true" endpoint="/pet/list?simple=1" />
      </div>

      <div class="m-3">
        <SelectsBasic v-model="Visit.employee" name="employee" :placeholder="$t('EMPLOYEE')"
          icon="fa6-solid:user-doctor" :label="$t('EMPLOYEE')" :required="true" endpoint="/pet/list?simple=1" />
      </div>
      <div class="m-3">
        <InputsBasic v-model="Visit.date" name="date" :placeholder="$t('DATE')"
          icon="material-symbols:edit-calendar-sharp" type="date" :label="$t('DATE')" />
      </div>
      <div class="m-3">
        <InputsBasic v-model="Visit.time" name="time" :placeholder="$t('HOUR')"
          icon="material-symbols:nest-clock-farsight-analog-outline-rounded" type="time" :label="$t('HOUR')" />
      </div>
      <div class="m-3">
        <InputsBasic v-model="Visit.name" name="NAME" :placeholder="$t('NAME')" icon="ic:outline-short-text" type="text"
          :label="$t('NAME')" />
      </div>
      <div class="m-3">
        <TextareasBasic v-model="Visit.description" name="description" :placeholder="$t('DESCRIPTION')"
          icon="fluent:text-description-16-filled" :label="$t('DESCRIPTION')" :required="true" />
      </div>
      <ButtonsSave :action="send" />
    </form>
  </div>
</template>
