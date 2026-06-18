export default function LocationPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">오시는 길</h2>
      <div className="w-full h-64 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center mb-8">
        <p className="text-gray-500 text-sm">지도 영역 (Kakao Map 연동 예정)</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h3 className="text-white font-bold mb-5">본사</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <span className="text-yellow-400 shrink-0 w-12">주소</span>
              <span className="text-gray-400">서울특별시 강남구 테헤란로 123 엔터월드빌딩 10F</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-400 shrink-0 w-12">전화</span>
              <span className="text-gray-400">02-0000-0000</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-400 shrink-0 w-12">팩스</span>
              <span className="text-gray-400">02-0000-0001</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-400 shrink-0 w-12">이메일</span>
              <span className="text-gray-400">info@enterworld.co.kr</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-400 shrink-0 w-12">업무시간</span>
              <span className="text-gray-400">평일 09:00 ~ 18:00</span>
            </li>
          </ul>
        </div>
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
          <h3 className="text-white font-bold mb-5">찾아오시는 방법</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <span className="text-yellow-400 block mb-1">지하철</span>
              <span className="text-gray-400">2호선 강남역 3번 출구 도보 5분</span>
            </li>
            <li>
              <span className="text-yellow-400 block mb-1">버스</span>
              <span className="text-gray-400">강남역 정류장 하차 — 146, 360, 740번</span>
            </li>
            <li>
              <span className="text-yellow-400 block mb-1">주차</span>
              <span className="text-gray-400">건물 지하 2~4층 (2시간 무료, 이후 10분당 500원)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
