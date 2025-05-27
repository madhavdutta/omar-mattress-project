import { QuizOption } from '@/types/quiz'

interface RadioQuestionProps {
  options: QuizOption[]
  value: string
  onChange: (value: string) => void
}

export default function RadioQuestion({ options, value, onChange }: RadioQuestionProps) {
  const handleChange = (optionValue: string) => {
    onChange(optionValue)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map(option => {
        const isSelected = value === option.value
        
        return (
          <div 
            key={option.id}
            onClick={() => handleChange(option.value)}
            className={`
              border-2 rounded-lg p-4 cursor-pointer transition-all
              ${isSelected 
                ? 'border-indigo-600 bg-indigo-50' 
                : 'border-gray-200 hover:border-indigo-300'}
            `}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className={`
                  w-5 h-5 rounded-full border flex items-center justify-center
                  ${isSelected 
                    ? 'border-indigo-600' 
                    : 'border-gray-300'}
                `}>
                  {isSelected && (
                    <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                  )}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className={`font-medium ${isSelected ? 'text-indigo-800' : 'text-gray-700'}`}>
                  {option.label}
                </h3>
                
                {option.image && (
                  <div className="mt-2 rounded-md overflow-hidden">
                    <img 
                      src={option.image} 
                      alt={option.label}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
