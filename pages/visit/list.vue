<script setup lang="ts">
import { TabelsBasic } from "#components";

const users = ref([
  {
    id: 1,
    name: "Lindsay Walton",
    position: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    name: "Courtney Henry",
    position: "Designer",
    email: "courtney.henry@example.com",
    role: "Admin",
  },
  // More user data...
]);
</script>

<template>
  <TabelsBasic :data="users" />
</template>
