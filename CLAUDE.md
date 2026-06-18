박시은
bagsieun6685
오프라인 표시

한성용 — 2026-05-28 오전 10:51
화면정의/설계서
기능설계서
정책정의서

페이퍼프로토타입
피그마 프로토타입
화면설계서
한성용 — 2026-06-02 오후 1:50
https://app.notion.com/p/36e1edfffa5280fd969ed9ee65157897 
화면설계서자료를 추가하였습니다.

화면명, 화면경로, 화면id, 와이어프레임, description 기본 작성하여주시면 되요
한성용 — 2026-06-08 오전 11:03
# 작업 히스토리

> 작성일: 2026-06-08

---

history.md
3KB
한성용 — 2026-06-08 오전 11:24
{
  "meta": {
    "title": "mycompany",
  },
  "tokens": {
    "colors": {

visang_design_system.json
28KB
한성용 — 2026-06-10 오전 9:08
01sample claude 작성내용입니다.
# 작업 히스토리

---

## 2026-06-08

history.md
7KB
한성용 — 2026-06-10 오전 9:32
https://github.com/hanyong5/26_mycom
GitHub
GitHub - hanyong5/26_mycom
Contribute to hanyong5/26_mycom development by creating an account on GitHub.
Contribute to hanyong5/26_mycom development by creating an account on GitHub.
한성용 — 2026-06-15 오전 11:44
# AGENTS.md

## 1. 프로젝트 개요

React로 회사소개 MVP 사이트를 제작한다.
이번 MVP 단계에서는 Supabase DB를 사용하지 않고, 화면 구성과 기본 회원 흐름만 먼저 구현한다.

AGENTS.md
5KB
한성용 — 2026-06-15 오후 1:18
# Prompt History

> Date: 2026-06-15
> Project: agents-md-project-setup
> Level: Starter

prompt-history.md
5KB
한성용 — 어제 오전 11:39
# CLAUDE.md

## 프로젝트

회사소개 홈페이지 개발

CLAUDE.md
5KB
﻿
# CLAUDE.md

## 프로젝트

회사소개 홈페이지 개발

### 기술스택

* React 19
* React Router
* Tailwind CSS
* Supabase
* Supabase Auth
* Supabase Database
* Supabase Storage
* React Hook Form
* Zod

---

# 프로젝트 목표

기업형 홈페이지 구축

### 제공 기능

* 회사소개
* 제품소개
* 온라인문의
* 커뮤니티 게시판
* 회원관리
* 관리자 페이지

---

# MCP 우선 사용 원칙

모든 Supabase 관련 작업은 Supabase MCP를 우선 사용한다.

코드 작성 전에 반드시 다음을 확인한다.

1. 현재 프로젝트 연결 상태
2. 데이터베이스 스키마
3. 컬럼 구조
4. Foreign Key
5. RLS 정책
6. Storage Bucket
7. Auth 설정

확인 없이 테이블이나 컬럼을 추측하여 생성하지 않는다.

---

# MVP 범위

## 포함

* 회원가입
* 로그인
* 로그아웃
* 회사소개
* 제품소개
* 온라인문의
* 게시판
* 관리자 페이지

## 제외

* 댓글
* 좋아요
* 채팅
* 알림
* 결제

---

# 권한

## user

* 제품 조회
* 게시글 조회
* 게시글 작성
* 게시글 수정(본인)
* 게시글 삭제(본인)
* 문의 작성
* 문의 조회(본인)

## admin

* 회원관리
* 제품관리
* 게시판관리
* 문의관리
* 사이트관리

---

# 사이트맵

```txt
/

├─ 회사소개
│  ├─ 회사소개
│  ├─ CEO 인사말
│  ├─ 비전
│  ├─ 연혁
│  └─ 오시는 길
│
├─ 제품소개
│  ├─ 제품목록
│  └─ 제품상세
│
├─ 커뮤니티
│  ├─ 목록
│  ├─ 상세
│  └─ 작성
│
├─ 온라인문의
│  ├─ 문의작성
│  └─ 문의조회
│
├─ 로그인
├─ 회원가입
├─ 마이페이지
│
└─ 관리자
   ├─ 회원관리
   ├─ 제품관리
   ├─ 문의관리
   ├─ 게시판관리
   └─ 사이트설정
```

---

# 데이터베이스

MCP로 실제 DB 확인 후 작업한다.

예상 테이블

```txt
profiles
products
inquiries
posts
```

---

# ERD

```txt
profiles
 │
 ├── posts
 │
 └── inquiries

products
```

---

# Storage

```txt
products/
company/
editor/
```

### products

제품 이미지

### company

회사소개 이미지

### editor

게시판 첨부파일

---

# 화면 구성

## 공통

* Header
* Footer
* Navigation
* Breadcrumb

---

## 메인

* Hero Banner
* 회사소개 요약
* 대표 제품
* 문의하기 CTA
* 최신 게시글

---

## 회사소개

* 회사소개
* CEO 인사말
* 비전
* 연혁
* 조직도
* 오시는 길

---

## 제품소개

### 목록

* 카드형 UI
* 검색
* 카테고리

### 상세

* 이미지
* 설명
* 문의하기 버튼

---

## 온라인문의

### 사용자

* 문의 등록
* 문의 내역 조회

### 관리자

* 답변 작성
* 상태 변경

---

## 게시판

### 목록

* 검색
* 페이징
* 공지 상단고정

### 상세

* 조회수 증가

### 작성

* 에디터
* 파일첨부

---

# 개발 순서

## Phase 1

* Vite 생성
* Tailwind 설치
* Router 설정
* Layout 구성

## Phase 2

* Supabase 연결
* Auth 구현

## Phase 3

* 회사소개
* 제품소개

## Phase 4

* 게시판 CRUD

## Phase 5

* 온라인문의 CRUD

## Phase 6

* 관리자 페이지

---

# 개발 규칙

* MCP 우선 사용
* 실제 DB 확인 후 개발
* Service Layer 분리
* 컴포넌트 재사용
* Protected Route 적용
* Admin Route 적용
* React Hook Form 사용
* Zod Validation 사용
* Tailwind Utility First 원칙 사용

---

# Claude 행동 규칙

새 기능 개발 요청 시

1. MCP로 현재 DB 확인
2. 영향받는 테이블 확인
3. 필요한 SQL 제안
4. React 코드 작성
5. RLS 검토
6. 테스트 시나리오 작성

컬럼명과 테이블명은 MCP 결과를 기준으로 사용한다.