import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function AdminRoute({ children }) {
  const { user, loading } = useAuth()
  const [isAdmin, setIsAdmin] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    if (!user) { setChecking(false); return }
    supabase.from('profiles').select('role').eq('id', user.id).single()
      .then(({ data }) => {
        setIsAdmin(data?.role === 'admin')
        setChecking(false)
      })
  }, [user])

  if (loading || checking) return (
    <div className="min-h-96 flex items-center justify-center">
      <span className="text-yellow-400">로딩 중...</span>
    </div>
  )

  if (!user) return <Navigate to="/login" replace />
  if (!isAdmin) return <Navigate to="/" replace />

  return children
}
