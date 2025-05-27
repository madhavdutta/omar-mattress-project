import { QuizOption } from '@/types/quiz'

interface MultipleQuestionProps {
  options: QuizOption[]
  value: string[]
  onChange: (value: string[]) => void
}

export default function MultipleQuestion({ options, value, onChange }: MultipleQuestionProps) {
  const handleChange = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter(v => v !== optionValue))
    } else {
      onChange([...value, optionValue])
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {options.map(option => {
        const isSelected = value.includes(option.value)
        
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
                  w-5 h-5 rounded flex items-center justify-center
                  ${isSelected 
                    ? 'bg-indigo-600 border-indigo-600' 
                    : 'border-2 border-gray-300'}
                `}>
                  {isSelected && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
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
