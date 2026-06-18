import { BrowserRouter, Routes, Route, Link, NavLink, Outlet, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'

import AboutLayout from './pages/about/AboutLayout'
import AboutPage from './pages/about/AboutPage'
import CeoPage from './pages/about/CeoPage'
import VisionPage from './pages/about/VisionPage'
import HistoryPage from './pages/about/HistoryPage'
import LocationPage from './pages/about/LocationPage'

import ProductsPage from './pages/products/ProductsPage'
import ProductDetailPage from './pages/products/ProductDetailPage'

import CommunityPage from './pages/community/CommunityPage'
import PostDetailPage from './pages/community/PostDetailPage'
import PostCreatePage from './pages/community/PostCreatePage'

import InquiryPage from './pages/inquiry/InquiryPage'
import InquiryMyPage from './pages/inquiry/InquiryMyPage'

import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import MyPage from './pages/auth/MyPage'

import AdminLayout from './pages/admin/AdminLayout'
import MembersPage from './pages/admin/MembersPage'
import AdminProductsPage from './pages/admin/AdminProductsPage'
import InquiriesAdminPage from './pages/admin/InquiriesAdminPage'
import BoardAdminPage from './pages/admin/BoardAdminPage'
import SettingsPage from './pages/admin/SettingsPage'

import MainPage from './pages/main/MainPage'

function Header() {
  const { user, signOut } = useAuth()
  return (
    <header className="bg-gray-900 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-black text-yellow-400 tracking-widest">ENTERWORLD</Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-400 font-medium' : 'text-gray-400 hover:text-white transition-colors'}>회사소개</NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'text-yellow-400 font-medium' : 'text-gray-400 hover:text-white transition-colors'}>서비스</NavLink>
            <NavLink to="/community" className={({ isActive }) => isActive ? 'text-yellow-400 font-medium' : 'text-gray-400 hover:text-white transition-colors'}>커뮤니티</NavLink>
            <NavLink to="/inquiry" className={({ isActive }) => isActive ? 'text-yellow-400 font-medium' : 'text-gray-400 hover:text-white transition-colors'}>온라인문의</NavLink>
          </nav>
          <div className="flex items-center gap-3 text-sm">
            {user ? (
              <>
                <Link to="/mypage" className="text-gray-400 hover:text-white transition-colors">마이페이지</Link>
                <button onClick={signOut} className="border border-gray-700 text-gray-400 px-3 py-1.5 rounded hover:text-white hover:border-gray-500 transition-colors text-sm">로그아웃</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">로그인</Link>
                <Link to="/register" className="bg-yellow-400 text-gray-900 px-4 py-1.5 rounded font-bold hover:bg-yellow-300 transition-colors">회원가입</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-black text-gray-500 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-yellow-400 font-black text-lg tracking-widest mb-3">ENTERWORLD</h3>
            <p className="text-sm leading-relaxed">엔터테이먼트의 새로운 세계를 만들어갑니다.</p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">회사소개</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">서비스</Link></li>
              <li><Link to="/community" className="hover:text-white transition-colors">커뮤니티</Link></li>
              <li><Link to="/inquiry" className="hover:text-white transition-colors">온라인문의</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-3">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li>Tel: 02-0000-0000</li>
              <li>Email: info@enterworld.co.kr</li>
              <li>서울특별시 강남구</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs">&copy; 2026 EnterWorld Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* 메인 */}
            <Route index element={<MainPage />} />

            {/* 회사소개 */}
            <Route path="about" element={<AboutLayout />}>
              <Route index element={<AboutPage />} />
              <Route path="ceo" element={<CeoPage />} />
              <Route path="vision" element={<VisionPage />} />
              <Route path="history" element={<HistoryPage />} />
              <Route path="location" element={<LocationPage />} />
            </Route>

            {/* 서비스 */}
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductDetailPage />} />

            {/* 커뮤니티 */}
            <Route path="community" element={<CommunityPage />} />
            <Route path="community/:id" element={<PostDetailPage />} />
            <Route path="community/new" element={<ProtectedRoute><PostCreatePage /></ProtectedRoute>} />

            {/* 온라인문의 */}
            <Route path="inquiry" element={<ProtectedRoute><InquiryPage /></ProtectedRoute>} />
            <Route path="inquiry/my" element={<ProtectedRoute><InquiryMyPage /></ProtectedRoute>} />

            {/* 회원 */}
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="mypage" element={<ProtectedRoute><MyPage /></ProtectedRoute>} />

            {/* 관리자 */}
            <Route path="admin" element={<AdminRoute><AdminLayout /></AdminRoute>}>
              <Route index element={<Navigate to="members" replace />} />
              <Route path="members" element={<MembersPage />} />
              <Route path="products" element={<AdminProductsPage />} />
              <Route path="inquiries" element={<InquiriesAdminPage />} />
              <Route path="board" element={<BoardAdminPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
