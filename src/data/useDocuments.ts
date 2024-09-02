import { Document } from '../types'
import { createQueryHook } from '../utils/fetchers'

interface PaginationLink {
  url: string | null
  label: string
  active: boolean
}

interface PaginationLinks {
  first: string
  last: string
  prev: string | null
  next: string | null
}

interface PaginationMeta {
  current_page: number
  from: number
  last_page: number
  links: PaginationLink[]
  path: string
  per_page: number
  to: number
  total: number
}

interface ApiResponse {
  data: Document[]
  links: PaginationLinks
  meta: PaginationMeta
}

const DOCUMENTS_URL = import.meta.env.VITE_DOCUMENTS_URL

const useDocumentsQuery = createQueryHook<Document[]>(DOCUMENTS_URL, [
  'documents',
])

export const useDocuments = () => useDocumentsQuery()
