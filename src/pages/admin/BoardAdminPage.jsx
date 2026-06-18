import { useState, useEffect } from 'react'
import { getPosts, deletePost } from '../../services/post.service'
import { supabase } from '../../lib/supabase'

export default function BoardAdminPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const remove = async (id) => {
    if (!confirm('삭제하시겠습니까?')) return
    await deletePost(id)
    setPosts(prev => prev.filter(p => p.id !== id))
  }

  const toggleNotice = async (id, current) => {
    await supabase.from('posts').update({ is_notice: !current }).eq('id', id)
    setPosts(prev => prev.map(p => p.id === id ? { ...p, is_notice: !current } : p))
  }

  const filtered = posts.filter(p => p.title.includes(search))
  const authorName = (post) => post.profiles?.email?.split('@')[0] ?? '익명'

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">게시판관리</h2>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="제목 검색..."
          className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 w-48"
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
                  <th className="text-left px-4 py-3 text-gray-400 font-medium">제목</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-medium hidden md:table-cell w-24">작성자</th>
                  <th className="text-center px-4 py-3 text-gray-400 font-medium w-16">공지</th>
                  <th className="text-right px-4 py-3 text-gray-400 font-medium w-16">관리</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filtered.map(post => (
                  <tr key={post.id} className="hover:bg-gray-800 transition-colors">
                    <td className="px-4 py-3 text-gray-300 truncate max-w-xs">{post.title}</td>
                    <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{authorName(post)}</td>
                    <td className="px-4 py-3 text-center">
                      <button onClick={() => toggleNotice(post.id, post.is_notice)}
                        className={`text-xs px-2 py-0.5 rounded border transition-colors ${post.is_notice ? 'text-yellow-400 border-yellow-400/50 bg-yellow-400/10' : 'text-gray-600 border-gray-700'}`}>
                        {post.is_notice ? '공지' : '일반'}
                      </button>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <button onClick={() => remove(post.id)} className="text-xs text-red-400 hover:text-red-300 border border-red-800 px-2 py-1 rounded transition-colors">
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-3">총 {filtered.length}개</p>
        </>
      )}
    </div>
  )
}
