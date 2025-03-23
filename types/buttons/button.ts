export interface ButtonType {
  title: string;
  id?: string;
  action: () => void;
  type: "accent";
}
