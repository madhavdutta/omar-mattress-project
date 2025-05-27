import { Routes, Route } from 'react-router-dom'
import QuizContainer from './components/QuizContainer'
import ResultsPage from './components/ResultsPage'
import EmbedPage from './components/EmbedPage'
import HomePage from './components/HomePage'
import { QuizProvider } from './context/QuizContext'

function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizContainer />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/embed" element={<EmbedPage />} />
        </Routes>
      </div>
    </QuizProvider>
  )
}

export default App
