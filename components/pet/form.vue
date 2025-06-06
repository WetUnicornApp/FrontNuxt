<script setup lang="ts">
import { reactive } from 'vue';
import { ButtonsSave } from '#components';
import '@/components/buttons/send';
import type { PetModel } from '~/models/pet-models/pet';

const props = defineProps<{
    model: PetModel;
    action: string;
    title: string
}>();

const model = reactive({ ...props.model });
const save = () => {
    console.log('z form pet')
    return null;
};


</script>


<template>
    <div>
        <form id="components-pet-form">
            <div class="my-2">
                <h2 class="text-center">{{ $t(props.title) }}</h2>
            </div>
            <div class="m-3">
                <SelectsBasic v-model="model.owner_identifier" name="owner_identifier" :placeholder="$t('OWNER')"
                    icon="material-symbols:person-rounded" :label="$t('OWNER')" :required="true"
                    endpoint="/pet/list?simple=1" />
            </div>

            <div class="m-3">
                <SelectsBasic v-model="model.gender" name="gender" :placeholder="$t('GENDER')"
                    icon="tabler:gender-bigender" :label="$t('GENDER')" :required="true" endpoint="/pet/type-list" />
            </div>

            <div class="m-3">
                <SelectsBasic v-model="model.type_identifier" name="gender" :placeholder="$t('GENDER')"
                    icon="tabler:gender-bigender" :label="$t('GENDER')" :required="true" endpoint="/pet/gender-list" />
            </div>


            <div class="m-3">
                <InputsBasic v-model="model.date_of_birth" name="date_of_birth" :placeholder="$t('DATE_OF_BIRTH')"
                    icon="material-symbols:edit-calendar-sharp" type="date" :label="$t('DATE_OF_BIRTH')" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="model.name" name="NAME" :placeholder="$t('NAME')" icon="ic:outline-short-text"
                    type="text" :label="$t('NAME')" />
            </div>

            <div class="m-3">
                <TextareasBasic v-model="model.description" name="description" :placeholder="$t('DESCRIPTION')"
                    icon="fluent:text-description-16-filled" :label="$t('DESCRIPTION')" :required="true" />
            </div>

            <ButtonsSave :action="save" />
        </form>
    </div>
</template>
