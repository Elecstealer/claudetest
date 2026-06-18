const values = [
  { icon: '✦', title: '창의성', desc: '새로운 시각과 아이디어로 엔터테이먼트의 경계를 끊임없이 넓힙니다.' },
  { icon: '◈', title: '전문성', desc: '각 분야 최고의 전문가들이 최고의 결과를 만들어냅니다.' },
  { icon: '◆', title: '신뢰', desc: '아티스트와 팬, 파트너 모두가 믿고 함께할 수 있는 기업입니다.' },
  { icon: '◉', title: '글로벌', desc: 'K-엔터테이먼트를 세계 무대로 이끌어 글로벌 리더로 성장합니다.' },
]

export default function VisionPage() {
  return (
    <div>
      <div className="bg-gradient-to-br from-yellow-400/10 to-gray-800 rounded-xl border border-yellow-400/20 p-10 text-center mb-10">
        <p className="text-yellow-400 text-xs tracking-widest uppercase mb-4">Our Vision</p>
        <h2 className="text-3xl font-bold text-white mb-4">글로벌 엔터테이먼트 리더</h2>
        <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
          아시아를 넘어 전 세계가 주목하는 엔터테이먼트 기업으로 성장하여
          K-컬처의 세계화를 이끌어갑니다.
        </p>
      </div>
      <h3 className="text-lg font-bold text-white mb-5">핵심 가치</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {values.map(v => (
          <div key={v.title} className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-yellow-400/50 transition-colors">
            <div className="text-yellow-400 text-2xl mb-3">{v.icon}</div>
            <h4 className="text-white font-bold mb-2">{v.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
