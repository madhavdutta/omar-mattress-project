import { createContext, useContext, useState, ReactNode } from 'react'
import { QuizAnswer, QuizResults } from '@/types/quiz'

interface QuizContextType {
  currentStep: number
  setCurrentStep: (step: number) => void
  answers: QuizAnswer[]
  updateAnswer: (questionId: string, value: string | string[]) => void
  results: QuizResults | null
  setResults: (results: QuizResults) => void
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [results, setResults] = useState<QuizResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const updateAnswer = (questionId: string, value: string | string[]) => {
    const existingAnswerIndex = answers.findIndex(a => a.questionId === questionId)
    
    if (existingAnswerIndex >= 0) {
      const updatedAnswers = [...answers]
      updatedAnswers[existingAnswerIndex] = { questionId, value }
      setAnswers(updatedAnswers)
    } else {
      setAnswers([...answers, { questionId, value }])
    }
  }

  return (
    <QuizContext.Provider value={{
      currentStep,
      setCurrentStep,
      answers,
      updateAnswer,
      results,
      setResults,
      isLoading,
      setIsLoading
    }}>
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider')
  }
  return context
}
