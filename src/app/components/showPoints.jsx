'use client'
import { useSessionStore } from "../store/sessionStore"

export default function ShowPoints() {
    const {points} = useSessionStore(state => state)


    return (
        <div>
            <h3>Your Points: {points}</h3>
        </div>
    )
}