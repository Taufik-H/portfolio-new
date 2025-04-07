import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import { AUTHOR_BY_AUTH_ID_QUERY } from "./lib/queries";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user: { name, email, image }, profile }) {
      console.log(profile);
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_AUTH_ID_QUERY, {
          id: String(profile?.id) || profile?.sub,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id: String(profile?.id) || profile?.sub,
          name,
          username: profile?.login || profile?.email?.split("@")[0],
          email,
          image,
          profile_title: "",
          role: [], // Bisa langsung array biasa
          skills: ["This skills will appear here"], // Array biasa juga
          bio: profile?.bio || "",
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_AUTH_ID_QUERY, {
            id: String(profile?.id) || profile?.sub,
          });

        token.id = user?._id;
        token.username = profile?.login || profile?.email?.split("@")[0];
      }

      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id, username: token.username });
      return session;
    },
  },
});
