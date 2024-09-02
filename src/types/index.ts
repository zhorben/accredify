export interface User {
  id: number
  name: string
  email: string
  profile_picture_url: string
  current_organisation: {
    id: number
    name: string
    logo_url: string
    is_personal: boolean
  }
}

export interface Document {
  id: number
  status: string
  document_name: string
  issuer_name: string
  issuer_logo_url: string
  recipient_name: string
  received_on: string | null
  expire_at: string | null
  created_at: string
  updated_at: string
}

export interface CareerGoal {
  id: number
  name: string
  description: string
  category: string
  type: 'technical' | 'core'
  progress: number
}
