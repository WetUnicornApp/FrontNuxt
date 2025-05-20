<script lang="ts" setup>
import type { TextareaType } from "~/types/forms/textarea";

const props = defineProps<TextareaType>();
const emit = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
    emit("update:modelValue", (event.target as HTMLTextAreaElement).value);
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
            <textarea :id="props.name" :name="props.name" :placeholder="props.placeholder"
                :required="props.required ?? false" class="bg-1 border-0 p-2 rounded-end-2 flex-fill"
                :value="props.modelValue" @input="updateValue" />
        </div>
        <div v-else>
            <textarea :id="props.name" :name="props.name" :placeholder="props.placeholder"
                :required="props.required ?? false" class="bg-1 border-0 p-2 rounded-2 flex-fill"
                :value="props.modelValue" @input="updateValue" />
        </div>
    </div>
</template>

<style scoped>
textarea {
    color: var(--c-text);
    resize: vertical;
}
</style>
