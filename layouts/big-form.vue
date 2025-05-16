<script setup lang="ts">
import DefaultLayout from "./default.vue";
</script>



<template>
  <default-layout>
    <div id="layout-big-form-box" class="position-relative top-50 start-50 translate-middle shadow">
      <div class="rounded-3 bg-2 p-4 position-relative">
        <span id="layout-big-form-circle"
          class="position-absolute start-50 translate-middle rounded-circle p-4 bg-3 shadow">
          <Icon name="lucide-lab:unicorn-head" class="position-absolute  start-50 translate-middle fs-3" />
        </span>
        <slot />
      </div>
    </div>

  </default-layout>
</template>


<style scoped>
#layout-big-form-box {
  width: clamp(300px, 80vw, 1500px);
}

#layout-big-form-circle,
#layout-big-form-circle Icon {
  top: 0%;
}
</style>
