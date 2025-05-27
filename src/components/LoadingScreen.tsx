import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [loadingText, setLoadingText] = useState('Analyzing your sleep preferences')
  const [dots, setDots] = useState('')
  
  useEffect(() => {
    // Cycle through loading messages
    const messages = [
      'Analyzing your sleep preferences',
      'Calculating ideal firmness level',
      'Matching with perfect mattresses',
      'Generating personalized recommendations',
      'Preparing your results'
    ]
    
    let messageIndex = 0
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % messages.length
      setLoadingText(messages[messageIndex])
    }, 3000)
    
    // Animate dots
    const dotsInterval = setInterval(() => {
      setDots(prev => {
        if (prev.length >= 3) return ''
        return prev + '.'
      })
    }, 500)
    
    return () => {
      clearInterval(messageInterval)
      clearInterval(dotsInterval)
    }
  }, [])
  
  return (
    <div className="fixed inset-0 bg-indigo-600 flex flex-col items-center justify-center text-white p-4">
      <div className="w-24 h-24 border-4 border-white border-t-transparent rounded-full animate-spin mb-8"></div>
      
      <h2 className="text-2xl font-bold mb-2 text-center">
        {loadingText}{dots}
      </h2>
      
      <p className="text-indigo-200 text-center max-w-md">
        We're using your answers to find the perfect mattress match for your unique sleep needs.
      </p>
    </div>
  )
}
