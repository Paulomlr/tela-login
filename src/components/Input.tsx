import type { FieldError } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

export default function Input({ label, error, ...rest }: Props) {
  return (
    <div className="w-full">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        {...rest}
        className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error.message}</p>
      )}
    </div>
  );
}
