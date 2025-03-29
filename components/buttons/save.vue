<script lang="ts" setup>
const send = () => {
  console.log("zalogowano się");

  // const res = await $fetch('/api/submit', {
  //   method: 'POST',
  //   body: {
  //     // My form data
  //   }
  // })
};
</script>

<template>
  <ButtonsBasic
    title="SEND"
    :action="send"
    type="accent"
    class="d-flex justify-content-end mt-4"
  />
</template>
