export interface ButtonType {
  title: string;
  id?: string;
  action: (params?: object) => object | null;
  type: "accent";
  form?: boolean;
}
