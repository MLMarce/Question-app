'use client'
import { DiscordIcon } from "./icons"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


export default function ButtonSignInDiscord() {
    
    const supabase = createClientComponentClient()

    const handleSignIn = async (e) => {
        e.target.innerText = 'Connecting with Discord...'
        await supabase.auth.signInWithOAuth({
          provider: 'discord',
          options: {
            redirectTo: 'http://localhost:3000/auth/callback'
          }
        })
      }

    return (
        <button onClick={handleSignIn} className="border-none bg-[#5865f2] hover:bg-[#5865d1] text-white text-md font-bold flex justify-center items-center p-2 rounded-lg">
            <DiscordIcon />
            <span>Connect with Discord</span>
        </button>
    )
}


