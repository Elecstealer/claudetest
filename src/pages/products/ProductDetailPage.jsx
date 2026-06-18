import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProduct, getProducts } from '../../services/product.service'

export default function ProductDetailPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProduct(id)
      .then(async data => {
        setProduct(data)
        const all = await getProducts()
        setRelated(all.filter(p => p.category === data.category && p.id !== data.id).slice(0, 3))
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <div className="max-w-6xl mx-auto px-4 py-16 text-center text-gray-400">불러오는 중...</div>

  if (!product) return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <p className="text-gray-400">서비스를 찾을 수 없습니다.</p>
      <Link to="/products" className="text-yellow-400 text-sm hover:underline mt-4 inline-block">목록으로</Link>
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-yellow-400">홈</Link>
        <span className="mx-2">/</span>
        <Link to="/products" className="hover:text-yellow-400">서비스</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-300">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="rounded-xl overflow-hidden border border-gray-800 aspect-video">
          <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-yellow-400 text-xs tracking-widest uppercase mb-3">{product.category}</span>
          <h1 className="text-3xl font-bold text-white mb-6">{product.name}</h1>
          <p className="text-gray-400 leading-relaxed mb-8">{product.description}</p>
          <Link to="/inquiry" className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded font-bold hover:bg-yellow-300 transition-colors text-center">
            서비스 문의하기
          </Link>
        </div>
      </div>

      {related.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-white mb-6">관련 서비스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/products/${p.id}`}
                className="group block rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all">
                <div className="aspect-video overflow-hidden">
                  <img src={p.image_url} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 bg-gray-900">
                  <h3 className="text-white font-bold text-sm">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
