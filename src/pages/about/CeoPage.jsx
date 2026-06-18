export default function CeoPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
        <div className="w-44 h-52 rounded-xl bg-gray-800 border border-gray-700 overflow-hidden shrink-0">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
            alt="CEO"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">김대표</h2>
          <p className="text-yellow-400 text-sm mb-4">대표이사 / CEO</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            2010년 엔터월드 창립 이후 K-엔터테이먼트 글로벌화를 이끌어왔습니다.
          </p>
        </div>
      </div>
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-8">
        <p className="text-gray-200 leading-loose text-lg mb-6 border-l-4 border-yellow-400 pl-6 italic">
          "엔터테이먼트는 단순한 즐거움을 넘어 사람과 사람을 연결하는 힘을 가지고 있습니다."
        </p>
        <div className="text-gray-400 leading-relaxed space-y-4 text-sm">
          <p>안녕하십니까, 엔터월드 대표이사 김대표입니다.</p>
          <p>
            엔터월드는 2010년 창립 이후 대한민국 엔터테이먼트 산업의 발전과 함께 성장해왔습니다.
            저희는 아티스트의 꿈을 현실로 만들고, 팬들에게는 잊을 수 없는 경험을 선사하기 위해
            끊임없이 노력하고 있습니다.
          </p>
          <p>
            앞으로도 엔터월드는 글로벌 무대를 향한 도전을 멈추지 않겠습니다.
            여러분의 지속적인 관심과 응원을 부탁드립니다.
          </p>
          <p className="text-right text-white font-medium">엔터월드 대표이사 김대표</p>
        </div>
      </div>
    </div>
  )
}
