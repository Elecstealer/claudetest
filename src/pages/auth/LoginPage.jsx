import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { useEffect } from 'react'

export default function LoginPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm()

  useEffect(() => {
    if (user) navigate('/', { replace: true })
  }, [user, navigate])

  const onSubmit = async ({ email, password }) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('root', { message: '이메일 또는 비밀번호가 올바르지 않습니다.' })
      return
    }
    navigate('/')
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-2xl font-black text-yellow-400 tracking-widest">ENTERWORLD</Link>
          <p className="text-gray-400 text-sm mt-2">회원 로그인</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 rounded-xl border border-gray-700 p-8 space-y-5">
          {errors.root && (
            <div className="bg-red-900/30 border border-red-700 rounded px-4 py-3 text-sm text-red-400">
              {errors.root.message}
            </div>
          )}
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">이메일</label>
            <input
              {...register('email', { required: '이메일을 입력해주세요' })}
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">비밀번호</label>
            <input
              {...register('password', { required: '비밀번호를 입력해주세요' })}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
            />
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password.message}</p>}
          </div>
          <button type="submit" disabled={isSubmitting}
            className="w-full bg-yellow-400 text-gray-900 py-3 rounded font-bold hover:bg-yellow-300 transition-colors disabled:opacity-50">
            {isSubmitting ? '로그인 중...' : '로그인'}
          </button>
        </form>
        <p className="text-center text-gray-500 text-sm mt-6">
          계정이 없으신가요?{' '}
          <Link to="/register" className="text-yellow-400 hover:underline">회원가입</Link>
        </p>
      </div>
    </div>
  )
}
