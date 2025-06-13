<script lang="ts" setup>

const { user } = useAuth();
</script>

<template>
  <div class="h-100 py-5 px-3 d-flex flex-column justify-content-between">
    <div>
      <p class="fs-2">{{ user?.first_name }} {{ user?.last_name }}</p>
    </div>
    <div>
      <div class="my-3">
        <p class="fs-6 text-secondary">{{ $t("SETTING") }}</p>
      </div>
      <div class="row">
        <div class="col-md-6">
          <ButtonsWide :title="$t('CHANGE_PASSWORD')" action="/user/change-password" type="accent" />
        </div>
      </div>
    </div>
  </div>
</template>
