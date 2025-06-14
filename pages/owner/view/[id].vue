<script setup lang="ts">
import { ModelsView } from '#components';


const route = useRoute();
const id = route.params.id.toString();

</script>

<template>
    <div>

        <ModelsView :id="id" type="owner" title="OWNER" />
    </div>
</template>