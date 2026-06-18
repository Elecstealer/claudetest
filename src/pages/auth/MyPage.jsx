import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function MyPage() {
  const { user, signOut } = useAuth()

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="text-yellow-400 text-xs tracking-widest uppercase mb-2">My Account</p>
        <h1 className="text-3xl font-bold text-white">마이페이지</h1>
      </div>

      <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 mb-6">
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-700">
          <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-gray-900 font-black text-lg">
            {user?.email?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-white font-bold">{user?.email}</p>
            <p className="text-gray-500 text-sm">일반 회원</p>
          </div>
        </div>
        <dl className="space-y-4 text-sm">
          <div className="flex">
            <dt className="w-28 text-gray-500">이메일</dt>
            <dd className="text-gray-300">{user?.email}</dd>
          </div>
          <div className="flex">
            <dt className="w-28 text-gray-500">가입일</dt>
            <dd className="text-gray-300">{user?.created_at?.slice(0, 10)}</dd>
          </div>
          <div className="flex">
            <dt className="w-28 text-gray-500">이메일 인증</dt>
            <dd className={user?.email_confirmed_at ? 'text-green-400' : 'text-yellow-400'}>
              {user?.email_confirmed_at ? '완료' : '미완료'}
            </dd>
          </div>
        </dl>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Link to="/community" className="bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-yellow-400 transition-colors">
          <p className="text-gray-400 text-sm mb-1">내 게시글</p>
          <p className="text-white font-bold text-lg">0</p>
        </Link>
        <Link to="/inquiry/my" className="bg-gray-800 border border-gray-700 rounded-xl p-5 hover:border-yellow-400 transition-colors">
          <p className="text-gray-400 text-sm mb-1">내 문의</p>
          <p className="text-white font-bold text-lg">2</p>
        </Link>
      </div>

      <button
        onClick={signOut}
        className="w-full border border-gray-700 text-gray-400 py-3 rounded hover:border-red-700 hover:text-red-400 transition-colors text-sm">
        로그아웃
      </button>
    </div>
  )
}
