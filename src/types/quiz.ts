export interface QuizOption {
  id: string
  value: string
  label: string
  image?: string
}

export interface QuizQuestion {
  id: string
  question: string
  description?: string
  type: 'radio' | 'multiple' | 'slider'
  options?: QuizOption[]
  min?: number
  max?: number
  step?: number
  minLabel?: string
  maxLabel?: string
}

export interface QuizData {
  title: string
  description: string
  questions: QuizQuestion[]
}

export interface QuizAnswer {
  questionId: string
  value: string | string[]
}

export interface MattressRecommendation {
  id: string
  name: string
  brand: string
  firmness: number
  price: number
  materials: string[]
  bestFor: string[]
  warranty: string
  trialPeriod: string
  shipping: string
  url: string
  imageUrl: string
  matchScore: number
  explanation: string
}

export interface QuizResults {
  firmness: number
  recommendations: MattressRecommendation[]
  analysis: string
}
