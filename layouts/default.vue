<script setup lang="ts">
// import { useI18n } from "vue-i18n";
import "@/assets/styles/main.css";

const topList = [
  { index: 0, path: "/", icon: "material-symbols:home-rounded", name: "HOME" },
];

const midList = [
  {
    index: 0,
    path: "/visit/list",
    icon: "material-symbols:format-list-bulleted",
    name: "VISITS",
  },
  { index: 1, path: "/pet/list", icon: "material-symbols:pets", name: "PETS" },
];

const bottomList = [
  {
    index: 0,
    path: "/user/account",
    icon: "material-symbols:person",
    name: "ACCOUNT",
  },
  // {
  //   index: 1,
  //   path: "/user/setting",
  //   icon: "material-symbols:settings-heart",
  //   name: "SETTING",
  // },
];

const listItem = [{
  title: "LOGOUT",
  action: () => {
    const { logout } = useAuth();
    logout()
  }
}
];

</script>

<template>
  <div id="layout-default-main" class="d-flex">
    <div class="h-100 bg-2 p-2 d-flex flex-column justify-content-between">
      <div class="">
        <div v-for="item in topList" :key="item.index">
          <nuxt-link :to="item.path" active-class="active-link">
            <Icon :name="item.icon" class="icon --btn fs-3 my-1 --a-increase" :title="$t(item.name)" />
          </nuxt-link>
        </div>
      </div>
      <div class="flex-fill d-flex flex-column justify-content-center">
        <div v-for="item in midList" :key="item.index" class="">
          <nuxt-link :to="item.path" active-class="active-link">
            <Icon :name="item.icon" class="icon --btn fs-3 my-1 --a-increase" :title="$t(item.name)" />
          </nuxt-link>
        </div>
      </div>
      <div class="">
        <div v-for="item in bottomList" :key="item.index">
          <nuxt-link :to="item.path" active-class="active-link">
            <Icon :name="item.icon" class="icon --btn fs-3 my-1 --a-increase" :title="$t(item.name)" />
          </nuxt-link>
        </div>
        <DropdownsWithIcon title="SETTING" :list_item="listItem" icon="material-symbols:settings-heart" />
      </div>
    </div>
    <div class="flex-fill h-100">
      <slot />
    </div>
  </div>
</template>

<style scoped>
#layout-default-main {
  height: 100vh;
  width: 100vw;
  /* overflow-y: hidden; */
}

.router-link-exact-active>span {
  color: var(--c-accent);
  border-radius: 8px;
  font-weight: bold;
}
</style>
