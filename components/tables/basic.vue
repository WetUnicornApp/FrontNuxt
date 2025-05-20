<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { AgGridVue } from 'ag-grid-vue3';
import { ModuleRegistry, ClientSideRowModelModule } from 'ag-grid-community';
import type { ColDef } from 'ag-grid-community';
import type { ApiResponse } from '~/types/responses/api-response';
import { useI18n } from 'vue-i18n';
import ActionRud from './cells/action-rud.vue';

ModuleRegistry.registerModules([ClientSideRowModelModule]);
defineExpose({});

const props = defineProps<{
  columnDefs: ColDef[];
  dataEndpoint: string;
  actionSource?: string | null;
}>();

const rowData = ref<unknown[]>([]);
const defaultColDef = {
  flex: 1,
};

const { t } = useI18n();

const components = {
  ActionRud
};

const columns = () => {
  const defaultColumns = [...props.columnDefs];
  if (typeof props.actionSource === 'string') {
    defaultColumns.push({
      headerName: t('OPERATIONS'),
      field: 'actions',
      cellRenderer: 'ActionRud',
      cellRendererParams: {
        actionSource: props.actionSource
      }
    });
  }
  return defaultColumns;
};

const config = useRuntimeConfig();

onMounted(async () => {
  try {
    const res = await $fetch<ApiResponse<unknown>>(config.public.apiBase + props.dataEndpoint, {
      method: 'GET',
    });
    rowData.value = res.success ? (res.data as unknown[]) : [];
  } catch (error) {
    console.error(error);
    rowData.value = [];
  }
});
</script>

<template>
  <ag-grid-vue class="unicorn-custom-ag-theme ag-theme-alpine" :column-defs="columns()" :row-data="rowData"
    :default-col-def="defaultColDef" :components="components" style="width: 100%; height: 90vh" />
</template>

<style>
.ag-root-wrapper,
.unicorn-custom-ag-theme .ag-header,
.unicorn-custom-ag-theme .ag-row {
  background-color: unset;
  color: unset;
  border-radius: unset;
}

.unicorn-custom-ag-theme .ag-header {
  font-weight: bold;
  border-bottom: 0.1px solid var(--c-text);
}

.unicorn-custom-ag-theme {
  height: 90vh;
}

.ag-row {
  border-bottom: 0.1px solid var(--c-bg-2);
}
</style>
