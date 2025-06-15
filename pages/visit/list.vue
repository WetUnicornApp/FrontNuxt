<script setup lang="ts">
import Grid from "@/components/tables/basic.vue";
import type { ColDef } from "ag-grid-community";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const columnDefs: ColDef[] = [
  { field: "employee_name", headerName: t("EMPLOYEE") },
  { field: "owner_name", headerName: t("OWNER") },
  { field: "pat_name", headerName: t("PET") },
  { field: "visit_name", headerName: t("NAME") },
  { field: "visit_description", headerName: t("DESCRIPTION") },
  { field: "date", headerName: t("DATE") },
  { field: "time", headerName: t("HOUR") },
];
</script>

<template>
  <div class="h-100 p-3 d-flex flex-column">
    <TablesHeader title="VISITS" type="visit" />
    <Grid :column-defs="columnDefs" data-endpoint="/visit/list" class="bg-2 rounded" action-source="/visit/" />
  </div>
</template>
