<script setup lang="ts">
import { reactive } from 'vue';
import { ButtonsSave } from '#components';
import '@/components/buttons/send';
import { getData } from '~/scripts/api/fetch';
import { type OrganizationModel, Validate } from '~/models/organization-models/organization';

const props = defineProps<{
    model: OrganizationModel;
    action: string;
    title: string;
}>();

const isShow = ref(false);
const message = ref('');

const model = reactive({ ...props.model });
const ave = async () => {
    const form = document.getElementById('component-organization-fom-form') as HTMLFormElement;
    if (!form.reportValidity()) {
        return;
    }

    const res = await getData<OrganizationModel, OrganizationModel>({
        endpoint: props.action,
        method: model.id == 0 ? 'POST' : 'PUT',
        body: model,
        validate: Validate
    });
    if (res.success) {
        navigateTo('/organization/list')
    } else {
        isShow.value = true;
        message.value = res.message
    }
    return null;
};


</script>


<template>
    <div>
        <form id="component-organization-fom-form">
            <div class="my-2">
                <h2 class="text-center">{{ $t(props.title) }}</h2>
            </div>

            <div class="m-3">
                <InputsBasic v-model="model.name" name="name" :placeholder="$t('NAME')" icon="pajamas:text-description"
                    type="text" :label="$t('NAME')" />
            </div>

            <div class="m-3">
                <InputsBasic v-model="model.address" name="address" :placeholder="$t('ADDRESS')"
                    icon="material-symbols:location-on" type="text" :label="$t('ADDRESS')" />
            </div>

            <div v-if="isShow" class="my-2">
                <AlertsDanger :key="message" :message="message" />
            </div>
            <ButtonsSave :action="ave" />
        </form>
    </div>
</template>
