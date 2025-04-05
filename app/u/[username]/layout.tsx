import Navbar from "@/components/navbar";
import { CURRENT_USER_BY_USERNAME } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
export default async function Layout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ username: string }>;
}>) {
  const username = (await params).username;
  const user = await client.fetch(CURRENT_USER_BY_USERNAME, {
    username,
  });
  if (!user) return notFound();

  return (
    <main>
      <Navbar user={user} />
      <div className="section-container mx-auto pb-10 py-20">{children}</div>
    </main>
  );
}
