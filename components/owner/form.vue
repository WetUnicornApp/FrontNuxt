<script setup lang="ts">
import { reactive } from 'vue';
import { ButtonsSave } from '#components';
import '@/components/buttons/send';
import { Validate, type OwnerModel } from '~/models/owner-models/owner';
import { getData } from '~/scripts/api/fetch';

const props = defineProps<{
    model: OwnerModel;
    action: string;
    title: string;
}>();

const isShow = ref(false);
const message = ref('');

const localModel = reactive({ ...props.model });
const saveVisit = async () => {
    const form = document.getElementById('component-owner-form-form') as HTMLFormElement;
    if (!form.reportValidity()) {
        return;
    }

    const res = await getData<OwnerModel, OwnerModel>({
        endpoint: props.action,
        method: localModel.id == 0 ? 'POST' : 'PUT',
        body: localModel,
        validate: Validate
    });
    if (res.success) {
        navigateTo('/owner/list')
    } else {
        isShow.value = true;
        message.value = res.message
    }
    return null;
};


</script>


<template>
    <div>
        <form id="component-owner-form-form">
            <div class="my-2">
                <h2 class="text-center">{{ $t(props.title) }}</h2>
            </div>

            <div class="m-3">
                <InputsBasic v-model="localModel.email" name="email" :placeholder="$t('EMAIL')"
                    icon="material-symbols:alternate-email-rounded" type="email" :label="$t('EMAIL')" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="localModel.first_name" name="first_name" :placeholder="$t('FIRST_NAME')"
                    icon="material-symbols:account-circle" type="text" :label="$t('FIRST_NAME')" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="localModel.last_name" name="last_name" :placeholder="$t('LAST_NAME')"
                    icon="material-symbols:account-circle" type="text" :label="$t('LAST_NAME')" />
            </div>
            <div v-if="isShow" class="my-2">
                <AlertsDanger :key="message" :message="message" />
            </div>
            <ButtonsSave :action="saveVisit" />
        </form>
    </div>
</template>
