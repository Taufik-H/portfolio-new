import { auth } from "@/auth";
import AboutForm from "@/components/about-form";
import { CURRENT_USER_BY_SESSION_ID } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { notFound, redirect } from "next/navigation";

const AboutCreate = async ({ params }: { params: Promise<{ id: string }> }) => {
  const session = await auth();
  const id = (await params).id;
  // jika user tidak login maka redirect portolity
  if (!session) return redirect("/");
  // jika user tidak sama dengan session id maka notfound
  if (session?.id !== id) return notFound();
  // jika saya login tapi ingin akses page orang maka lempar
  const user = await client
    .withConfig({ useCdn: false })
    .fetch(CURRENT_USER_BY_SESSION_ID, {
      id,
    });
  if (user._id !== id) return notFound();

  return (
    <div>
      <AboutForm />
    </div>
  );
};

export default AboutCreate;
