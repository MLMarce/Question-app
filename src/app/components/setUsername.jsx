'use client'
import Link from "next/link"
import { useSessionStore } from "../store/sessionStore"

export default function SetUsername() {
    
    const {setUsername} = useSessionStore(state => state)

    const handleClickStart = () => {
        const user = document.querySelector('input').value
        setUsername(user)
    }
    return (
        <div className="w-9/12 h-max p-2 relative">
            <label className="flex flex-col w-full h-full mb-2">
                <span className="py-2 text-white">What is your name?</span>
                <input className="p-1 rounded-md outline-none" type="text" placeholder="your name"/>
            </label>
            <Link onClick={handleClickStart} href="/game" className="border rounded-lg text-white text-start px-2 pr-20 bg-slate-900 hover:bg-white hover:text-slate-900 transition-all duration-200" >Start</Link>
        </div>
    )
}