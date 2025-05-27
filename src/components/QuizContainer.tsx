import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { quizData } from '@/data/quizData'
import { mattressData } from '@/data/mattressData'
import { useQuiz } from '@/context/QuizContext'
import QuizProgress from './QuizProgress'
import QuizQuestion from './QuizQuestion'
import QuizNavigation from './QuizNavigation'
import LoadingScreen from './LoadingScreen'

export default function QuizContainer() {
  const navigate = useNavigate()
  const { 
    currentStep, 
    setCurrentStep, 
    answers, 
    setResults, 
    isLoading, 
    setIsLoading 
  } = useQuiz()
  
  const [isComplete, setIsComplete] = useState(false)
  
  const totalSteps = quizData.questions.length
  const currentQuestion = quizData.questions[currentStep]
  const progress = ((currentStep + 1) / (totalSteps + 1)) * 100

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  useEffect(() => {
    if (isComplete) {
      processResults()
    }
  }, [isComplete])

  const processResults = async () => {
    setIsLoading(true)
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Calculate firmness based on answers
      let firmness = 5.5 // Default medium firmness
      
      // Get sleep position answer
      const sleepPosition = answers.find(a => a.questionId === 'sleepPosition')?.value as string
      if (sleepPosition === 'side') firmness -= 1
      if (sleepPosition === 'stomach') firmness += 1.5
      if (sleepPosition === 'back') firmness += 0.5
      
      // Get weight answer
      const weight = answers.find(a => a.questionId === 'weight')?.value as string
      if (weight === 'light') firmness -= 0.5
      if (weight === 'heavy') firmness += 1
      
      // Get pain points
      const painPoints = answers.find(a => a.questionId === 'painPoints')?.value as string[]
      if (painPoints?.includes('backPain')) firmness += 0.5
      
      // Get preferred feel
      const preferredFeel = answers.find(a => a.questionId === 'preferredFeel')?.value as string
      if (preferredFeel) {
        const feelValue = parseInt(preferredFeel)
        firmness = (firmness + feelValue) / 2 // Average with user preference
      }
      
      // Ensure firmness is within range
      firmness = Math.max(1, Math.min(10, firmness))
      
      // Calculate match scores for mattresses
      const recommendations = mattressData.map(mattress => {
        // Calculate base score based on firmness match (0-100)
        const firmnessDiff = Math.abs(mattress.firmness - firmness)
        let matchScore = 100 - (firmnessDiff * 10)
        
        // Adjust score based on other factors
        const materials = answers.find(a => a.questionId === 'materials')?.value as string[]
        const temperature = answers.find(a => a.questionId === 'temperature')?.value as string
        const budget = answers.find(a => a.questionId === 'budget')?.value as string
        
        // Material preferences
        if (materials) {
          if (materials.includes('memory') && mattress.materials.some(m => m.toLowerCase().includes('memory'))) {
            matchScore += 10
          }
          if (materials.includes('latex') && mattress.materials.some(m => m.toLowerCase().includes('latex'))) {
            matchScore += 10
          }
          if (materials.includes('innerspring') && mattress.materials.some(m => m.toLowerCase().includes('coil'))) {
            matchScore += 10
          }
          if (materials.includes('organic') && mattress.materials.some(m => m.toLowerCase().includes('organic'))) {
            matchScore += 15
          }
        }
        
        // Temperature considerations
        if (temperature === 'hot' && mattress.bestFor.some(b => b.toLowerCase().includes('hot'))) {
          matchScore += 15
        }
        
        // Budget considerations
        if (budget === 'budget' && mattress.price <= 500) matchScore += 15
        if (budget === 'midRange' && mattress.price > 500 && mattress.price <= 1000) matchScore += 15
        if (budget === 'premium' && mattress.price > 1000 && mattress.price <= 1500) matchScore += 15
        if (budget === 'luxury' && mattress.price > 1500) matchScore += 15
        
        // Sleep position match
        if (sleepPosition && mattress.bestFor.some(b => b.toLowerCase().includes(sleepPosition.toLowerCase()))) {
          matchScore += 15
        }
        
        // Generate explanation
        let explanation = `This mattress has a firmness rating of ${mattress.firmness}/10, which `
        
        if (Math.abs(mattress.firmness - firmness) < 0.5) {
          explanation += 'perfectly matches your ideal firmness. '
        } else if (Math.abs(mattress.firmness - firmness) < 1.5) {
          explanation += 'closely matches your ideal firmness. '
        } else {
          explanation += 'is different from your ideal firmness, but may have other benefits. '
        }
        
        if (sleepPosition && mattress.bestFor.some(b => b.toLowerCase().includes(sleepPosition.toLowerCase()))) {
          explanation += `It's specifically designed for ${sleepPosition} sleepers. `
        }
        
        if (painPoints?.includes('backPain') && mattress.bestFor.some(b => b.toLowerCase().includes('back pain'))) {
          explanation += 'This mattress is excellent for people with back pain. '
        }
        
        explanation += `With a ${mattress.trialPeriod} trial period and ${mattress.warranty} warranty, you can try it risk-free.`
        
        return {
          ...mattress,
          matchScore: Math.round(matchScore),
          explanation
        }
      })
      
      // Sort by match score
      recommendations.sort((a, b) => b.matchScore - a.matchScore)
      
      // Generate analysis
      let analysis = `Based on your answers, we recommend a mattress with a firmness level of ${firmness.toFixed(1)}/10. `
      
      if (sleepPosition === 'side') {
        analysis += 'As a side sleeper, you generally need a softer mattress to relieve pressure on your shoulders and hips. '
      } else if (sleepPosition === 'back') {
        analysis += 'As a back sleeper, you need a medium to medium-firm mattress to support your spine while conforming to your body. '
      } else if (sleepPosition === 'stomach') {
        analysis += 'As a stomach sleeper, you need a firmer mattress to keep your spine properly aligned and prevent your hips from sinking. '
      } else if (sleepPosition === 'combination') {
        analysis += 'As a combination sleeper, you need a medium-firm mattress that can accommodate different sleeping positions. '
      }
      
      if (weight === 'light') {
        analysis += 'Your lighter body weight means you need a slightly softer mattress to allow proper contouring. '
      } else if (weight === 'heavy') {
        analysis += 'Your higher body weight means you need a firmer, more supportive mattress with good durability. '
      }
      
      if (painPoints?.includes('backPain')) {
        analysis += 'For your back pain, look for mattresses with good lumbar support and pressure relief. '
      }
      
      // Set results
      setResults({
        firmness,
        recommendations: recommendations.slice(0, 5), // Top 5 recommendations
        analysis
      })
      
      // Navigate to results page
      navigate('/results')
    } catch (error) {
      console.error('Error processing results:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-2">
          {quizData.title}
        </h1>
        <p className="text-center text-gray-600 mb-8">
          {quizData.description}
        </p>
        
        <QuizProgress currentStep={currentStep + 1} totalSteps={totalSteps} progress={progress} />
        
        <div className="my-8">
          <QuizQuestion 
            question={currentQuestion} 
            questionNumber={currentStep + 1}
          />
        </div>
        
        <QuizNavigation 
          currentStep={currentStep}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      </div>
    </div>
  )
}
