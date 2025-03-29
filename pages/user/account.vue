<script lang="ts" setup>
const method = (params: Object) => {
  console.log(params);
};
</script>

<template>
  <div class="h-100 py-5 px-3 d-flex flex-column justify-content-between">
    <div>
      <p class="fs-2">Adam Kowalski</p>
      <p class="fs-3">pracownik</p>
    </div>
    <div>
      <div class="my-3">
        <p class="fs-6 text-secondary">{{ $t("SETTING") }}</p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <ButtonsWide
            :title="$t('CHANGE_PASSWORD')"
            :action="() => method({ type: 'password' })"
            type="accent"
          ></ButtonsWide>
        </div>
      </div>
    </div>
  </div>
</template>
