interface Props {
  title: string;
  subtitle: string;
  titleClass?: string;
  children?: any;
}

export default function AuthCard({ title, subtitle, titleClass = "text-2xl font-semibold", children }: Props) {
  return (
    <div className="w-full mb-4 bg-white p-8 rounded-xl border"
      style={{ borderColor: "var(--color-gray-500)" }}>
      <h1 className={titleClass}>{title}</h1>
      <p className="text-base mb-8 text-[var(--color-gray-400)]" >{subtitle}</p>

      {children}
    </div>
  );
}
