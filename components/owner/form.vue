<script setup lang="ts">
import { reactive } from 'vue';
import { ButtonsSave } from '#components';
import '@/components/buttons/send';
import type { VisitModel } from '~/models/visit-models/visit';

const props = defineProps<{
    model: VisitModel;
    action: string;
    title: string
}>();

const localModel = reactive({ ...props.model });
const saveVisit = () => {
    console.log('z form visit')
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
                <SelectsBasic v-model="localModel.pet" :name="$t('PET')" :placeholder="$t('PET')"
                    icon="material-symbols:pet-supplies" :label="$t('PET')" :required="true"
                    endpoint="/pet/list?simple=1" />
            </div>

            <div class="m-3">
                <SelectsBasic v-model="localModel.owner" name="owner" :placeholder="$t('OWNER')"
                    icon="material-symbols:person-rounded" :label="$t('OWNER')" :required="true"
                    endpoint="/pet/list?simple=1" />
            </div>

            <div class="m-3">
                <SelectsBasic v-model="localModel.employee" name="employee" :placeholder="$t('EMPLOYEE')"
                    icon="fa6-solid:user-doctor" :label="$t('EMPLOYEE')" :required="true"
                    endpoint="/pet/list?simple=1" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="localModel.date" name="date" :placeholder="$t('DATE')"
                    icon="material-symbols:edit-calendar-sharp" type="date" :label="$t('DATE')" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="localModel.time" name="time" :placeholder="$t('HOUR')"
                    icon="material-symbols:nest-clock-farsight-analog-outline-rounded" type="time"
                    :label="$t('HOUR')" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="localModel.name" name="NAME" :placeholder="$t('NAME')"
                    icon="ic:outline-short-text" type="text" :label="$t('NAME')" />
            </div>

            <div class="m-3">
                <TextareasBasic v-model="localModel.description" name="description" :placeholder="$t('DESCRIPTION')"
                    icon="fluent:text-description-16-filled" :label="$t('DESCRIPTION')" :required="true" />
            </div>

            <ButtonsSave :action="saveVisit" />
        </form>
    </div>
</template>
