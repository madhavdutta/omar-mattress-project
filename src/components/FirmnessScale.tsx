interface FirmnessScaleProps {
  firmness: number
}

export default function FirmnessScale({ firmness }: FirmnessScaleProps) {
  // Calculate position percentage (0-100)
  const position = ((firmness - 1) / 9) * 100
  
  return (
    <div className="mb-4">
      <div className="relative h-12 mb-2">
        <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 rounded-full"></div>
        <div 
          className="absolute bottom-0 w-6 h-6 bg-white border-2 border-indigo-600 rounded-full -ml-3 shadow-md"
          style={{ left: `${position}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between text-sm text-gray-600">
        <div className="text-center">
          <div className="font-medium">1-3</div>
          <div>Soft</div>
        </div>
        <div className="text-center">
          <div className="font-medium">4-6</div>
          <div>Medium</div>
        </div>
        <div className="text-center">
          <div className="font-medium">7-10</div>
          <div>Firm</div>
        </div>
      </div>
      
      <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-800 font-bold text-xl mr-4">
            {firmness.toFixed(1)}
          </div>
          <div>
            <h4 className="font-medium text-indigo-800">Your Ideal Firmness</h4>
            <p className="text-sm text-gray-600">
              {firmness < 4 ? 'Soft mattresses provide deep cushioning and pressure relief, ideal for side sleepers and those with joint pain.' :
               firmness < 7 ? 'Medium mattresses balance comfort and support, suitable for most sleep positions and preferences.' :
               'Firm mattresses offer solid support with minimal sinking, best for back and stomach sleepers or those with back pain.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
