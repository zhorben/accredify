import { useParams } from 'react-router-dom'
import { User } from '../types'
import { createQueryHook } from '../utils/fetchers'

const PERSONAL_USER_URL = import.meta.env.VITE_PERSONAL_USER_URL
const REGULAR_USER_URL = import.meta.env.VITE_REGULAR_USER_URL

export const useUser = () => {
  const { type } = useParams()
  const isPersonal = type === 'personal'

  const useUserQuery = createQueryHook<User>(
    isPersonal ? PERSONAL_USER_URL : REGULAR_USER_URL,
    ['userData', isPersonal],
  )

  return useUserQuery()
}
