import db from "@repo/db/client";
import bcrypt from 'bcrypt';
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }: { user: any, account: any, profile: any }) {
            if (account.provider === 'github') {
                const existingUser = await db.user.findUnique({
                    where: { provider_id: profile.id }
                });

                if (!existingUser) {
                    await db.user.create({
                        data: {
                            email: profile.email,
                            name: profile.name,
                            role: 'DEVELOPER',
                            provider: 'GITHUB',
                            provider_id: profile.id,
                        }
                    });
                }
            }
            return true;
        }
    },
    secret: process.env.NEXTAUTH_SECRET || "secret"
};