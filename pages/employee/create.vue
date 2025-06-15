<script setup lang="ts">
import { type EmployeeModel, Empty } from '../../models/employee-models/employee';

definePageMeta({
  layout: "big-form",
});

const Employee = ref<EmployeeModel>(Empty);


</script>

<template>

  <EmployeeForm :model="Employee" action="/employee/create" title="CREATE_EMPLOYEE" />
</template>
