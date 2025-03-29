<script lang="ts" setup>
import type { ButtonType } from "~/types/buttons/button";
const props = defineProps<ButtonType>();

const method = (event: Event) => {
  event.preventDefault();
  if (typeof props.action === "function") {
    props.action();
  }
};

const computedClass = `${props.type} p-2 w-100 fw-bold text-start`;
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
  color: var(--c-text);
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid var(--c-text);
  background-color: rgba(0, 0, 0, 0);
  transition: color 0.3 ease-in-out;
}
.accent:hover {
  color: var(--c-accent);
  border-bottom: 1px solid var(--c-accent);
}
</style>
