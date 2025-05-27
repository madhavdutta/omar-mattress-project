interface QuizProgressProps {
  currentStep: number
  totalSteps: number
  progress: number
}

export default function QuizProgress({ currentStep, totalSteps, progress }: QuizProgressProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-indigo-700">
          Question {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-indigo-700">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
