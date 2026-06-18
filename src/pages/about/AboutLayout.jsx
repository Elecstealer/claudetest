import { NavLink, Outlet } from 'react-router-dom'

const menu = [
  { to: '/about', label: '회사소개', end: true },
  { to: '/about/ceo', label: 'CEO 인사말' },
  { to: '/about/vision', label: '비전' },
  { to: '/about/history', label: '연혁' },
  { to: '/about/location', label: '오시는 길' },
]

export default function AboutLayout() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="text-yellow-400 text-xs tracking-widest uppercase mb-2">About Us</p>
        <h1 className="text-3xl font-bold text-white">회사소개</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="md:w-44 shrink-0">
          <nav className="flex md:flex-col gap-1">
            {menu.map(m => (
              <NavLink
                key={m.to}
                to={m.to}
                end={m.end}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded text-sm transition-colors whitespace-nowrap ${isActive ? 'bg-yellow-400 text-gray-900 font-bold' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`
                }
              >
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
