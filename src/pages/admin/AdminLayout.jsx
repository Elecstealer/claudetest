import { NavLink, Outlet, Link } from 'react-router-dom'

const menu = [
  { to: '/admin/members', label: '회원관리' },
  { to: '/admin/products', label: '서비스관리' },
  { to: '/admin/inquiries', label: '문의관리' },
  { to: '/admin/board', label: '게시판관리' },
  { to: '/admin/settings', label: '사이트설정' },
]

export default function AdminLayout() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-yellow-400 text-xs tracking-widest uppercase mb-1">Admin</p>
          <h1 className="text-2xl font-bold text-white">관리자</h1>
        </div>
        <Link to="/" className="text-sm text-gray-400 hover:text-white border border-gray-700 px-4 py-2 rounded transition-colors">
          사이트로 이동
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <aside className="md:w-44 shrink-0">
          <nav className="flex md:flex-col gap-1">
            {menu.map(m => (
              <NavLink key={m.to} to={m.to}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded text-sm transition-colors whitespace-nowrap ${isActive ? 'bg-yellow-400 text-gray-900 font-bold' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`
                }>
                {m.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <div className="flex-1 min-w-0">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
