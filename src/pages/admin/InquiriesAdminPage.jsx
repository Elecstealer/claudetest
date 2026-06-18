import { useState, useEffect } from 'react'
import { getAllInquiries, answerInquiry } from '../../services/inquiry.service'

const statusLabel = { pending: '답변 대기', answered: '답변 완료' }
const statusColor = { pending: 'text-yellow-400 border-yellow-400/50', answered: 'text-green-400 border-green-400/50' }

export default function InquiriesAdminPage() {
  const [inquiries, setInquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)
  const [answer, setAnswer] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    getAllInquiries()
      .then(setInquiries)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const submitAnswer = async (id) => {
    if (!answer.trim()) return
    setSubmitting(true)
    const updated = await answerInquiry(id, answer)
    setInquiries(prev => prev.map(inq => inq.id === id ? updated : inq))
    setAnswer('')
    setSelected(null)
    setSubmitting(false)
  }

  const authorName = (inq) => inq.profiles?.email?.split('@')[0] ?? '익명'

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6">문의관리</h2>

      {loading ? (
        <div className="text-center py-12 text-gray-400">불러오는 중...</div>
      ) : inquiries.length === 0 ? (
        <div className="text-center py-12 text-gray-500">문의가 없습니다.</div>
      ) : (
        <div className="space-y-3">
          {inquiries.map(inq => (
            <div key={inq.id} className="border border-gray-700 rounded-xl overflow-hidden">
              <button onClick={() => setSelected(selected === inq.id ? null : inq.id)}
                className="w-full flex items-center gap-4 px-5 py-4 bg-gray-800 hover:bg-gray-700 transition-colors text-left">
                <span className={`text-xs border px-2 py-0.5 rounded shrink-0 ${statusColor[inq.status]}`}>
                  {statusLabel[inq.status]}
                </span>
                <span className="text-gray-200 flex-1 truncate">{inq.title}</span>
                <span className="text-gray-500 text-xs shrink-0">{authorName(inq)}</span>
                <span className="text-gray-500 text-sm shrink-0">{inq.created_at?.slice(0, 10)}</span>
              </button>
              {selected === inq.id && (
                <div className="border-t border-gray-700 bg-gray-900 p-5 space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-2">문의 내용</p>
                    <p className="text-gray-300 text-sm whitespace-pre-line">{inq.content}</p>
                  </div>
                  {inq.answer ? (
                    <div className="bg-yellow-400/5 border border-yellow-400/20 rounded p-4">
                      <p className="text-xs text-yellow-400 mb-1">등록된 답변</p>
                      <p className="text-gray-300 text-sm">{inq.answer}</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500">답변 작성</p>
                      <textarea value={answer} onChange={e => setAnswer(e.target.value)}
                        rows={4} placeholder="답변을 입력하세요"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 resize-none text-sm"
                      />
                      <button onClick={() => submitAnswer(inq.id)} disabled={submitting}
                        className="bg-yellow-400 text-gray-900 px-6 py-2 rounded font-bold text-sm hover:bg-yellow-300 transition-colors disabled:opacity-50">
                        {submitting ? '등록 중...' : '답변 등록'}
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
