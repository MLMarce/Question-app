import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export default async function ShowUser() {
    const supabase = createServerComponentClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()
    const username = session.user.user_metadata.user_name
    return (
        <div className="">
            <h3 className="text-md">User: {username}</h3>
        </div>
    )
}