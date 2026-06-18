const history = [
  { year: '2026', items: ['글로벌 투어 기획 사업 확장 발표', '아시아 9개국 동시 투어 준비'] },
  { year: '2024', items: ['연매출 1,000억 돌파', '일본·미국 현지 법인 설립'] },
  { year: '2022', items: ['소속 아티스트 100명 달성', '자체 음원 스트리밍 플랫폼 런칭'] },
  { year: '2020', items: ['온라인 공연 플랫폼 구축', '팬데믹 대응 비대면 서비스 출시'] },
  { year: '2018', items: ['엔터테이먼트 아카데미 설립', '중국·동남아 시장 진출'] },
  { year: '2015', items: ['코스닥 상장', '임직원 200명 돌파'] },
  { year: '2012', items: ['첫 단독 콘서트 1만 명 돌파', '음반 레이블 사업부 신설'] },
  { year: '2010', items: ['엔터월드 법인 설립', '1호 아티스트 데뷔'] },
]

export default function HistoryPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-10">연혁</h2>
      <div className="relative">
        <div className="absolute left-16 top-0 bottom-0 w-px bg-gray-700" />
        <div className="space-y-8">
          {history.map(h => (
            <div key={h.year} className="flex gap-6">
              <div className="w-12 text-right shrink-0 pt-0.5">
                <span className="text-yellow-400 font-bold text-sm">{h.year}</span>
              </div>
              <div className="relative pl-8">
                <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-yellow-400 border-2 border-gray-950" />
                <ul className="space-y-1.5">
                  {h.items.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
