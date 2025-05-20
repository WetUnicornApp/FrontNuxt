<!-- eslint-disable vue/first-attribute-linebreak -->
<script setup lang="ts">
import { getData } from '~/scripts/api/fetch';
import type { SelectType } from '~/types/forms/select';

const props = defineProps<SelectType>();
const emit = defineEmits(["update:modelValue"]);

const options = async (): Promise<Record<string, string>[]> => {
    if (props.options) return props.options;
    if (props.endpoint) {
        const res = await getData({ endpoint: props.endpoint, method: 'GET' });
        return res.data as Record<string, string>[];
    }
    return [];
};

const list = await options();

const updateValue = (event: Event) => {
    emit("update:modelValue", (event.target as HTMLSelectElement).value);
};
</script>

<template>
    <div>
        <label v-if="props.label" :for="props.name" class="my-1">
            {{ $t(props.label) }}
        </label>

        <div v-if="props.icon" class="d-flex">
            <div class="fs-4 bg-1 border-0 p-2 rounded-start-2">
                <Icon :name="props.icon" class="my-auto h-100 me-2" />
            </div>
            <BFormSelect :id="props.name" :aria-label="props.name" :placeholder="props.placeholder"
                :required="props.required ?? false" class="fs-4 bg-1 border-0 rounded-end-2 rounded-start-0 fs-6"
                @change="updateValue">
                <option v-for="record in list" :key="Object.keys(record)[0]" :value="Object.keys(record)[0]"
                    class="fs-6">
                    {{ Object.values(record)[0] }}
                </option>
            </BFormSelect>
        </div>

        <div v-else>
            <BFormSelect :id="props.name" :aria-label="props.name" :placeholder="props.placeholder"
                :required="props.required ?? false" class="fs-4 bg-1 border-0 rounded-2 fs-6" @change="updateValue">
                <option v-for="record in list" :key="Object.keys(record)[0]" :value="Object.keys(record)[0]"
                    class="fs-6">
                    {{ Object.values(record)[0] }}
                </option>
            </BFormSelect>
        </div>
    </div>
</template>

<style scoped>
option,
select {
    color: var(--c-text);
}
</style>
