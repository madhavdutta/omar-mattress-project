import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useQuiz } from '@/context/QuizContext'
import Layout from './Layout'

export default function ResultsPage() {
  const navigate = useNavigate()
  const { results } = useQuiz()
  
  useEffect(() => {
    // If no results, redirect to quiz
    if (!results || !results.recommendations) {
      navigate('/quiz')
    }
  }, [results, navigate])
  
  if (!results || !results.recommendations) {
    return null
  }
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-indigo-800 mb-2">
            Your Personalized Mattress Results
          </h1>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Based on your sleep preferences, we've analyzed our entire mattress collection to find your perfect match.
          </p>
          
          <div className="bg-indigo-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Your Sleep Analysis</h2>
            <p className="text-gray-700">{results.analysis}</p>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <span className="text-gray-700 font-medium">Your Ideal Firmness:</span>
                <div className="mt-2 relative w-full max-w-xs bg-gray-200 h-6 rounded-full overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-indigo-600"
                    style={{ width: `${(results.firmness / 10) * 100}%` }}
                  ></div>
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-bold text-white">
                    {results.firmness.toFixed(1)}/10
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1 max-w-xs">
                  <span>Soft</span>
                  <span>Medium</span>
                  <span>Firm</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Link
                  to="/quiz"
                  className="inline-flex items-center px-4 py-2 border border-indigo-600 text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Retake Quiz
                </Link>
                <a
                  href="#recommendations"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  See Recommendations
                </a>
              </div>
            </div>
          </div>
          
          <div id="recommendations" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Top Mattress Matches</h2>
            
            <div className="space-y-8">
              {results.recommendations.map((mattress, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-gray-100">
                      <img 
                        src={mattress.imageUrl} 
                        alt={mattress.name} 
                        className="w-full h-64 object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{mattress.name}</h3>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="ml-2 text-gray-600">(150+ reviews)</span>
                          </div>
                        </div>
                        <div className="flex items-center bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">
                          <span className="font-bold text-lg">{mattress.matchScore}%</span>
                          <span className="ml-1 text-sm">Match</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-gray-500 text-sm">Firmness:</span>
                          <div className="mt-1 relative bg-gray-200 h-4 rounded-full overflow-hidden">
                            <div 
                              className="absolute top-0 left-0 h-full bg-indigo-600"
                              style={{ width: `${(mattress.firmness / 10) * 100}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Soft</span>
                            <span>{mattress.firmness}/10</span>
                            <span>Firm</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-gray-500 text-sm">Price:</span>
                          <p className="font-bold text-gray-900">${mattress.price}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <span className="text-gray-500 text-sm">Materials:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {mattress.materials.map((material, i) => (
                            <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <span className="text-gray-500 text-sm">Why it's a good match:</span>
                        <p className="text-gray-700 mt-1">{mattress.explanation}</p>
                      </div>
                      
                      <div className="mt-6 flex flex-col sm:flex-row gap-4">
                        <a
                          href="#"
                          className="flex-1 text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                          Shop Now
                        </a>
                        <a
                          href="#"
                          className="flex-1 text-center px-4 py-2 border border-indigo-600 rounded-md text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Not quite what you're looking for?</h2>
            <p className="text-gray-700 mb-6">
              Our sleep experts are available to help you find the perfect mattress for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex-1 text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Chat with an Expert
              </a>
              <Link
                to="/quiz"
                className="flex-1 text-center px-4 py-2 border border-indigo-600 rounded-md text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Retake Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
