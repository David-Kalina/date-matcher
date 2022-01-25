import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { AuthContextData } from '../services/authService'

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
