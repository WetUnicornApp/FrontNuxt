<script lang="ts" setup>
import type { IDropdown } from "~/interfaces/dropdown";
const props = defineProps<IDropdown>();

</script>

<template>
    <ButtonGroup placement="dropend" class="dropdown-with-icon" :title="$t(props.title)">
        <Dropdown>
            <DropdownToggle class="m-0 p-0">
                <Icon :name="props.icon" class="icon --btn fs-3 my-1 --a-increase" />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem v-for="item in props.list_item" :key="item.title">
                    <nuxt-link v-if="typeof item.action == 'string'" :to="item.action">{{ $t(item.title) }}</nuxt-link>
                    <span v-else class="cr-pointer" @click="item.action">{{ $t(item.title) }}</span>
                </DropdownItem>

            </DropdownMenu>
        </Dropdown>
    </ButtonGroup>
</template>


<style scoped>
.dropdown-menu {
    background-color: var(--c-bg-4);
}

.dropdown-item span {
    color: var(--c-text);
}

.dropdown-with-icon>>>.dropdown-item:hover,
.dropdown-with-icon>>>.dropdown-item:focus {
    background-color: transparent !important;
}


.dropdown-item:hover span {
    color: var(--c-accent)
}

.dropdown-with-icon>>>.dropdown-toggle::after {
    display: none !important;
}
</style>