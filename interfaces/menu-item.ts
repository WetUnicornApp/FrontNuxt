export interface IMenuItem {
    title: string;
    action: string | (() => void);

}