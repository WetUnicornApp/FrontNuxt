<script setup lang="ts">
import { reactive } from 'vue';
import { ButtonsSave } from '#components';
import '@/components/buttons/send';
import { Validate, type PetModel } from '~/models/pet-models/pet';
import { getData } from '~/scripts/api/fetch';

const props = defineProps<{
    model: PetModel;
    action: string;
    title: string
}>();

const isShow = ref(false);
const message = ref('');


const model = reactive({ ...props.model });
const save = async () => {
    const form = document.getElementById('components-pet-form') as HTMLFormElement;
    if (!form.reportValidity()) {
        return;
    }

    const res = await getData<PetModel, PetModel>({
        endpoint: props.action,
        method: model.id == 0 ? 'POST' : 'PUT',
        body: model,
        validate: Validate
    });
    if (res.success) {
        navigateTo('/pet/list')
    } else {
        isShow.value = true;
        message.value = res.message
    }
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
                <SelectsBasic v-model="model.owner_id" name="owner_id" :placeholder="$t('OWNER')"
                    icon="material-symbols:person-rounded" :label="$t('OWNER')" :required="true"
                    endpoint="/owner/list?s=1" />
            </div>

            <div class="m-3">
                <SelectsBasic v-model="model.gender" name="gender" :placeholder="$t('GENDER')"
                    icon="tabler:gender-bigender" :label="$t('GENDER')" :required="true" endpoint="/pet/gender-list"
                    :translate="true" />
            </div>

            <div class="m-3">
                <SelectsBasic v-model="model.type" name="type_id" :placeholder="$t('PET_TYPE')"
                    icon="streamline:nature-ecology-cat-head-cat-pet-animals-felyne" :label="$t('PET_TYPE')"
                    :required="true" endpoint="/pet/type-list" :translate="true" />
            </div>


            <div class="m-3">
                <InputsBasic v-model="model.date_of_birth" name="date_of_birth" :placeholder="$t('DATE_OF_BIRTH')"
                    icon="material-symbols:edit-calendar-sharp" type="date" :label="$t('DATE_OF_BIRTH')" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="model.name" name="name" :placeholder="$t('NAME')" icon="ic:outline-short-text"
                    type="text" :label="$t('NAME')" />
            </div>

            <div class="m-3">
                <TextareasBasic v-model="model.description" name="description" :placeholder="$t('DESCRIPTION')"
                    icon="fluent:text-description-16-filled" :label="$t('DESCRIPTION')" />
            </div>
            <div v-if="isShow" class="my-2">
                <AlertsDanger :key="message" :message="message" />
            </div>
            <ButtonsSave :action="save" />
        </form>
    </div>
</template>
