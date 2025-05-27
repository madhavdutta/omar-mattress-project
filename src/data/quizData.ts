import { QuizData } from '@/types/quiz'

export const quizData: QuizData = {
  title: "Find Your Perfect Mattress",
  description: "Answer these science-backed questions to discover your ideal mattress firmness and get personalized recommendations.",
  questions: [
    {
      id: "sleepPosition",
      type: "radio",
      question: "What's your primary sleeping position?",
      description: "Your sleeping position significantly impacts the ideal mattress firmness for proper spinal alignment.",
      options: [
        {
          id: "back",
          label: "Back Sleeper",
          value: "back",
          image: "https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          id: "side",
          label: "Side Sleeper",
          value: "side",
          image: "https://images.pexels.com/photos/6585602/pexels-photo-6585602.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          id: "stomach",
          label: "Stomach Sleeper",
          value: "stomach",
          image: "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=300"
        },
        {
          id: "combination",
          label: "Combination Sleeper",
          value: "combination",
          image: "https://images.pexels.com/photos/6585590/pexels-photo-6585590.jpeg?auto=compress&cs=tinysrgb&w=300"
        }
      ]
    },
    {
      id: "weight",
      type: "radio",
      question: "What's your body weight range?",
      description: "Body weight affects how much you sink into a mattress and the support you need.",
      options: [
        {
          id: "light",
          label: "Under 130 lbs",
          value: "light"
        },
        {
          id: "average",
          label: "130-230 lbs",
          value: "average"
        },
        {
          id: "heavy",
          label: "Over 230 lbs",
          value: "heavy"
        }
      ]
    },
    {
      id: "painPoints",
      type: "multiple",
      question: "Do you experience any pain while sleeping?",
      description: "Different mattress types can help alleviate specific pain points.",
      options: [
        {
          id: "noPain",
          label: "No pain issues",
          value: "noPain"
        },
        {
          id: "backPain",
          label: "Lower back pain",
          value: "backPain"
        },
        {
          id: "neckPain",
          label: "Neck pain",
          value: "neckPain"
        },
        {
          id: "shoulderPain",
          label: "Shoulder pain",
          value: "shoulderPain"
        },
        {
          id: "hipPain",
          label: "Hip pain",
          value: "hipPain"
        }
      ]
    },
    {
      id: "preferredFeel",
      type: "slider",
      question: "What mattress feel do you prefer?",
      description: "This is your subjective preference for how the mattress feels when you lie on it.",
      min: 1,
      max: 10,
      step: 1,
      minLabel: "Soft, plush feel",
      maxLabel: "Firm, solid feel"
    },
    {
      id: "temperature",
      type: "radio",
      question: "Do you tend to sleep hot?",
      description: "Your body temperature during sleep affects mattress material choices.",
      options: [
        {
          id: "cold",
          label: "I'm usually cold at night",
          value: "cold"
        },
        {
          id: "neutral",
          label: "My temperature is usually neutral",
          value: "neutral"
        },
        {
          id: "warm",
          label: "I sometimes get warm",
          value: "warm"
        },
        {
          id: "hot",
          label: "I often wake up sweating",
          value: "hot"
        }
      ]
    },
    {
      id: "motionIsolation",
      type: "radio",
      question: "How important is motion isolation?",
      description: "If you share your bed, motion isolation prevents movement from disturbing your partner.",
      options: [
        {
          id: "notImportant",
          label: "Not important (I sleep alone)",
          value: "notImportant"
        },
        {
          id: "somewhatImportant",
          label: "Somewhat important",
          value: "somewhatImportant"
        },
        {
          id: "veryImportant",
          label: "Very important (light sleeper/partner moves a lot)",
          value: "veryImportant"
        }
      ]
    },
    {
      id: "materials",
      type: "multiple",
      question: "Do you have preferences or allergies to certain mattress materials?",
      description: "Different materials offer varying benefits and may affect allergies.",
      options: [
        {
          id: "noPreference",
          label: "No specific preferences",
          value: "noPreference"
        },
        {
          id: "memory",
          label: "I like memory foam",
          value: "memory"
        },
        {
          id: "latex",
          label: "I prefer latex",
          value: "latex"
        },
        {
          id: "innerspring",
          label: "I like innerspring/coils",
          value: "innerspring"
        },
        {
          id: "hypoallergenic",
          label: "Need hypoallergenic materials",
          value: "hypoallergenic"
        },
        {
          id: "organic",
          label: "Prefer organic/natural materials",
          value: "organic"
        }
      ]
    },
    {
      id: "budget",
      type: "radio",
      question: "What's your budget range for a queen-size mattress?",
      description: "Quality mattresses are available at various price points.",
      options: [
        {
          id: "budget",
          label: "Under $500",
          value: "budget"
        },
        {
          id: "midRange",
          label: "$500-$1,000",
          value: "midRange"
        },
        {
          id: "premium",
          label: "$1,000-$1,500",
          value: "premium"
        },
        {
          id: "luxury",
          label: "Over $1,500",
          value: "luxury"
        }
      ]
    }
  ]
}
