export const experimental_ppr = true;
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="section-conteiner">{children}</main>;
}
