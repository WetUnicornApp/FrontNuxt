<script setup lang="ts">
import Grid from "@/components/tables/basic.vue";
import type { ColDef } from "ag-grid-community";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const columnDefs: ColDef[] = [
  { field: "owner", headerName: t("OWNER") },
  { field: "name", headerName: t("PET_NAME") },
  { field: "date_of_birth", headerName: t("DATE_OF_BIRTH") },
  { field: "type", headerName: t("PET_TYPE"), cellRenderer: (params) => { return t(params.data.type) } },
  { field: "gender", headerName: t("GENDER"), cellRenderer: (params) => { return t(params.data.gender) } },
];
</script>

<template>
  <div class="h-100 p-3 d-flex flex-column">
    <TablesHeader title="PETS" type="pet" />
    <Grid :column-defs="columnDefs" data-endpoint="/pet/list" class="bg-2 rounded" action-source="/pet/" />
  </div>
</template>
