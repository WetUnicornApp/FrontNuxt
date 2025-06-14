<script setup lang="ts">
import Grid from "@/components/tables/basic.vue";
import type { ColDef } from "ag-grid-community";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const columnDefs: ColDef[] = [
    { field: "email", headerName: t("EMAIL") },
    { field: "first_name", headerName: t("FIRST_NAME") },
    { field: "last_name", headerName: t("LAST_NAME") },
];
</script>

<template>
    <div class="h-100 p-3 d-flex flex-column">
        <TablesHeader title="OWNERS" type="owner" />

        <Grid :column-defs="columnDefs" data-endpoint="/owner/list" class="bg-2 rounded" action-source="/owner/" />
    </div>
</template>
