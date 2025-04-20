import type { IMenuItem } from "./menu-item";

export interface IDropdown {
    title: string;
    icon: string;
    list_item: IMenuItem[];
}
