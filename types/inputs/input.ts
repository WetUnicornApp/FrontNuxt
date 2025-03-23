import type { InputTypeHTMLAttribute } from "vue";

export interface InputType {
  type: InputTypeHTMLAttribute;
  name: string;
  placeholder?: string;
  value?: string;
  icon?: string;
  label?: string;
}
