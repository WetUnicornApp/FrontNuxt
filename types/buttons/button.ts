export interface ButtonType {
  title: string;
  id?: string;
  action: (params?: Object) => void;
  type: "accent";
  form?: boolean;
}
