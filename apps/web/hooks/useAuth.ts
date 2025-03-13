import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useDeveloperGuard() {
    const { data: session, status } = useSession();
    const router = useRouter()

    useEffect(() => {
        if(status === 'loading') return

        if(!session) {
            router.push('/api/auth/signin')
        } else if(session.user.role !== 'DEVELOPER') {
            router.push('/user')
        }
    }, [session, status, router])

    return {session, isLoading: status === 'loading'}
}