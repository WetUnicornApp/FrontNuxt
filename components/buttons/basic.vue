<script lang="ts" setup>
import { ref } from "vue";
import type { ButtonType } from "~/types/buttons/button";

const props = defineProps<ButtonType>();
const isLoading = ref(false);

const method = async (event: Event) => {
  event.preventDefault();

  if (typeof props.action === "function") {
    try {
      isLoading.value = true;
      await props.action();
    } finally {
      isLoading.value = false;
    }
  }
};

const computedClass = `${props.type} rounded border-0 px-3 py-2 fw-bold --a-increase`;
</script>

<template>
  <div>
    <button :class="computedClass" :disabled="isLoading" @click="method">
      <span v-if="isLoading" class="spinner-icon me-2" />
      <span>{{ $t(title) }}</span>
    </button>
  </div>
</template>

<style scoped>
.accent {
  background-color: var(--c-accent);
  color: var(--c-text);
}

.gradient {
  background-image: var(--c-grad-1);
  color: var(--c-text);
}

.spinner-icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.75s linear infinite;
  vertical-align: middle;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
