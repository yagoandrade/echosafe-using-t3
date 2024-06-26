import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";
import { type User } from "@prisma/client";
import { env } from "@/env";
import { db } from "@/server/db";
import { validatePassword } from "@/lib/utils";

import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      isOnboarded: boolean;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/register",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) token.isOnboarded = (user as User).isOnboarded;
      if (typeof session === "undefined") return token;

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const isOnboardedVariable = session?.isOnboarded as boolean;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const isAvatarVariable = session?.image as string;

      if (trigger === "update" && isAvatarVariable) {
        token.picture = isAvatarVariable;
      }

      if (trigger === "update" && isOnboardedVariable) {
        token.isOnboarded = isOnboardedVariable;
      }

      return token;
    },
    session: async ({ session, token, user }) => {
      if (user) session.user.id = user.id;
      if (token) {
        session.user.isOnboarded = token.isOnboarded as boolean;
      }

      return session;
    },
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  /* debug: process.env.NODE_ENV === "development", */
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      /**
       * This function is used to authenticate a user.
       *
       * @param {Object} credentials - The credentials object should contain the user's email and password.
       *
       * @throws {Error} If no credentials are provided, an error is thrown.
       * @throws {Error} If the provided email does not match any user in the database, an error is thrown.
       *
       * @returns {Promise<User | null>} The function returns a Promise that resolves to the authenticated user, or null if no user is found.
       *
       * @see https://next-auth.js.org/providers/credentials#authorize
       */

      async authorize(providedCredentials) {
        if (!providedCredentials) throw new Error("No credentials provided");

        // Find a user in the database with the provided email
        const registeredUserInDB = await db.user.findUnique({
          where: {
            email: providedCredentials.email,
          },
        });

        if (!registeredUserInDB) throw new Error("User not found");
        if (!registeredUserInDB.password)
          throw new Error("User password not set");

        // Validate the provided password against the user's password in the database
        const isPasswordValid = await validatePassword(
          providedCredentials.password,
          registeredUserInDB.password,
        );

        if (!isPasswordValid) throw new Error("Incorrect password");

        return registeredUserInDB;
      },
    }),

    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),

    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),

    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
