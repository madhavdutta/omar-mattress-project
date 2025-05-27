import { useEffect, useState } from 'react'
import { quizData } from '@/data/quizData'
import Layout from './Layout'

export default function EmbedPage() {
  const [embedCode, setEmbedCode] = useState('')
  const [copied, setCopied] = useState(false)
  
  useEffect(() => {
    // Generate embed code
    const code = `<iframe 
  src="${window.location.origin}/quiz" 
  width="100%" 
  height="700" 
  style="border: none; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" 
  title="${quizData.title}"
></iframe>`
    
    setEmbedCode(code)
  }, [])
  
  const handleCopy = () => {
    navigator.clipboard.writeText(embedCode)
    setCopied(true)
    
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center text-indigo-800 mb-6">
            Embed This Mattress Quiz
          </h1>
          
          <p className="text-gray-700 mb-6">
            Copy the code below to embed this mattress quiz on your website. The quiz will help your visitors find their perfect mattress based on their sleep preferences and needs.
          </p>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Embed Code
            </label>
            <div className="relative">
              <pre className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm text-gray-800 overflow-x-auto">
                {embedCode}
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-3 py-1 rounded transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Preview</h2>
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <iframe 
                src="/quiz"
                width="100%" 
                height="500" 
                style={{ border: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                title={quizData.title}
              ></iframe>
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-indigo-800 mb-2">Integration Tips</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Add this quiz to product pages to help customers make informed decisions</li>
              <li>Include it in blog posts about sleep health and mattress buying guides</li>
              <li>Feature it prominently on your homepage to engage visitors</li>
              <li>The quiz is responsive and will adapt to any container width</li>
              <li>You can adjust the height parameter in the embed code if needed</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
