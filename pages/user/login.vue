<script setup lang="ts">
// import { useI18n } from "vue-i18n";

definePageMeta({
  layout: "logout",
});

const login = () => {
  console.log("zalogowano się");
};
</script>

<template>
  <div class="bg-2 p-4 rounded-4">
    <div class="my-4">
      <h2 class="text-center">{{ $t("LOGIN") }}</h2>
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
    <ButtonsBasic
      title="SEND"
      :action="login"
      type="accent"
      class="d-flex justify-content-end mt-4"
    />
  </div>
</template>
