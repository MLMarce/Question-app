'use client'
import { usePathname, useRouter } from "next/navigation"
import { allQuestions } from "../lib/data"
import { useSessionStore } from "../store/sessionStore"

export default function ShowQuestion() {
    const path = usePathname()
    const { replace } = useRouter()
    const {currentQuestionId, setCurrentQuestionId, points, setPoints} = useSessionStore(state => state)
    const question = allQuestions.find(question => question.id === currentQuestionId)
    const responses = question.responses

    const handleClickChoice = (isCorrect) => {
        
        if(isCorrect) {
            if(currentQuestionId < allQuestions.length - 1) {
                setCurrentQuestionId(currentQuestionId + 1)
                setPoints(points + 100)
            } else {
                setCurrentQuestionId(0)
            }

        } else {
            replace(`${path}/defeat/`)
        }
    }

    return(
        <div className='text-white w-3/4 flex flex-col items-center relative'>
                <h2 className='p-3 text-2xl text-center font-bold'>{question?.question}</h2>
                <ul className='w-full relative text-center flex flex-col gap-1'>
                    {responses?.map(res => (
                        <li key={res.text} onClick={() => {handleClickChoice(res.isCorrect)}} className=' cursor-pointer w-full h-max text-xl py-3 font-medium bg-slate-800 hover:bg-slate-700 rounded-md transition'>{res.text}</li>
                    ))}
                </ul>
        </div>
    )
}