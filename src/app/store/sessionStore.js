import { create } from "zustand";

export const  useSessionStore = create((set) => ({
    questionsCorrectsId: [],
    currentQuestionId: 0,
    username: 'none',
    points: 0,
    setPoints: (points) => set({points}),
    setQuestionsCorrectsId: (questionsCorrectsId) => set({questionsCorrectsId}),
    setUsername: (username) => set({username}),
    setCurrentQuestionId: (currentQuestionId) => set({currentQuestionId})
}))