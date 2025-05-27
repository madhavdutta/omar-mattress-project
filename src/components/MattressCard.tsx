import { MattressRecommendation } from '@/types/quiz'

interface MattressCardProps {
  mattress: MattressRecommendation
  rank: number
}

export default function MattressCard({ mattress, rank }: MattressCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={mattress.imageUrl} 
          alt={mattress.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
          #{rank}
        </div>
        <div className="absolute top-2 right-2 bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full">
          {mattress.matchScore}% Match
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{mattress.name}</h3>
        <p className="text-gray-600 text-sm mb-2">by {mattress.brand}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex-1">
            <span className="text-sm font-medium text-gray-500">Firmness</span>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div 
                className="bg-indigo-600 h-2 rounded-full" 
                style={{ width: `${(mattress.firmness / 10) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Soft</span>
              <span>{mattress.firmness}/10</span>
              <span>Firm</span>
            </div>
          </div>
        </div>
        
        <div className="mb-3">
          <span className="text-sm font-medium text-gray-500">Price</span>
          <p className="text-lg font-semibold text-gray-800">${mattress.price}</p>
        </div>
        
        <div className="mb-3">
          <span className="text-sm font-medium text-gray-500">Best For</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {mattress.bestFor.map((feature, index) => (
              <span 
                key={index}
                className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <span className="text-sm font-medium text-gray-500">Why It's a Match</span>
          <p className="text-sm text-gray-700 mt-1">{mattress.explanation}</p>
        </div>
        
        <div className="flex justify-between text-xs text-gray-600 mb-4">
          <span>✓ {mattress.trialPeriod} Trial</span>
          <span>✓ {mattress.warranty}</span>
          <span>✓ {mattress.shipping}</span>
        </div>
        
        <a 
          href={mattress.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          View Mattress
        </a>
      </div>
    </div>
  )
}
