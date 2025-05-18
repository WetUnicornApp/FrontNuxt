<script setup lang="ts">
import Grid from "@/components/tables/basic.vue";
import type { ColDef } from "ag-grid-community";

const columnDefs: ColDef[] = [
  { field: "employee", headerName: "employee" },
  { field: "owner", headerName: "owner" },
  { field: "pet", headerName: "pet" },
  { field: "name", headerName: "name" },
  { field: "description", headerName: "description" },
  { field: "date", headerName: "date" },
  { field: "time", headerName: "time" },
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

    <Grid :column-defs="columnDefs" data-endpoint="/visit/list" class="bg-2 rounded" />
  </div>
</template>
