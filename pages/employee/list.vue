<script setup lang="ts">
import Grid from "@/components/tables/basic.vue";
import type { ColDef } from "ag-grid-community";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const columnDefs: ColDef[] = [
    { field: "first_name", headerName: t("FIRST_NAME") },
    { field: "last_name", headerName: t("LAST_NAME") },
    { field: "organization_name", headerName: t("ORGANIZATION_NAME") },
    { field: "email", headerName: t("EMAIL") },
];
</script>

<template>
    <div class="h-100 p-3 d-flex flex-column">
        <TablesHeader title="EMPLOYEES" type="employee" />

        <Grid :column-defs="columnDefs" data-endpoint="/employee/list" class="bg-2 rounded"
            action-source="/employee/" />
    </div>
</template>
