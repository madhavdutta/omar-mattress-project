import { useQuiz } from '@/context/QuizContext'

interface QuizNavigationProps {
  currentStep: number
  totalSteps: number
  onNext: () => void
  onPrevious: () => void
}

export default function QuizNavigation({ 
  currentStep, 
  totalSteps, 
  onNext, 
  onPrevious 
}: QuizNavigationProps) {
  const { answers } = useQuiz()
  
  // Check if current question has been answered
  const currentQuestionId = currentStep >= 0 ? 
    (currentStep < totalSteps ? 
      `sleepPosition,weight,painPoints,preferredFeel,temperature,motionIsolation,materials,budget`.split(',')[currentStep] : 
      '') : 
    ''
  
  const isCurrentQuestionAnswered = answers.some(a => a.questionId === currentQuestionId)
  
  // For slider questions, they're always "answered" since we set a default
  const isSliderQuestion = ['preferredFeel'].includes(currentQuestionId)
  const canProceed = isCurrentQuestionAnswered || isSliderQuestion
  
  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={onPrevious}
        disabled={currentStep === 0}
        className={`px-6 py-2 rounded-md font-medium ${
          currentStep === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50'
        }`}
      >
        Previous
      </button>
      
      <button
        onClick={onNext}
        disabled={!canProceed}
        className={`px-6 py-2 rounded-md font-medium ${
          !canProceed
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        {currentStep === totalSteps - 1 ? 'Get Results' : 'Next'}
      </button>
    </div>
  )
}
