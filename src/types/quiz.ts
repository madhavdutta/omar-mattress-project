export interface QuizQuestion {
  id: string
  type: 'single' | 'multiple' | 'slider' | 'radio'
  question: string
  description?: string
  options?: QuizOption[]
  min?: number
  max?: number
  step?: number
  minLabel?: string
  maxLabel?: string
}

export interface QuizOption {
  id: string
  label: string
  value: string
  image?: string
}

export interface QuizAnswer {
  questionId: string
  value: string | string[]
}

export interface QuizData {
  title: string
  description: string
  questions: QuizQuestion[]
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
