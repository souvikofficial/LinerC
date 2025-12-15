import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Resend from "next-auth/providers/resend"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@x402/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
    // @ts-ignore
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),
        Resend({
            from: process.env.EMAIL_FROM,
        }),
    ],
    pages: {
        signIn: "/login",
        error: "/error",
    },
    callbacks: {
        session({ session, user }) {
            if (session.user) {
                // @ts-ignore // types not fully sync'd yet
                session.user.id = user.id;
            }
            return session;
        },
    },
})
