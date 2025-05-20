<script lang="ts" setup>
import '~/components/buttons/basic.vue'
const props = defineProps<{ action: (params?: object) => object | null }>();


</script>


<template>
  <ButtonsBasic title="SAVE" :action="props.action" type="gradient" class="d-flex justify-content-end mt-4" />
</template>
