import { FC } from 'react'
import { useUser } from '../../data/useUser'
import { CareerGoal } from '../CareerGoal/CareerGoal'
import { DocumentList } from '../DocumentList/DocumentList'

export const DocumentListPage: FC = () => {
  const { data: user, isLoading, error } = useUser()

  if (isLoading) return 'Loading...'
  if (error) return <div>Failed to load documents</div>
  if (!user) return <div>Not Found</div>

  return (
    <div>
      <h2 className="h2 mb-[1rem]">Hi, {user.name} 👋</h2>
      <p className="body1 mb-[3.5rem]">
        Manage your documents issued by SMU Academy or track your career goal.
      </p>
      <div className="flex">
        {user.current_organisation.is_personal && (
          <CareerGoal className="max-w-[16.25rem] mr-[2rem]" />
        )}
        <DocumentList
          title="Recent Documents"
          tableProps={{
            className: 'min-h-[28.25rem] max-h-[28.25rem]',
          }}
        />
      </div>
    </div>
  )
}
