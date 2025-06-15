<script setup lang="ts">
import Grid from "@/components/tables/basic.vue";
import type { ColDef } from "ag-grid-community";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const columnDefs: ColDef[] = [
    { field: "name", headerName: t("NAME") },
    { field: "address", headerName: t("ADDRESS") },
];
</script>

<template>
    <div class="h-100 p-3 d-flex flex-column">
        <TablesHeader title="ORGANIZATIONS" type="organization" />

        <Grid :column-defs="columnDefs" data-endpoint="/organization/list" class="bg-2 rounded"
            action-source="/organization/" />
    </div>
</template>
