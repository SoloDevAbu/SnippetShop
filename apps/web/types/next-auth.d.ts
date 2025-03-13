import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            role: "DEVELOPER" | "USER"
            provider: string
        } & DefaultSession["user"]
    }

    interface JWT {
        id: string
        role: "DEVELOPER" | "USER"
        provider: string
    }
}