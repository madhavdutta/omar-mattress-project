import { useState, useEffect } from 'react'

interface SliderQuestionProps {
  min: number
  max: number
  step: number
  minLabel?: string
  maxLabel?: string
  value: string
  onChange: (value: string) => void
}

export default function SliderQuestion({ 
  min, 
  max, 
  step, 
  minLabel, 
  maxLabel, 
  value, 
  onChange 
}: SliderQuestionProps) {
  const [localValue, setLocalValue] = useState(value ? parseInt(value) : min)
  
  useEffect(() => {
    if (value) {
      setLocalValue(parseInt(value))
    } else {
      setLocalValue(min)
    }
  }, [value, min])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    setLocalValue(newValue)
    onChange(newValue.toString())
  }
  
  // Calculate background gradient for slider
  const percentage = ((localValue - min) / (max - min)) * 100
  const background = `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
  
  return (
    <div className="py-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-500">
          {minLabel || `Soft (${min})`}
        </span>
        <span className="text-sm font-medium text-gray-500">
          {maxLabel || `Firm (${max})`}
        </span>
      </div>
      
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={localValue}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        style={{ background }}
      />
      
      <div className="mt-6 text-center">
        <div className="inline-flex items-center justify-center px-4 py-2 bg-indigo-100 rounded-full">
          <span className="text-lg font-semibold text-indigo-800">{localValue}</span>
          <span className="ml-1 text-sm text-indigo-600">/ {max}</span>
        </div>
        <p className="mt-2 text-gray-600">
          {localValue <= 3 ? 'Very soft, plush feel' : 
           localValue <= 5 ? 'Soft to medium feel' :
           localValue <= 7 ? 'Medium to medium-firm feel' :
           'Firm to very firm feel'}
        </p>
      </div>
    </div>
  )
}
