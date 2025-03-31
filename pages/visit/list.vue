<script setup lang="ts">
import Grid from "@/components/tables/basic.vue";
import type { ColDef } from "ag-grid-community";

const columnDefs: ColDef[] = [
  { field: "name", headerName: "Name" },
  { field: "email", headerName: "Email" },
  { field: "phone", headerName: "Phone" },
  { field: "website", headerName: "Website" },
];
</script>

<template>
  <div class="h-100 d-flex">
    <div class="p-2 border-light-end">
      <nuxt-link to="/visit/create" active-class="active-link">
        <Icon
          name="material-symbols:add-circle-outline"
          class="icon --btn fs-2 --a-increase"
        />
      </nuxt-link>
    </div>
    <Grid
      :columnDefs="columnDefs"
      dataEndpoint="https://jsonplaceholder.typicode.com/users"
      class="flex-fill"
    />
  </div>
</template>
