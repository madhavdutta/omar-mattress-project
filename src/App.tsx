import { Routes, Route } from 'react-router-dom'
import QuizContainer from './components/QuizContainer'
import ResultsPage from './components/ResultsPage'
import EmbedPage from './components/EmbedPage'
import { QuizProvider } from './context/QuizContext'

function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<QuizContainer />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/embed" element={<EmbedPage />} />
        </Routes>
      </div>
    </QuizProvider>
  )
}

export default App
