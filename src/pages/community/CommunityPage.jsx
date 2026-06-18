import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../../services/post.service'
import { useAuth } from '../../contexts/AuthContext'

const PAGE_SIZE = 10

export default function CommunityPage() {
  const { user } = useAuth()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const filtered = posts.filter(p => p.title.includes(search))
  const notices = filtered.filter(p => p.is_notice)
  const normals = filtered.filter(p => !p.is_notice)
  const paged = normals.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
  const totalPages = Math.ceil(normals.length / PAGE_SIZE)

  const authorName = (post) => post.profiles?.email?.split('@')[0] ?? '익명'

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-yellow-400 text-xs tracking-widest uppercase mb-2">Community</p>
          <h1 className="text-3xl font-bold text-white">커뮤니티</h1>
        </div>
        {user && (
          <Link to="/community/new" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-bold text-sm hover:bg-yellow-300 transition-colors">
            글쓰기
          </Link>
        )}
      </div>

      <div className="mb-4 flex justify-end">
        <input value={search} onChange={e => { setSearch(e.target.value); setPage(1) }}
          placeholder="제목 검색..."
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 w-64"
        />
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-400">불러오는 중...</div>
      ) : (
        <>
          <div className="border border-gray-700 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium w-16">번호</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium">제목</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium hidden md:table-cell w-32">작성자</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium hidden md:table-cell w-28">날짜</th>
                  <th className="text-right px-4 py-3 text-gray-400 font-medium w-16">조회</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {notices.map(post => (
                  <tr key={post.id} className="bg-gray-900/50 hover:bg-gray-800 transition-colors">
                    <td className="px-4 py-3 text-yellow-400 font-bold text-xs">공지</td>
                    <td className="px-4 py-3">
                      <Link to={`/community/${post.id}`} className="text-white hover:text-yellow-400 transition-colors font-medium">{post.title}</Link>
                    </td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{authorName(post)}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{post.created_at?.slice(0, 10)}</td>
                    <td className="px-4 py-3 text-gray-500 text-right">{post.views}</td>
                  </tr>
                ))}
                {paged.map((post, i) => (
                  <tr key={post.id} className="hover:bg-gray-800 transition-colors">
                    <td className="px-4 py-3 text-gray-600">{normals.length - (page - 1) * PAGE_SIZE - i}</td>
                    <td className="px-4 py-3">
                      <Link to={`/community/${post.id}`} className="text-gray-300 hover:text-yellow-400 transition-colors">{post.title}</Link>
                    </td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{authorName(post)}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{post.created_at?.slice(0, 10)}</td>
                    <td className="px-4 py-3 text-gray-500 text-right">{post.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-1 mt-6">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button key={p} onClick={() => setPage(p)}
                  className={`w-8 h-8 rounded text-sm transition-colors ${page === p ? 'bg-yellow-400 text-gray-900 font-bold' : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'}`}>
                  {p}
                </button>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">게시글이 없습니다.</div>
          )}
        </>
      )}
    </div>
  )
}
