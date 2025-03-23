<script lang="ts" setup>
import type { ButtonType } from "~/types/buttons/button";
const props = defineProps<ButtonType>();

const method = (event: Event) => {
  event.preventDefault();
  if (typeof props.action === "function") {
    props.action();
  }
};

const computedClass = `${props.type} rounded border-0 px-3 py-2 fw-bold`;
</script>

<template>
  <div>
    <button @click="method" :class="computedClass">
      {{ $t(title) }}
    </button>
  </div>
</template>

<style scoped>
.accent {
  background-color: var(--c-accent);
  color: var(--c-text);
}
</style>
