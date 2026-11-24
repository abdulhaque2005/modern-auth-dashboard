// auth.ts
import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyCredentials } from "./lib/auth/verify-credentials";

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET ?? process.env.JWT_SECRET,
    providers: [
        CredentialsProvider({
            credentials: { email: {}, password: {} },
            async authorize(credentials) {
                const user = verifyCredentials({
                    email: credentials?.email ?? "",
                    password: credentials?.password ?? "",
                });

                return user;
            },
        }),
    ],
    session: { strategy: "jwt" },
    pages: {
        signIn: "/login",
    },
};

export const auth = () => getServerSession(authOptions);


