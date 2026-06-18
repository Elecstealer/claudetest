import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../services/product.service'

const categories = ['전체', '공연', '매니지먼트', '콘텐츠', '음반', '마케팅']

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('전체')
  const [search, setSearch] = useState('')

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const filtered = products.filter(p => {
    const matchCat = category === '전체' || p.category === category
    const matchSearch = p.name.includes(search) || p.description?.includes(search)
    return matchCat && matchSearch
  })

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="text-yellow-400 text-xs tracking-widest uppercase mb-2">Services</p>
        <h1 className="text-3xl font-bold text-white">서비스 소개</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex gap-2 flex-wrap">
          {categories.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              className={`px-4 py-1.5 rounded text-sm transition-colors ${category === c ? 'bg-yellow-400 text-gray-900 font-bold' : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'}`}>
              {c}
            </button>
          ))}
        </div>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="서비스 검색..."
          className="md:ml-auto px-4 py-1.5 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
        />
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-400">불러오는 중...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map(p => (
              <Link key={p.id} to={`/products/${p.id}`}
                className="group block rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={p.image_url} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 bg-gray-900">
                  <span className="text-xs text-yellow-400 mb-2 block">{p.category}</span>
                  <h3 className="text-white font-bold mb-2">{p.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-gray-500">검색 결과가 없습니다.</div>
          )}
        </>
      )}
    </div>
  )
}
