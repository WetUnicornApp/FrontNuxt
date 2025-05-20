<script setup lang="ts">
import Grid from "@/components/tables/basic.vue";
import type { ColDef } from "ag-grid-community";
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const columnDefs: ColDef[] = [
  { field: "employee", headerName: t("EMPLOYEE") },
  { field: "owner", headerName: t("OWNER") },
  { field: "pet", headerName: t("PET") },
  { field: "name", headerName: t("NAME") },
  { field: "description", headerName: t("DESCRIPTION") },
  { field: "date", headerName: t("DATE") },
  { field: "time", headerName: t("HOUR") },
];
</script>

<template>
  <div class="h-100 p-3 d-flex flex-column">
    <div class="d-flex justify-content-between m-2">
      <h3 class="fw-bold">
        {{ $t('VISITS') }}
      </h3>
      <nuxt-link to="/visit/create" active-class="active-link">
        <Icon name="material-symbols:add-circle-outline" class="icon --btn fs-2 --a-increase" />
      </nuxt-link>
    </div>

    <Grid :column-defs="columnDefs" data-endpoint="/visit/list" class="bg-2 rounded" action-source="/visit/" />
  </div>
</template>
