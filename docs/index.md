# 회사소개 홈페이지 — 문서

## 개요

React 기반의 기업형 홈페이지. 회사소개, 제품소개, 온라인문의, 커뮤니티 게시판, 회원관리, 관리자 페이지를 제공한다.

---

## 기술스택

| 분류 | 기술 |
|------|------|
| UI | React 19, Tailwind CSS |
| 라우팅 | React Router v7 |
| 폼 | React Hook Form, Zod |
| 백엔드 | Supabase (Auth, Database, Storage) |
| 빌드 | Vite |

---

## 아키텍처

```
Browser
  └── React (Vite)
        ├── React Router — 페이지 라우팅
        ├── AuthContext  — 전역 세션 상태
        └── Supabase JS  — API 호출
              └── Supabase Cloud
                    ├── Auth (email/password)
                    ├── PostgreSQL
                    │     ├── profiles
                    │     ├── products
                    │     ├── inquiries
                    │     └── posts
                    └── Storage
                          ├── products/
                          ├── company/
                          └── editor/
```

---

## 페이지 및 라우트

| 라우트 | 설명 | 권한 |
|--------|------|------|
| `/` | 메인 | 누구나 |
| `/about` | 회사소개 | 누구나 |
| `/about/ceo` | CEO 인사말 | 누구나 |
| `/about/vision` | 비전 | 누구나 |
| `/about/history` | 연혁 | 누구나 |
| `/about/location` | 오시는 길 | 누구나 |
| `/products` | 제품목록 | 누구나 |
| `/products/:id` | 제품상세 | 누구나 |
| `/community` | 커뮤니티 목록 | 누구나 |
| `/community/:id` | 게시글 상세 | 누구나 |
| `/community/new` | 게시글 작성 | 로그인 필요 |
| `/inquiry` | 문의 작성 | 로그인 필요 |
| `/inquiry/my` | 문의내역 | 로그인 필요 |
| `/login` | 로그인 | 비로그인 |
| `/register` | 회원가입 | 비로그인 |
| `/mypage` | 마이페이지 | 로그인 필요 |
| `/admin/*` | 관리자 | admin 전용 |

---

## 데이터 모델

> 실제 컬럼은 Supabase MCP로 확인 후 사용한다.

### `profiles`

| 컬럼 | 타입 | 비고 |
|------|------|------|
| `id` | uuid | FK → `auth.users` |
| `email` | text | |
| `role` | text | `user` \| `admin` |
| `created_at` | timestamptz | |

### `products`

| 컬럼 | 타입 | 비고 |
|------|------|------|
| `id` | uuid | PK |
| `name` | text | |
| `description` | text | |
| `image_url` | text | Storage 경로 |
| `category` | text | |
| `created_at` | timestamptz | |

### `posts`

| 컬럼 | 타입 | 비고 |
|------|------|------|
| `id` | uuid | PK |
| `title` | text | |
| `content` | text | |
| `author_id` | uuid | FK → `profiles` |
| `is_notice` | boolean | 공지 여부 |
| `views` | integer | |
| `created_at` | timestamptz | |
| `updated_at` | timestamptz | |

### `inquiries`

| 컬럼 | 타입 | 비고 |
|------|------|------|
| `id` | uuid | PK |
| `title` | text | |
| `content` | text | |
| `author_id` | uuid | FK → `profiles` |
| `status` | text | `pending` \| `answered` |
| `answer` | text | 관리자 답변 |
| `created_at` | timestamptz | |

---

## 권한 정책 (RLS)

| 테이블 | 작업 | 허용 대상 |
|--------|------|----------|
| products | SELECT | 누구나 |
| products | INSERT/UPDATE/DELETE | admin |
| posts | SELECT | 누구나 |
| posts | INSERT | 로그인 사용자 |
| posts | UPDATE/DELETE | 작성자 또는 admin |
| inquiries | SELECT | 작성자 또는 admin |
| inquiries | INSERT | 로그인 사용자 |
| inquiries | UPDATE | admin (답변) |

---

## Storage 버킷

| 버킷 | 용도 |
|------|------|
| `products/` | 제품 이미지 |
| `company/` | 회사소개 이미지 |
| `editor/` | 게시판 첨부파일 |

---

## 환경 변수

| 변수 | 설명 |
|------|------|
| `VITE_SUPABASE_URL` | Supabase 프로젝트 URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon 키 |

`.env.local` 파일에 설정하며 커밋하지 않는다.

---

## 빠른 시작

```bash
# 1. 패키지 설치
npm install

# 2. 환경 변수 설정
cp .env.example .env.local
# .env.local에 Supabase URL과 anon key 입력

# 3. 개발 서버 실행
npm run dev
```

---

## 개발 단계

| Phase | 내용 |
|-------|------|
| 1 | Vite, Tailwind, Router, Layout |
| 2 | Supabase 연결, Auth |
| 3 | 회사소개, 제품소개 |
| 4 | 게시판 CRUD |
| 5 | 온라인문의 CRUD |
| 6 | 관리자 페이지 |
