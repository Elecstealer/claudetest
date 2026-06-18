import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { getPost, deletePost, incrementViews } from '../../services/post.service'
import { useAuth } from '../../contexts/AuthContext'

export default function PostDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPost(id)
      .then(data => {
        setPost(data)
        incrementViews(id)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  const handleDelete = async () => {
    if (!confirm('삭제하시겠습니까?')) return
    await deletePost(id)
    navigate('/community')
  }

  if (loading) return <div className="max-w-6xl mx-auto px-4 py-16 text-center text-gray-400">불러오는 중...</div>

  if (!post) return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <p className="text-gray-400">게시글을 찾을 수 없습니다.</p>
      <Link to="/community" className="text-yellow-400 text-sm hover:underline mt-4 inline-block">목록으로</Link>
    </div>
  )

  const isAuthor = user?.id === post.author_id
  const authorName = post.profiles?.email?.split('@')[0] ?? '익명'

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-yellow-400">홈</Link>
        <span className="mx-2">/</span>
        <Link to="/community" className="hover:text-yellow-400">커뮤니티</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">상세</span>
      </nav>

      <div className="border border-gray-700 rounded-xl overflow-hidden mb-6">
        <div className="bg-gray-800 px-6 py-5 border-b border-gray-700">
          {post.is_notice && (
            <span className="text-xs text-yellow-400 border border-yellow-400/50 px-2 py-0.5 rounded mr-2">공지</span>
          )}
          <h1 className="text-xl font-bold text-white mt-2">{post.title}</h1>
          <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
            <span>{authorName}</span>
            <span>{post.created_at?.slice(0, 10)}</span>
            <span>조회 {post.views}</span>
          </div>
        </div>
        <div className="px-6 py-8 bg-gray-900 min-h-40">
          <p className="text-gray-300 leading-relaxed whitespace-pre-line">{post.content}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Link to="/community" className="text-sm text-gray-400 hover:text-white border border-gray-700 px-4 py-2 rounded transition-colors">
          목록
        </Link>
        {isAuthor && (
          <div className="flex gap-2">
            <button onClick={handleDelete}
              className="text-sm text-red-400 hover:text-red-300 border border-red-800 px-4 py-2 rounded transition-colors">
              삭제
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
