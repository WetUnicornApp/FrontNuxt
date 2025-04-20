<script setup lang="ts">
import '@/components/buttons/send';
import { useAuth } from '~/composables/useAuth';
import { Empty, type LoginModel } from '~/models/user-models/login';

definePageMeta({
  layout: "logout",
});

const loginData = ref<LoginModel>(Empty);

const processLogin = async () => {
  const form = document.getElementById('page-user-login-form') as HTMLFormElement;
  form.reportValidity()

  // if (res.success) {
  const { login } = useAuth()
  const res = await login(loginData.value)


  if (res) {
    navigateTo('/')
  }

  // }
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
