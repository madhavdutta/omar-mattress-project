import { createContext, useContext, useState, ReactNode } from 'react'
import { QuizData, QuizResults, QuizAnswer } from '@/types/quiz'

interface QuizContextType {
  currentStep: number
  setCurrentStep: (step: number) => void
  answers: QuizAnswer[]
  setAnswers: (answers: QuizAnswer[]) => void
  updateAnswer: (questionId: string, value: string | string[]) => void
  results: QuizResults | null
  setResults: (results: QuizResults) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [results, setResults] = useState<QuizResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const updateAnswer = (questionId: string, value: string | string[]) => {
    setAnswers(prev => {
      const existingIndex = prev.findIndex(a => a.questionId === questionId)
      
      if (existingIndex >= 0) {
        const updated = [...prev]
        updated[existingIndex] = { questionId, value }
        return updated
      } else {
        return [...prev, { questionId, value }]
      }
    })
  }

  return (
    <QuizContext.Provider value={{
      currentStep,
      setCurrentStep,
      answers,
      setAnswers,
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
