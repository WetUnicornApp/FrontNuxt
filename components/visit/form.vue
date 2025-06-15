<script setup lang="ts">
import { reactive } from 'vue';
import { ButtonsSave } from '#components';
import '@/components/buttons/send';
import { type VisitModel, Validate } from '~/models/visit-models/visit';
import { getData } from '~/scripts/api/fetch';

const props = defineProps<{
    model: VisitModel;
    action: string;
    title: string
}>();

const isShow = ref(false);
const message = ref('');



const model = reactive({ ...props.model });
const save = async () => {
    const form = document.getElementById('page-user-register-form') as HTMLFormElement;
    if (!form.reportValidity()) {
        return;
    }

    const res = await getData<VisitModel, VisitModel>({
        endpoint: props.action,
        method: model.id == 0 ? 'POST' : 'PUT',
        body: model,
        validate: Validate
    });
    if (res.success) {
        navigateTo('/visit/list')
    } else {
        isShow.value = true;
        message.value = res.message
    }
    return null;
};

</script>


<template>
    <div>
        <form id="page-user-register-form">
            <div class="my-2">
                <h2 class="text-center">{{ $t(props.title) }}</h2>
            </div>

            <div class="m-3">
                <SelectsBasic v-model="model.pet_id" name="pet_id" :placeholder="$t('PET')"
                    icon="material-symbols:pet-supplies" :label="$t('PET')" :required="true" endpoint="/pet/list?s=1" />
            </div>


            <div class="m-3">
                <SelectsBasic v-model="model.employee_id" name="employee_id" :placeholder="$t('EMPLOYEE')"
                    icon="fa6-solid:user-doctor" :label="$t('EMPLOYEE')" :required="true"
                    endpoint="/employee/list?s=1" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="model.date" name="date" :placeholder="$t('DATE')"
                    icon="material-symbols:edit-calendar-sharp" type="date" :label="$t('DATE')" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="model.time" name="time" :placeholder="$t('HOUR')"
                    icon="material-symbols:nest-clock-farsight-analog-outline-rounded" type="time"
                    :label="$t('HOUR')" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="model.name" name="name" :placeholder="$t('NAME')" icon="ic:outline-short-text"
                    type="text" :label="$t('NAME')" />
            </div>

            <div class="m-3">
                <TextareasBasic v-model="model.description" name="description" :placeholder="$t('DESCRIPTION')"
                    icon="fluent:text-description-16-filled" :label="$t('DESCRIPTION')" :required="true" />
            </div>
            <div v-if="isShow" class="my-2">
                <AlertsDanger :key="message" :message="message" />
            </div>
            <ButtonsSave :action="save" />
        </form>
    </div>
</template>
