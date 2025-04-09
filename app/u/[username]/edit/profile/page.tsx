import { auth } from "@/auth";
import EditProfilePage from "@/components/edit-profile-form";
import { CURRENT_USER_BY_SESSION_ID } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { redirect } from "next/navigation";

const EditProfile = async () => {
  const session = await auth();
  if (!session) return redirect("/");
  const id = session.id;
  const author = await client
    .withConfig({ useCdn: false })
    .fetch(CURRENT_USER_BY_SESSION_ID, { id });

  return <EditProfilePage id={session.id} previousData={author} />;
};

export default EditProfile;
