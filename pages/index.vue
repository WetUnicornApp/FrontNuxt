<script lang="ts" setup>
const { user } = useAuth();

</script>


<template>
    <div>
        <div class="d-flex m-2 bg-2 rounded p-3">
            <span class="fs-4 fw-bold">
                {{ $t('HELLO') }} {{ user?.first_name }} {{ user?.last_name }}
            </span>
        </div>
        <div class="d-flex">
            <div class="flex-fill m-1"></div>
            <div class="flex-fill m-1"></div>
        </div>
    </div>
</template>