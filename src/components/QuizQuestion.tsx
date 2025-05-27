import { useState, useEffect } from 'react'
import { QuizQuestion as QuizQuestionType, QuizOption } from '@/types/quiz'
import { useQuiz } from '@/context/QuizContext'
import RadioQuestion from './questions/RadioQuestion'
import MultipleQuestion from './questions/MultipleQuestion'
import SliderQuestion from './questions/SliderQuestion'

interface QuizQuestionProps {
  question: QuizQuestionType
  questionNumber: number
}

export default function QuizQuestion({ question, questionNumber }: QuizQuestionProps) {
  const { answers, updateAnswer } = useQuiz()
  const [currentAnswer, setCurrentAnswer] = useState<string | string[]>('')
  
  // Initialize answer from context if it exists
  useEffect(() => {
    const existingAnswer = answers.find(a => a.questionId === question.id)
    if (existingAnswer) {
      setCurrentAnswer(existingAnswer.value)
    } else {
      // Set default values based on question type
      if (question.type === 'multiple') {
        setCurrentAnswer([])
      } else if (question.type === 'slider' && question.min !== undefined) {
        const defaultValue = Math.floor((question.max || 10) - (question.min || 1)) / 2 + (question.min || 1)
        setCurrentAnswer(defaultValue.toString())
        updateAnswer(question.id, defaultValue.toString())
      } else {
        setCurrentAnswer('')
      }
    }
  }, [question.id, answers])

  const handleAnswerChange = (value: string | string[]) => {
    setCurrentAnswer(value)
    updateAnswer(question.id, value)
  }

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {questionNumber}. {question.question}
      </h2>
      
      {question.description && (
        <p className="text-gray-600 mb-6">{question.description}</p>
      )}
      
      {question.type === 'radio' && (
        <RadioQuestion 
          options={question.options || []} 
          value={currentAnswer as string}
          onChange={handleAnswerChange}
        />
      )}
      
      {question.type === 'multiple' && (
        <MultipleQuestion 
          options={question.options || []} 
          value={currentAnswer as string[]}
          onChange={handleAnswerChange}
        />
      )}
      
      {question.type === 'slider' && (
        <SliderQuestion 
          min={question.min || 1}
          max={question.max || 10}
          step={question.step || 1}
          minLabel={question.minLabel}
          maxLabel={question.maxLabel}
          value={currentAnswer as string}
          onChange={handleAnswerChange}
        />
      )}
    </div>
  )
}
