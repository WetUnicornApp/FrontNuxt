<script setup lang="ts">
import '@/components/buttons/send';
import type { RegisterModel } from '~/models/user-models/register';

definePageMeta({
  layout: "logout",
});

const Register = ref<RegisterModel>({
  email: '',
  password: ''
});

const login = async () => {
  const form = document.getElementById('page-user-register-form') as HTMLFormElement;
  form.reportValidity()
  const res = await $fetch('/api/user/register', {
    method: 'POST',
    // body: {
    //   // My form data
    // }
  })

  console.log(Register.value);
  return null;
};
</script>

<template>
  <form id="page-user-register-form" class="bg-2 p-4 rounded-4">
    <div class="my-4">
      <h2 class="text-center">{{ $t("REGISTER") }}</h2>
    </div>
    <div>
      <InputsBasic v-model="Register.email" type="email" name="email" icon="material-symbols:alternate-email-rounded"
        label="EMAIL" :required="true" />
      <InputsBasic v-model="Register.password" type="password" name="password" icon="material-symbols:lock"
        label="PASSWORD" class="my-3" :required="true" />
    </div>
    <ButtonsSend :action="login" />
  </form>
</template>
