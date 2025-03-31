<template>
  <ag-grid-vue
    class="unicorn-custom-ag-theme"
    :columnDefs="columnDefs"
    :rowData="rowData"
    :defaultColDef="defaultColDef"
  >
  </ag-grid-vue>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import {
  AllCommunityModule,
  ModuleRegistry,
  type ColDef,
} from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

export default defineComponent({
  name: "UnicornGrid",
  components: { AgGridVue },
  props: {
    columnDefs: {
      type: Array as () => ColDef[],
      required: true,
    },
    dataEndpoint: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const rowData = ref([]);
    const defaultColDef = {
      flex: 1,
    };

    const fetchData = async () => {
      try {
        const response = await fetch(props.dataEndpoint);
        if (!response.ok) throw new Error("Cannot fetch data from API");
        rowData.value = await response.json();
      } catch (error) {
        console.error("Error:", error);
        rowData.value = [];
      }
    };

    onMounted(fetchData);

    watch(() => props.dataEndpoint, fetchData);

    return {
      rowData,
      defaultColDef,
    };
  },
});
</script>

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

/* .unicorn-custom-ag-theme .ag-row {} */
/* .unicorn-custom-ag-theme .ag-row:nth-child(even) {} */
/* .unicorn-custom-ag-theme {} */
</style>
