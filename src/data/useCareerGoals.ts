import { CareerGoal } from '../types'
import { createQueryHook } from '../utils/fetchers'

const CAREER_GOALS_URL = import.meta.env.VITE_CAREER_GOALS_URL

const useCareerGoalsQuery = createQueryHook<CareerGoal[]>(CAREER_GOALS_URL, [
  'careerGoals',
])

export const useCareerGoals = () => useCareerGoalsQuery()
