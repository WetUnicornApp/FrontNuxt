<script setup lang="ts">
import type { EmployeeModel } from '~/models/employee-models/employee';
import { getData } from '~/scripts/api/fetch';

definePageMeta({
    layout: "big-form",
});

const route = useRoute();
const id = route.params.id;

const isError = ref(false)

const res = await getData<string, EmployeeModel>({
    endpoint: `/employee/view/${id}`,
    method: 'GET',
});

isError.value = res.success

console.log(res.data)
const Employee = ref<EmployeeModel>(res.data);


</script>

<template>
    <EmployeeForm :model="Employee" :action="'/employee/edit/' + res.data.id" title="EDIT_EMPLOYEE" />
</template>
