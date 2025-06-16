<script lang="ts" setup>

const { user } = useAuth();
</script>

<template>
  <div class="h-100 py-5 px-3 d-flex flex-column justify-content-between">
    <div>
      <p class="fs-2">{{ user?.first_name }} {{ user?.last_name }}</p>
    </div>

  </div>
</template>
