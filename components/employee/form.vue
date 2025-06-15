<script setup lang="ts">
import { reactive } from 'vue';
import { ButtonsSave } from '#components';
import '@/components/buttons/send';
import { getData } from '~/scripts/api/fetch';
import type EmployeeModel from '../../models/employee-models/employee';
import { Validate } from '../../models/employee-models/employee';

const props = defineProps<{
    model: EmployeeModel;
    action: string;
    title: string;
}>();

const isShow = ref(false);
const message = ref('');

const model = reactive({ ...props.model });
const ave = async () => {
    const form = document.getElementById('component-employee-form-form') as HTMLFormElement;
    if (!form.reportValidity()) {
        return;
    }

    const res = await getData<EmployeeModel, EmployeeModel>({
        endpoint: props.action,
        method: model.id == 0 ? 'POST' : 'PUT',
        body: model,
        validate: Validate
    });
    if (res.success) {
        navigateTo('/employee/list')
    } else {
        isShow.value = true;
        message.value = res.message
    }
    return null;
};


</script>


<template>
    <div>
        <form id="component-employee-form-form">
            <div class="my-2">
                <h2 class="text-center">{{ $t(props.title) }}</h2>
            </div>

            <div class="m-3">
                <InputsBasic v-model="model.email" name="email" :placeholder="$t('EMAIL')"
                    icon="material-symbols:alternate-email-rounded" type="email" :label="$t('EMAIL')" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="model.first_name" name="first_name" :placeholder="$t('FIRST_NAME')"
                    icon="material-symbols:account-circle" type="text" :label="$t('FIRST_NAME')" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="model.last_name" name="time" :placeholder="$t('LAST_NAME')"
                    icon="material-symbols:account-circle" type="text" :label="$t('LAST_NAME')" />
            </div>
            <div v-if="isShow" class="my-2">
                <AlertsDanger :key="message" :message="message" />
            </div>
            <ButtonsSave :action="ave" />
        </form>
    </div>
</template>
