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
    session: {
        strategy: 'jwt',
        encryption: false
    },

    callbacks: {

        async jwt({ token, account, profile }: { token: any; account: Account; profile: Profile }) {
            try {
                if (account?.provider && profile) {
                    // For new sign-ins, check if user exists in database
                    const user = await db.user.findFirst({
                        where: {
                            OR: [
                                {
                                    provider: account.provider.toUpperCase(),
                                    provider_id: profile.sub
                                },
                                {
                                    email: profile.email
                                }
                            ]
                        },
                        select: {
                            id: true,
                            role: true,
                            provider: true,
                            provider_id: true,
                            email: true
                        }
                    });

                    if (user) {
                        // Return token with database user information
                        return {
                            ...token,
                            dbUserId: user.id.toString(),
                            role: user.role,
                            provider: user.provider,
                            provider_id: user.provider_id
                        };
                    }
                }
                
                return token;
            } catch (error) {
                console.error("JWT callback error:", error);
                return token;
            }
        },

        async session({ session, token }: { session: any; token: any }) {
            try {
                return {
                    ...session,
                    user: {
                        ...session.user,
                        id: token.dbUserId, // Use the database ID
                        role: token.role,
                        provider: token.provider
                    }
                };
            } catch (error) {
                console.error("Session callback error:", error);
                return session;
            }
        },
        async signIn({ account, profile }:
            {
                user?: User | null, account: Account | null, profile?: Profile | null

            }) {
            try {
                if (!account || !profile) return false;
                if (account.provider === 'github') {
                    const githubProfile = profile as { id?: number; email?: string; name?: string };

                    if (!githubProfile.id) return false;
                    const existingUser = await db.user.findUnique({
                        where: { provider_provider_id: { provider: 'GITHUB', provider_id: githubProfile.id.toString() } }
                    });

                    if (!existingUser) {
                        await db.user.create({
                            data: {
                                email: githubProfile.email as string,
                                name: githubProfile.name,
                                role: 'DEVELOPER',
                                provider: 'GITHUB',
                                provider_id: githubProfile.id.toString(),
                            }
                        });
                    }
                } else if (account.provider === 'google') {
                    const googleProfile = profile as { email?: string; name?: string };

                    if (!googleProfile.email) return false;

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
                                provider_id: googleProfile.email,
                            }
                        });
                    }
                }
                return true;

            } catch (error) {
                console.error("Authentication error:", error);
                return false;
            }
        },
    },
    secret: process.env.NEXTAUTH_SECRET || "ns4yyeTQHzH5lB7wlBdoKP7wnqdxyuoz"
};