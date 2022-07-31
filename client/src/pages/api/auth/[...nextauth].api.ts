import NextAuth, { type NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import { prisma } from '../../../server/db/client';

export const authOptions: NextAuthOptions = {
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        // @ts-ignore
        session.user.id = user.id;
      }
      return session;
    },
  },

  adapter: PrismaAdapter(prisma),

  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
};

export default NextAuth(authOptions);
