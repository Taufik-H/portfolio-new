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
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(AUTHOR_BY_AUTH_ID_QUERY, {
          id: profile?.id || profile?.sub,
        });

      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          _id: profile?.id || profile?.sub, // Gunakan _id
          name,
          username: profile?.login || profile?.email?.split("@")[0],
          email,
          image,
          profile_title: "This is The Bio You Should Set",
          role: ["frontend engineer", "uiux designer"], // Bisa langsung array biasa
          skills: ["This skills will appear here"], // Array biasa juga
          bio:
            profile?.bio ||
            "If you are logged in using GitHub, this bio will be displayed. If you are using Google, you will have to set it manually.",
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_AUTH_ID_QUERY, {
            id: profile?.id || profile?.sub,
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
