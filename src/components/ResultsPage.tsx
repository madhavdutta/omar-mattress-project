import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuiz } from '@/context/QuizContext'
import MattressCard from './MattressCard'
import FirmnessScale from './FirmnessScale'

export default function ResultsPage() {
  const navigate = useNavigate()
  const { results, answers } = useQuiz()
  
  useEffect(() => {
    // Redirect to quiz if no results
    if (!results) {
      navigate('/')
    }
  }, [results, navigate])
  
  if (!results) {
    return null
  }
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
          Your Personalized Mattress Recommendations
        </h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Sleep Profile Analysis</h2>
          <p className="text-gray-700 mb-6">{results.analysis}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Your Ideal Firmness</h3>
            <FirmnessScale firmness={results.firmness} />
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Recommendations For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.recommendations.map((mattress, index) => (
              <MattressCard 
                key={mattress.id} 
                mattress={mattress} 
                rank={index + 1} 
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">How We Determined Your Results</h2>
        <p className="text-gray-700 mb-4">
          Our mattress matching algorithm analyzes your sleep position, body type, comfort preferences, and specific needs to determine your ideal mattress firmness and features. We then compare these requirements against our database of top-rated mattresses to find your best matches.
        </p>
        <p className="text-gray-700">
          The match percentage indicates how well each mattress aligns with your specific requirements. We consider factors like firmness, materials, temperature regulation, motion isolation, and price to provide you with personalized recommendations.
        </p>
      </div>
    </div>
  )
}
