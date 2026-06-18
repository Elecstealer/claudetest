import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { createInquiry } from '../../services/inquiry.service'
import { useAuth } from '../../contexts/AuthContext'

const categories = ['서비스 문의', '아티스트 섭외', '공연 기획', '미디어/콘텐츠', '기타']

export default function InquiryPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  const onSubmit = async ({ title, content, category }) => {
    await createInquiry({ title, content, category, author_id: user.id })
    alert('문의가 접수되었습니다.')
    navigate('/inquiry/my')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="text-yellow-400 text-xs tracking-widest uppercase mb-2">Contact</p>
        <h1 className="text-3xl font-bold text-white">온라인 문의</h1>
        <p className="text-gray-400 text-sm mt-2">문의 접수 후 영업일 기준 1~3일 이내에 답변드립니다.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-900 border border-gray-700 rounded-xl p-8 space-y-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">문의 유형</label>
          <select {...register('category', { required: '문의 유형을 선택해주세요' })}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-yellow-400">
            <option value="">선택해주세요</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">제목</label>
          <input {...register('title', { required: '제목을 입력해주세요' })}
            placeholder="문의 제목을 입력하세요"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
          />
          {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title.message}</p>}
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">내용</label>
          <textarea {...register('content', { required: '내용을 입력해주세요' })}
            rows={8} placeholder="문의 내용을 자세히 입력해주세요"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 resize-none"
          />
          {errors.content && <p className="text-red-400 text-xs mt-1">{errors.content.message}</p>}
        </div>
        <div className="flex gap-3 justify-between items-center pt-2">
          <Link to="/inquiry/my" className="text-sm text-yellow-400 hover:underline">내 문의 내역 보기 →</Link>
          <div className="flex gap-3">
            <button type="reset" className="px-6 py-2.5 border border-gray-700 text-gray-400 rounded hover:text-white transition-colors text-sm">초기화</button>
            <button type="submit" disabled={isSubmitting}
              className="px-6 py-2.5 bg-yellow-400 text-gray-900 rounded font-bold hover:bg-yellow-300 transition-colors text-sm disabled:opacity-50">
              {isSubmitting ? '접수 중...' : '문의 접수'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
