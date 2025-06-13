export interface ButtonType {
  title: string;
  id?: string;
  action: (params?: object) => object | string | null;
  type: "accent" | "gradient";
  form?: boolean;
}
