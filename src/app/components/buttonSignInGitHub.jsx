'use client'
import { GitHubIcon } from "./icons"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function ButtonSignInGitHub() {
    const supabase = createClientComponentClient()

    const handleSignIn = async (e) => {
        e.target.innerText = 'iniciando sesion con GitHub...'
        await supabase.auth.signInWithOAuth({
          provider: 'github',
          options: {
            redirectTo: 'http://localhost:3000/auth/callback'
          }
        })
      }

    return (
        <button onClick={handleSignIn} className="border-none bg-zinc-800 hover:bg-zinc-900 text-white text-md font-bold flex justify-center items-center p-2 rounded-lg">
            <GitHubIcon />
            <span>Connect with GitHub</span>
        </button>
    )
}
