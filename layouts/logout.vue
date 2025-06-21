<script setup lang="ts">
// import { useI18n } from "vue-i18n";
import "@/assets/styles/main.css";


onMounted(async () => {
  await nextTick();
  setTimeout(() => {
    (window as any).__TEST_READY__ = true;
  }, 3000);
});
</script>

<template>
  <div class="position-absolute top-50 start-50 translate-middle overflow-auto">
    <slot />
  </div>
</template>
