import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCareerGoals } from '../../data/useCareerGoals'
import { CircularProgress } from '../CircularProgress/CircularProgress'

interface CareerGoalProps {
  className?: string
}

export const CareerGoal: React.FC<CareerGoalProps> = ({ className = '' }) => {
  const { data: goals, isLoading, error } = useCareerGoals()

  if (isLoading) return 'Loading...'
  if (error) return <div>Failed to load Career Goal</div>
  if (!goals) return <div>Not Found</div>

  const latestGoal = goals[0]

  return (
    <div className={`${className}`} data-testid="career-goal">
      <h4 className="h4 mb-[1rem]">Career Goal</h4>
      <div className="flex flex-col items-center border border-border rounded-[0.25rem] pt-[2rem] pb-[2.75rem] px-[2.2rem]">
        <h6 className="h6">Your Progress</h6>
        <CircularProgress value={latestGoal.progress} />
        <p>I want to become a</p>
        <h4 className="h4 mt-[0.5rem] text-center">{latestGoal.name}</h4>
        <NavLink className="link mt-[1.6rem]" to="/insights">
          View Insights
        </NavLink>
      </div>
    </div>
  )
}
