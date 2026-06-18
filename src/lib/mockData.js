export const mockProducts = [
  { id: 1, name: '콘서트 기획', category: '공연', description: '수천 명을 아우르는 대형 콘서트 기획부터 소규모 공연까지, 최고의 무대를 만듭니다.', image_url: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80' },
  { id: 2, name: '아티스트 매니지먼트', category: '매니지먼트', description: '원석 같은 아티스트를 발굴하고 체계적인 트레이닝과 관리로 스타로 성장시킵니다.', image_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80' },
  { id: 3, name: '미디어 콘텐츠', category: '콘텐츠', description: '뮤직비디오, 다큐멘터리, 숏폼 콘텐츠까지 다양한 미디어 콘텐츠를 기획·제작합니다.', image_url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80' },
  { id: 4, name: '음반 제작', category: '음반', description: '기획 앨범 설계부터 녹음, 믹싱, 마스터링까지 전문 프로듀싱 서비스를 제공합니다.', image_url: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&q=80' },
  { id: 5, name: '팬미팅 기획', category: '공연', description: '아티스트와 팬이 가장 가까이 만나는 특별한 시간, 팬미팅을 기획합니다.', image_url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&q=80' },
  { id: 6, name: '브랜드 콜라보', category: '마케팅', description: '아티스트 IP를 활용한 브랜드 협업으로 새로운 마케팅 가치를 창출합니다.', image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
]

export const mockPosts = [
  { id: 1, title: '엔터월드, 2026 글로벌 투어 기획 발표', author_email: 'admin@enterworld.co.kr', created_at: '2026-06-17', views: 342, is_notice: true, content: '엔터월드가 2026년 하반기 글로벌 투어를 기획한다고 공식 발표했습니다.\n\n총 12개국 15개 도시를 순회하는 이번 투어는 엔터월드 역사상 최대 규모로, 아시아·유럽·북미를 아우를 예정입니다.\n\n자세한 일정은 추후 공지될 예정입니다.' },
  { id: 2, title: '신인 아티스트 오디션 모집 공고', author_email: 'admin@enterworld.co.kr', created_at: '2026-06-15', views: 218, is_notice: true, content: '엔터월드에서 새로운 스타를 발굴합니다.\n\n■ 지원 자격: 만 15세 ~ 25세\n■ 모집 분야: 보컬, 댄스, 랩, 연기\n■ 접수 기간: 2026.07.01 ~ 2026.07.31\n■ 오디션 일정: 2026.08.15' },
  { id: 3, title: '6월 공연 일정 안내', author_email: 'user@example.com', created_at: '2026-06-14', views: 156, is_notice: false, content: '6월 공연 일정을 안내드립니다.\n\n6월 20일 - 올림픽공원 케이돔\n6월 27일 - 부산 BEXCO' },
  { id: 4, title: '엔터월드 콘서트 후기', author_email: 'fan@example.com', created_at: '2026-06-13', views: 89, is_notice: false, content: '지난 주말 콘서트 정말 감동적이었습니다. 특히 앙코르 무대가 최고였어요. 다음 공연도 꼭 가고 싶습니다!' },
  { id: 5, title: '팬사인회 일정 공개', author_email: 'admin@enterworld.co.kr', created_at: '2026-06-12', views: 201, is_notice: false, content: '팬사인회 일정을 공개합니다.\n\n■ 일시: 2026.07.10 (토) 14:00\n■ 장소: 강남 엔터월드 아트홀\n■ 응모 방법: 홈페이지 신청' },
  { id: 6, title: '여름 음반 발매 예정 안내', author_email: 'admin@enterworld.co.kr', created_at: '2026-06-10', views: 178, is_notice: false, content: '소속 아티스트의 여름 시즌 음반 발매가 예정되어 있습니다. 더 많은 정보는 곧 공개됩니다.' },
]

export const mockInquiries = [
  { id: 1, title: '공연 티켓 환불 문의', content: '지난주 구매한 티켓을 환불하고 싶습니다.', status: 'answered', created_at: '2026-06-15', answer: '안녕하세요. 공연 7일 전까지 환불이 가능합니다. 고객센터(02-0000-0000)로 연락 주시면 도움드리겠습니다.' },
  { id: 2, title: '아티스트 섭외 문의', content: '행사에 아티스트를 섭외하고 싶습니다.', status: 'pending', created_at: '2026-06-16', answer: null },
]

export const mockMembers = [
  { id: 1, email: 'admin@enterworld.co.kr', role: 'admin', created_at: '2026-01-01' },
  { id: 2, email: 'user1@example.com', role: 'user', created_at: '2026-03-15' },
  { id: 3, email: 'user2@example.com', role: 'user', created_at: '2026-05-22' },
  { id: 4, email: 'fan@example.com', role: 'user', created_at: '2026-06-01' },
]
