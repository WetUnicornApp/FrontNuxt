export type SelectType = {
    name: string;
    placeholder?: string;
    icon?: string;
    label?: string;
    required?: boolean;
    modelValue: string;
    options?: Record<string, string>[];
    endpoint?: string;
    translate?: boolean
}
