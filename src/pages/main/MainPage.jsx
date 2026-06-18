import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../services/product.service'
import { getPosts } from '../../services/post.service'

export default function MainPage() {
  const [services, setServices] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getProducts().then(data => setServices(data.slice(0, 3))).catch(console.error)
    getPosts().then(data => setPosts(data.slice(0, 3))).catch(console.error)
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <p className="text-yellow-400 text-xs tracking-[0.5em] uppercase mb-6">Entertainment &amp; Culture</p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none">ENTERWORLD</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl">엔터테이먼트의 새로운 세계를 경험하세요</p>
          <div className="flex gap-4">
            <Link to="/products" className="bg-yellow-400 text-gray-900 px-8 py-3 rounded font-bold hover:bg-yellow-300 transition-colors">서비스 보기</Link>
            <Link to="/inquiry" className="border border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-gray-900 transition-colors">문의하기</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gray-400 animate-pulse" />
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 text-xs tracking-widest uppercase mb-4">About Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">엔터테이먼트의<br />새로운 기준</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              엔터월드는 대한민국을 대표하는 종합 엔터테이먼트 기업입니다.
              콘서트 기획부터 아티스트 매니지먼트, 미디어 콘텐츠 제작까지 엔터테이먼트 전 분야를 아우릅니다.
            </p>
            <Link to="/about" className="inline-block border border-yellow-400 text-yellow-400 px-6 py-2 rounded hover:bg-yellow-400 hover:text-gray-900 transition-colors text-sm font-medium">회사소개 보기</Link>
          </div>
          <div className="relative rounded-xl overflow-hidden aspect-video border border-gray-800">
            <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80" alt="엔터월드" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-yellow-400 text-xs tracking-widest uppercase mb-4">Services</p>
            <h2 className="text-3xl font-bold text-white">주요 서비스</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(s => (
              <Link key={s.id} to={`/products/${s.id}`} className="group block rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img src={s.image_url} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 bg-gray-900">
                  <h3 className="text-white font-bold mb-2">{s.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{s.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="text-yellow-400 text-sm hover:underline">전체 서비스 보기 →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1920&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">함께 만들어가는 엔터테이먼트</h2>
          <p className="text-gray-300 mb-8 text-lg">비즈니스 문의 및 파트너십 제안을 기다립니다.</p>
          <Link to="/inquiry" className="bg-yellow-400 text-gray-900 px-10 py-3 rounded font-bold hover:bg-yellow-300 transition-colors text-lg">온라인 문의하기</Link>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">최신 소식</h2>
            <Link to="/community" className="text-yellow-400 text-sm hover:underline">더 보기 →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posts.map(post => (
              <Link key={post.id} to={`/community/${post.id}`} className="bg-gray-800 rounded-lg p-5 border border-gray-700 hover:border-gray-500 transition-colors block">
                {post.is_notice && <span className="text-xs text-yellow-400 mb-2 block">공지</span>}
                <h3 className="text-white text-sm font-medium mb-3 leading-relaxed line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 text-xs">{post.created_at?.slice(0, 10)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
