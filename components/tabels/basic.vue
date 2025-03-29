<script setup lang="ts">
import type { TableColumn, DropdownMenuItem } from "@nuxt/ui";
import { ref, computed } from "vue";

const toast = useToast();

interface TableItem {
  id: number; // Default identifier field
  [key: string]: any;
}

const props = defineProps<{
  data: TableItem[];
}>();

const excludeColumns = ["id"]; // Columns to exclude from the table

const columns = computed<TableColumn<TableItem>[]>(() => {
  const sampleItem = props.data[0] ?? {};
  return Object.keys(sampleItem)
    .filter((key) => !excludeColumns.includes(key))
    .map((key) => ({
      accessorKey: key,
      header: key.charAt(0).toUpperCase() + key.slice(1), // Capitalized header
    }));
});

function getDropdownActions(item: TableItem): DropdownMenuItem[][] {
  return [
    [
      {
        label: "Copy ID",
        icon: "i-lucide-copy",
        onSelect: () => {
          navigator.clipboard.writeText(item.id.toString());
          toast.add({
            title: "ID copied to clipboard!",
            color: "success",
            icon: "i-lucide-circle-check",
          });
        },
      },
    ],
    [
      {
        label: "Edit",
        icon: "i-lucide-edit",
      },
      {
        label: "Delete",
        icon: "i-lucide-trash",
        color: "error",
      },
    ],
  ];
}
</script>

<template>
  <UTable :data="props.data" :columns="columns" class="flex-1">
    <template #name-cell="{ row }">
      <div class="flex items-center gap-3">
        <div>
          <p class="font-medium text-(--ui-text-highlighted)">
            {{ row.original.name }}
          </p>
          <p>
            {{ row.original.position }}
          </p>
        </div>
      </div>
    </template>

    <template #action-cell="{ row }">
      <UDropdownMenu :items="getDropdownActions(row.original)">
        <UButton
          icon="i-lucide-ellipsis-vertical"
          color="neutral"
          variant="ghost"
          aria-label="Actions"
        />
      </UDropdownMenu>
    </template>
  </UTable>
</template>
