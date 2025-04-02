import Navbar from "@/components/navbar";
export const experimental_ppr = true;
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Navbar />
      <div className="section-container">{children}</div>
    </main>
  );
}
