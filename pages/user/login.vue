<script setup lang="ts">
import '@/components/buttons/send';
import { Empty, type LoginModel } from '~/models/user-models/login';
import type { ApiResponse } from '~/types/responses/api-response';
import type { LoginResponse } from '~/types/responses/login-response';

definePageMeta({
  layout: "logout",
});

const loginData = ref<LoginModel>(Empty);

const processLogin = async () => {
  const form = document.getElementById('page-user-login-form') as HTMLFormElement;
  form.reportValidity()
  const res = await $fetch<ApiResponse<LoginResponse>>('/api/user/login', {
    method: 'POST',
    body: loginData.value
  });
  if (res.success) {
    navigateTo('/')
  }
  return null;
};
</script>

<template>
  <form id="page-user-login-form" class="bg-2 p-4 rounded-4">
    <div class="my-4">
      <h2 class="text-center">{{ $t("LOGIN") }}</h2>
    </div>
    <div class="m-md-3">
      <InputsBasic v-model="loginData.email" type="email" name="email" icon="material-symbols:alternate-email-rounded"
        label="EMAIL" :required="true" />
      <InputsBasic v-model="loginData.password" type="password" name="password" icon="material-symbols:lock"
        label="PASSWORD" class="my-3" :required="true" />
    </div>
    <ButtonsSend :action="processLogin" />
  </form>
</template>
