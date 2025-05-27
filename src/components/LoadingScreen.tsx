export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 mb-4"></div>
      <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Analyzing Your Answers</h2>
      <p className="text-gray-600 text-center max-w-md">
        We're finding your perfect mattress match based on your sleep preferences and needs...
      </p>
    </div>
  )
}
