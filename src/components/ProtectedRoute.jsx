import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) return (
    <div className="min-h-96 flex items-center justify-center">
      <span className="text-yellow-400">로딩 중...</span>
    </div>
  )

  if (!user) return <Navigate to="/login" replace />

  return children
}
