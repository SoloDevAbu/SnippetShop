import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";

export async function checkDeveloperAccess() {
    const session = await getServerSession(authOptions)

    if(!session) {
        redirect('api/auth/signin')
    }

    if(session.user.role !== "DEVELOPER") {
        redirect('/user')
    }

    return session
}