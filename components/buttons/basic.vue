<script lang="ts" setup>
import type { ButtonType } from "~/types/buttons/button";
const props = defineProps<ButtonType>();

const method = (event: Event) => {
  event.preventDefault();

  // const target = event.target as HTMLElement;
  // const form = target.closest('form');
  // if (form) {
  //   const res = form.reportValidity()
  //   console.log(res)
  // }
  // console.log(form);

  if (typeof props.action === "function") {
    props.action();
  }
};


const computedClass = `${props.type} rounded border-0 px-3 py-2 fw-bold`;
</script>

<template>
  <div>
    <button :class="computedClass" @click="method">
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
