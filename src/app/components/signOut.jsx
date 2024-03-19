'use client'
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function ButtonSignOut() {
    const supabase = createClientComponentClient()
    const router = useRouter()

    const handleSignOut = async (e) => {
        e.target.innerText = 'Disconnecting...'
        await supabase.auth.signOut()
        router.replace('/')
    }

    return (
        <button onClick={handleSignOut} className="border-none bg-zinc-800 hover:bg-zinc-900 text-white text-md font-bold flex justify-center items-center p-2 rounded-lg">
            <span>Disconnect</span>
        </button>
    )
}