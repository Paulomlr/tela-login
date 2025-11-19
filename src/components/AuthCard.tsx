interface Props {
  title: string;
  subtitle: string;
  children?: any;
}

export default function AuthCard({ title, subtitle, children }: Props) {
  return (
    <div className="w-full">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-sm text-gray-500 mb-6">{subtitle}</p>

      {children}
    </div>
  );
}
