<script setup lang="ts">

import '@/components/buttons/send';
import { Empty, type PetModel } from '~/models/pet-models/pet';


const process = async () => {
    const form = document.getElementById('component-pet-create-form') as HTMLFormElement;
    form.reportValidity()

    return null;
};

const Pet = ref<PetModel>(Empty);


</script>

<template>
    <div class="">
        <form id="component-pet-create-form" class="">
            <div class="my-4">
                <h2 class="text-center">{{ $t("PET_CREATE") }}</h2>
            </div>
            <div class="m-md-3">
                <InputsBasic v-model="Pet.name" type="text" name="name" icon="material-symbols:pets" label="NAME"
                    :required="true" />
                <InputsBasic v-model="Pet.date_of_birth" type="date" name="date_of_birth"
                    icon="material-symbols:calendar-today" label="NAME" :required="true" />

            </div>
            <ButtonsSend :action="process" />
        </form>
    </div>
</template>
