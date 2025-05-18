<script lang="ts" setup>
import type { InputType } from "~/types/forms/input";
const props = defineProps<InputType>();
const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>


<template>
  <div>
    <div>
      <label v-if="props.label" :for="props.name" class="my-1">
        {{ $t(props.label) }}
      </label>
    </div>
    <div v-if="props.icon" class="d-flex">
      <div class="fs-4 bg-1 border-0 p-2 rounded-start-2">
        <Icon :name="props.icon" class="my-auto h-100 me-2" />
      </div>
      <input :id="props.name" :type="props.type" :name="props.name" :placeholder="props.placeholder"
        :value="props.modelValue" :required="props.required ?? false" class="bg-1 border-0 p-2 rounded-end-2 flex-fill"
        @input="updateValue">
    </div>
    <div v-else>
      <input :id="props.name" :type="props.type" :name="props.name" :placeholder="props.placeholder"
        :value="props.modelValue" :required="props.required ?? false" class="bg-1 border-0 p-2 rounded-2 flex-fill"
        @input="updateValue">
    </div>
  </div>
</template>
