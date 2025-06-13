<script setup lang="ts">
import { reactive } from 'vue';
import { ButtonsSave } from '#components';
import '@/components/buttons/send';
import type { PasswordModel } from '../../models/user-models/password-model';

const props = defineProps<{
    model: PasswordModel;
    action: string;
    title: string
}>();

const localModel = reactive({ ...props.model });
const save = () => {
    console.log('z form')
    return null;
};


</script>


<template>
    <div>
        <form id="page-user-change-password-form">
            <div class="my-2">
                <h2 class="text-center">{{ $t(props.title) }}</h2>
            </div>

            <div class="m-3">
                <InputsBasic v-model="localModel.old_password" name="old_password" :placeholder="$t('OLD_PASSWORD')"
                    icon="mynaui:lock-password-solid" type="password" :label="$t('OLD_PASSWORD')" />
            </div>


            <div class="m-3">
                <InputsBasic v-model="localModel.new_password" name="new_password" :placeholder="$t('NEW_PASSWORD')"
                    icon="mynaui:lock-password-solid" type="password" :label="$t('NEW_PASSWORD')" />
            </div>


            <div class="m-3">
                <InputsBasic v-model="localModel.repeat_new_password" name="repeat_new_password"
                    :placeholder="$t('REPEAT_OLD_PASSWORD')" icon="mynaui:lock-password-solid" type="password"
                    :label="$t('REPEAT_OLD_PASSWORD')" />
            </div>

            <ButtonsSave :action="save" />
        </form>
    </div>
</template>
