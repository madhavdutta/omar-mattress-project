import { QuizData } from '@/types/quiz'

export const quizData: QuizData = {
  title: "Find Your Perfect Mattress",
  description: "Answer a few questions about your sleep preferences to get personalized mattress recommendations.",
  questions: [
    {
      id: "sleepPosition",
      question: "What's your primary sleeping position?",
      description: "Choose the position you spend most of the night in.",
      type: "radio",
      options: [
        {
          id: "side",
          value: "side",
          label: "Side Sleeper",
          image: "https://images.pexels.com/photos/6585598/pexels-photo-6585598.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          id: "back",
          value: "back",
          label: "Back Sleeper",
          image: "https://images.pexels.com/photos/6585590/pexels-photo-6585590.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          id: "stomach",
          value: "stomach",
          label: "Stomach Sleeper",
          image: "https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
          id: "combination",
          value: "combination",
          label: "Combination Sleeper",
          image: "https://images.pexels.com/photos/6585602/pexels-photo-6585602.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
      ]
    },
    {
      id: "weight",
      question: "What's your body type?",
      description: "This helps determine the right support level for your mattress.",
      type: "radio",
      options: [
        {
          id: "light",
          value: "light",
          label: "Lightweight (Under 130 lbs)"
        },
        {
          id: "average",
          value: "average",
          label: "Average Weight (130-230 lbs)"
        },
        {
          id: "heavy",
          value: "heavy",
          label: "Heavyweight (Over 230 lbs)"
        }
      ]
    },
    {
      id: "painPoints",
      question: "Do you experience any pain while sleeping?",
      description: "Select all that apply.",
      type: "multiple",
      options: [
        {
          id: "backPain",
          value: "backPain",
          label: "Back Pain"
        },
        {
          id: "neckPain",
          value: "neckPain",
          label: "Neck Pain"
        },
        {
          id: "shoulderPain",
          value: "shoulderPain",
          label: "Shoulder Pain"
        },
        {
          id: "hipPain",
          value: "hipPain",
          label: "Hip Pain"
        },
        {
          id: "noPain",
          value: "noPain",
          label: "No Pain Issues"
        }
      ]
    },
    {
      id: "preferredFeel",
      question: "What mattress firmness do you prefer?",
      description: "Slide to indicate your preferred firmness level.",
      type: "slider",
      min: 1,
      max: 10,
      step: 1,
      minLabel: "Very Soft",
      maxLabel: "Very Firm"
    },
    {
      id: "temperature",
      question: "Do you sleep hot, cold, or neutral?",
      description: "This helps determine the right cooling features for your mattress.",
      type: "radio",
      options: [
        {
          id: "hot",
          value: "hot",
          label: "I tend to sleep hot"
        },
        {
          id: "cold",
          value: "cold",
          label: "I tend to sleep cold"
        },
        {
          id: "neutral",
          value: "neutral",
          label: "I sleep at a comfortable temperature"
        }
      ]
    },
    {
      id: "motionIsolation",
      question: "Is motion isolation important to you?",
      description: "This is especially important if you share your bed with a partner.",
      type: "radio",
      options: [
        {
          id: "veryImportant",
          value: "veryImportant",
          label: "Very important - I'm easily disturbed by movement"
        },
        {
          id: "somewhatImportant",
          value: "somewhatImportant",
          label: "Somewhat important"
        },
        {
          id: "notImportant",
          value: "notImportant",
          label: "Not important"
        }
      ]
    },
    {
      id: "materials",
      question: "Do you have any mattress material preferences?",
      description: "Select all that apply.",
      type: "multiple",
      options: [
        {
          id: "memory",
          value: "memory",
          label: "Memory Foam"
        },
        {
          id: "latex",
          value: "latex",
          label: "Latex"
        },
        {
          id: "innerspring",
          value: "innerspring",
          label: "Innerspring/Coils"
        },
        {
          id: "hybrid",
          value: "hybrid",
          label: "Hybrid (Foam + Coils)"
        },
        {
          id: "organic",
          value: "organic",
          label: "Organic/Natural Materials"
        }
      ]
    },
    {
      id: "budget",
      question: "What's your budget for a queen-size mattress?",
      description: "This helps us recommend mattresses within your price range.",
      type: "radio",
      options: [
        {
          id: "budget",
          value: "budget",
          label: "Budget ($500 or less)"
        },
        {
          id: "midRange",
          value: "midRange",
          label: "Mid-range ($500-$1,000)"
        },
        {
          id: "premium",
          value: "premium",
          label: "Premium ($1,000-$1,500)"
        },
        {
          id: "luxury",
          value: "luxury",
          label: "Luxury ($1,500+)"
        }
      ]
    }
  ]
}
