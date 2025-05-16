<script setup lang="ts">
// import { useI18n } from "vue-i18n";

import '@/components/buttons/send';
import { Empty, type RegisterModel } from '~/models/user-models/register';
definePageMeta({
  layout: "big-form",
});

const Register = ref<RegisterModel>(Empty);

const login = async () => {
  // const form = document.getElementById('page-user-register-form') as HTMLFormElement;
  // form.reportValidity()
  // const res = await $fetch<ApiResponse<RegisterModel>>('/api/user/register', {
  //   method: 'POST',
  //   body: Register.value
  // });

  // if (res.success) {
  //   navigateTo('/user/login')
  // }
  return null;
};

</script>

<template>
  <div class="">
    <form id="page-user-register-form" class="bg-2 p-4 rounded-4">
      <div class="my-4">
        <h2 class="text-center">{{ $t("REGISTER") }}</h2>
      </div>
      <div class="m-md-3">
        <InputsBasic v-model="Register.email" type="email" name="email" icon="material-symbols:alternate-email-rounded"
          label="EMAIL" :required="true" />
        <InputsBasic v-model="Register.password" type="password" name="password" icon="material-symbols:lock"
          label="PASSWORD" class="my-3" :required="true" />
        <InputsBasic v-model="Register.repeat_password" type="password" name="repeat_password"
          icon="material-symbols:lock" label="REPEAT_PASSWORD" class="my-3" :required="true" />
        <InputsBasic v-model="Register.first_name" type="text" name="first_name" icon="material-symbols:person-2"
          label="FIRST_NAME" class="my-3" :required="true" />
        <InputsBasic v-model="Register.last_name" type="text" name="last_name" icon="material-symbols:person-2"
          label="LAST_NAME" class="my-3" :required="true" />
      </div>
      <ButtonsSend :action="login" />
    </form>
  </div>
</template>
