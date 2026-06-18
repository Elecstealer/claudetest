const stats = [
  { label: '설립연도', value: '2010' },
  { label: '임직원', value: '350+' },
  { label: '소속 아티스트', value: '120+' },
  { label: '공연 실적', value: '2,000+' },
]

export default function AboutPage() {
  return (
    <div>
      <div className="rounded-xl overflow-hidden aspect-video mb-8 border border-gray-800">
        <img
          src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=80"
          alt="엔터월드"
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-bold text-white mb-4">엔터테이먼트의 새로운 기준, 엔터월드</h2>
      <p className="text-gray-400 leading-relaxed mb-4">
        엔터월드는 2010년 설립 이래 대한민국 엔터테이먼트 산업을 선도해온 종합 엔터테이먼트 기업입니다.
        콘서트 기획, 아티스트 매니지먼트, 미디어 콘텐츠 제작 등 다양한 분야에서 최고의 서비스를 제공합니다.
      </p>
      <p className="text-gray-400 leading-relaxed mb-10">
        글로벌 시장을 향한 도전을 멈추지 않으며, K-엔터테이먼트의 위상을 높이기 위해 오늘도 최선을 다하고 있습니다.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map(s => (
          <div key={s.label} className="bg-gray-800 rounded-xl border border-gray-700 p-6 text-center">
            <div className="text-3xl font-black text-yellow-400 mb-1">{s.value}</div>
            <div className="text-sm text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
