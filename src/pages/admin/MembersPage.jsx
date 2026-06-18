import { useState, useEffect } from 'react'
import { getProfiles } from '../../services/profile.service'

export default function MembersPage() {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getProfiles()
      .then(setMembers)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const filtered = members.filter(m => m.email.includes(search))

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">회원관리</h2>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="이메일 검색..."
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 w-56"
        />
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">불러오는 중...</div>
      ) : (
        <>
          <div className="border border-gray-700 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium">이메일</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium w-24">권한</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium hidden md:table-cell w-32">가입일</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filtered.map(m => (
                  <tr key={m.id} className="hover:bg-gray-800 transition-colors">
                    <td className="px-4 py-3 text-gray-300">{m.email}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs border px-2 py-0.5 rounded ${m.role === 'admin' ? 'text-yellow-400 border-yellow-400/50' : 'text-gray-400 border-gray-600'}`}>
                        {m.role === 'admin' ? '관리자' : '일반'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{m.created_at?.slice(0, 10)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">총 {filtered.length}명</p>
        </>
      )}
    </div>
  )
}
