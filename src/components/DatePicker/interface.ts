export interface DatePickerProps {
  value: Date | null;
  onChange: (params: Date | null) => void;
  error?: string;
  label: string;
}
