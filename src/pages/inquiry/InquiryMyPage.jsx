import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getMyInquiries } from '../../services/inquiry.service'
import { useAuth } from '../../contexts/AuthContext'

const statusLabel = { pending: '답변 대기', answered: '답변 완료' }
const statusColor = { pending: 'text-yellow-400 border-yellow-400/50', answered: 'text-green-400 border-green-400/50' }

export default function InquiryMyPage() {
  const { user } = useAuth()
  const [inquiries, setInquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!user) return
    getMyInquiries(user.id)
      .then(setInquiries)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [user])

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-yellow-400 text-xs tracking-widest uppercase mb-2">My Inquiries</p>
          <h1 className="text-3xl font-bold text-white">문의 내역</h1>
        </div>
        <Link to="/inquiry" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-bold text-sm hover:bg-yellow-300 transition-colors">새 문의</Link>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-400">불러오는 중...</div>
      ) : inquiries.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p className="mb-4">문의 내역이 없습니다.</p>
          <Link to="/inquiry" className="text-yellow-400 hover:underline text-sm">첫 문의하기</Link>
        </div>
      ) : (
        <div className="space-y-3">
          {inquiries.map(inq => (
            <div key={inq.id} className="border border-gray-700 rounded-xl overflow-hidden">
              <button onClick={() => setSelected(selected === inq.id ? null : inq.id)}
                className="w-full flex items-center justify-between px-5 py-4 bg-gray-900 hover:bg-gray-800 transition-colors text-left gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className={`text-xs border px-2 py-0.5 rounded shrink-0 ${statusColor[inq.status]}`}>
                    {statusLabel[inq.status]}
                  </span>
                  <span className="text-gray-200 truncate">{inq.title}</span>
                </div>
                <span className="text-gray-500 text-sm shrink-0">{inq.created_at?.slice(0, 10)}</span>
              </button>
              {selected === inq.id && (
                <div className="border-t border-gray-700">
                  <div className="px-5 py-4 bg-gray-900/50">
                    <p className="text-sm text-gray-400 mb-1 font-medium">문의 내용</p>
                    <p className="text-gray-300 text-sm whitespace-pre-line">{inq.content}</p>
                  </div>
                  {inq.answer ? (
                    <div className="px-5 py-4 bg-yellow-400/5 border-t border-yellow-400/20">
                      <p className="text-sm text-yellow-400 mb-1 font-medium">답변</p>
                      <p className="text-gray-300 text-sm whitespace-pre-line">{inq.answer}</p>
                    </div>
                  ) : (
                    <div className="px-5 py-4 bg-gray-800/50 border-t border-gray-700">
                      <p className="text-gray-500 text-sm">답변 준비 중입니다.</p>
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
