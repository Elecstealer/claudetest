import { useState, useEffect } from 'react'
import { getProducts, deleteProduct } from '../../services/product.service'

export default function AdminProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const remove = async (id) => {
    if (!confirm('삭제하시겠습니까?')) return
    await deleteProduct(id)
    setProducts(prev => prev.filter(p => p.id !== id))
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">서비스관리</h2>
        <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded font-bold text-sm hover:bg-yellow-300 transition-colors">
          + 서비스 추가
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">불러오는 중...</div>
      ) : (
        <div className="space-y-3">
          {products.map(p => (
            <div key={p.id} className="flex items-center gap-4 bg-gray-800 border border-gray-700 rounded-xl p-4 hover:border-gray-600 transition-colors">
              <img src={p.image_url} alt={p.name} className="w-16 h-10 object-cover rounded shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm">{p.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{p.category}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <button className="text-xs text-gray-400 hover:text-white border border-gray-600 px-3 py-1.5 rounded transition-colors">수정</button>
                <button onClick={() => remove(p.id)} className="text-xs text-red-400 hover:text-red-300 border border-red-800 px-3 py-1.5 rounded transition-colors">삭제</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
