import ButtonSignInDiscord from './buttonSignInDiscord'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import ButtonSignInGitHub from "./buttonSignInGitHub"
import { redirect } from "next/navigation"

export async function SignInSection () {
    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()

 if(session !== null) {
    redirect('http://localhost:3000/game')
 }

    return (
        <section className='flex flex-col gap-2'>
            <ButtonSignInGitHub />
            <ButtonSignInDiscord />
        </section>
    )
}