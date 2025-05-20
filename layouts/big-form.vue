<script setup lang="ts">
import DefaultLayout from "./default.vue";
</script>



<template>
  <default-layout>
    <div id="layout-big-form-box" class="m-5">
      <div class="rounded-3 bg-2 p-5 rounded-4 ">
        <slot />
      </div>
    </div>

  </default-layout>
</template>


<style scoped>
/* #layout-big-form-box {
  width: clamp(300px, 80vw, 1500px);
} */
</style>
