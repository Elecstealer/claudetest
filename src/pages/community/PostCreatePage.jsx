import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { createPost } from '../../services/post.service'
import { useAuth } from '../../contexts/AuthContext'

export default function PostCreatePage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async ({ title, content }) => {
    const post = await createPost({ title, content, author_id: user.id })
    navigate(`/community/${post.id}`)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <p className="text-yellow-400 text-xs tracking-widest uppercase mb-2">Community</p>
        <h1 className="text-3xl font-bold text-white">게시글 작성</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">제목</label>
          <input
            {...register('title', { required: '제목을 입력해주세요' })}
            placeholder="제목을 입력하세요"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
          />
          {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">내용</label>
          <textarea
            {...register('content', { required: '내용을 입력해주세요' })}
            rows={12}
            placeholder="내용을 입력하세요"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 resize-none"
          />
          {errors.content && <p className="text-red-400 text-xs mt-1">{errors.content.message}</p>}
        </div>
        <div className="flex gap-3 justify-end">
          <Link to="/community" className="px-6 py-2.5 border border-gray-700 text-gray-400 rounded hover:text-white transition-colors text-sm">취소</Link>
          <button type="submit" disabled={isSubmitting}
            className="px-6 py-2.5 bg-yellow-400 text-gray-900 rounded font-bold hover:bg-yellow-300 transition-colors text-sm disabled:opacity-50">
            {isSubmitting ? '등록 중...' : '등록'}
          </button>
        </div>
      </form>
    </div>
  )
}
