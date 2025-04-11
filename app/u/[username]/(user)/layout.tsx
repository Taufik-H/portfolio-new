import PublicProfile from "@/components/public-profile";
import { CURRENT_USER_BY_USERNAME } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
export const experimental_ppr = true;
export default async function Layout({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ username: string }>;
}>) {
  const username = (await params).username;
  const user = await client
    .withConfig({ useCdn: false })
    .fetch(CURRENT_USER_BY_USERNAME, {
      username,
    });

  return (
    <main>
      <PublicProfile userData={user} key={user._id}>
        {children}
      </PublicProfile>
    </main>
  );
}
