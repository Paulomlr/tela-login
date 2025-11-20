import type { FieldError } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export default function Input({ label, error, ...rest }: Props) {
  return (
    <div className="w-full">
      <label className="text-[12px] font-medium text-[var(--color-gray-300)]">{label}</label>
      <input
        {...rest}
        className="w-full text-lg py-2 border-b border-[var(--color-gray-500)] outline-none focus:ring-[var(--color-brand-base)] focus:border-[var(--color-brand-base)]"
      />
      {error && (
        <p className="text-[var(--color-feedback-danger)] text-xs mt-1">{error.message}</p>
      )}
    </div>
  );
}
