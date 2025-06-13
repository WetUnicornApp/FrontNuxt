<script setup lang="ts">
import { UserChangePassword } from '../../.nuxt/content/components';
import { Empty } from '../../models/user-models/password-model';

const model = reactive({ ...Empty });
</script>

<template>
    <UserChangePassword :model="model" title="CHANGE_PASSWORD" action="/user/change-password" />
</template>


<style scoped></style>