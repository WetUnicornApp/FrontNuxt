<script setup lang="ts">
import '@/components/buttons/send';
import { Empty, Validate, type RegisterModel } from '~/models/user-models/register';
import { getData } from '~/scripts/api/fetch';

definePageMeta({
  layout: "logout",
});

const Register = ref<RegisterModel>(Empty);
const isShow = ref(false);
const message = ref('');

const register = async () => {
  const form = document.getElementById('page-user-register-form') as HTMLFormElement;
  if (!form.reportValidity()) {
    return;
  }

  const res = await getData<RegisterModel, RegisterModel>({
    endpoint: '/user/register',
    method: 'POST',
    body: Register.value,
    validate: Validate
  });
  if (res.success) {
    navigateTo('/user/login')
  } else {
    isShow.value = true;
    message.value = res.message
  }
  return null;
};
</script>

<template>
  <div>
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
      <ButtonsSend :action="register" />
      <div v-if="isShow" class="my-2">
        <AlertsDanger :key="message" :message="message" />
      </div>
    </form>
    <div class="d-flex justify-content-end my-2">
      <nuxt-link to="/user/login" class="">{{ $t('LOGIN') }}</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
#page-user-register-form {
  width: clamp(300px, 40vw, 700px);
}
</style>