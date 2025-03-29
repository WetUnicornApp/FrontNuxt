<script setup lang="ts">
// import { useI18n } from "vue-i18n";

definePageMeta({
  layout: "logout",
});

const login = () => {
  console.log("zalogowano się");

  // const res = await $fetch('/api/submit', {
  //   method: 'POST',
  //   body: {
  //     // My form data
  //   }
  // })
};
</script>

<template>
  <form class="bg-2 p-4 rounded-4">
    <div class="my-4">
      <h2 class="text-center">{{ $t("REGISTER") }}</h2>
    </div>
    <div>
      <InputsBasic
        type="email"
        name="email"
        icon="material-symbols:alternate-email-rounded"
        label="EMAIL"
      />
      <InputsBasic
        type="password"
        name="password"
        icon="material-symbols:lock"
        label="PASSWORD"
        class="my-3"
      />
    </div>
    <ButtonsSave />
  </form>
</template>
