import db from "@repo/db/client";
import { Account, Profile, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async signIn({ account, profile }:
            {
                user?: User | null, account: Account | null, profile?: Profile | null

            }) {
                try {
                    if(!account || !profile) return false;
                    if (account.provider === 'github') {
                        const githubProfile = profile as {id?: number; email?: string; name?: string};

                        if(!githubProfile.id) return false;
                        const existingUser = await db.user.findUnique({
                            where: { provider_id: githubProfile.id }
                        });
        
                        if (!existingUser) {
                            await db.user.create({
                                data: {
                                    email: githubProfile.email as string,
                                    name: githubProfile.name,
                                    role: 'DEVELOPER',
                                    provider: 'GITHUB',
                                    provider_id: githubProfile.id,
                                }
                            });
                        }
                    } else if (account.provider === 'google') {
                        const googleProfile = profile as {email?: string; name?: string};

                        if(!googleProfile.email) return false;

                        const existingUser = await db.user.findUnique({
                            where: { email: googleProfile.email }
                        });
                        // console.log("Google Profile Data:", JSON.stringify(profile, null, 2));
        
        
                        if (!existingUser) {
                            await db.user.create({
                                data: {
                                    email: googleProfile.email,
                                    name: googleProfile.name,
                                    role: 'USER',
                                    provider: 'GOOGLE',
                                }
                            });
                        }
                    }
                    return true;
                    
                } catch (error) {
                    console.error("Authentication error:", error);
                    return false;
                }
        }
    },
    secret: process.env.NEXTAUTH_SECRET || "secret"
};