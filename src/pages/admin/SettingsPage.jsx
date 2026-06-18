import { useForm } from 'react-hook-form'

export default function SettingsPage() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm({
    defaultValues: {
      siteName: '엔터월드',
      siteDesc: '엔터테이먼트의 새로운 세계를 만들어갑니다.',
      contactEmail: 'info@enterworld.co.kr',
      contactTel: '02-0000-0000',
      address: '서울특별시 강남구 테헤란로 123 엔터월드빌딩 10F',
    }
  })

  const onSubmit = async (data) => {
    // TODO: supabase.from('site_settings').upsert(data)
    console.log('settings:', data)
    alert('설정이 저장되었습니다.')
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-6">사이트설정</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 space-y-4">
          <h3 className="text-white font-medium mb-2">기본 정보</h3>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">사이트명</label>
            <input {...register('siteName')}
              className="w-full px-4 py-2.5 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-yellow-400" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">사이트 설명</label>
            <input {...register('siteDesc')}
              className="w-full px-4 py-2.5 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-yellow-400" />
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 space-y-4">
          <h3 className="text-white font-medium mb-2">연락처</h3>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">대표 이메일</label>
            <input {...register('contactEmail')} type="email"
              className="w-full px-4 py-2.5 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-yellow-400" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">대표 전화</label>
            <input {...register('contactTel')}
              className="w-full px-4 py-2.5 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-yellow-400" />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1.5">주소</label>
            <input {...register('address')}
              className="w-full px-4 py-2.5 bg-gray-900 border border-gray-600 rounded text-white focus:outline-none focus:border-yellow-400" />
          </div>
        </div>

        <button type="submit" disabled={isSubmitting}
          className="bg-yellow-400 text-gray-900 px-8 py-3 rounded font-bold hover:bg-yellow-300 transition-colors text-sm disabled:opacity-50">
          {isSubmitting ? '저장 중...' : '설정 저장'}
        </button>
      </form>
    </div>
  )
}
