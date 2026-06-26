# 프로젝트 개요

GitHub Pages로 배포되는 정적 웹페이지. 빌드 도구 없이 HTML/CSS/JS로만 구성.

## 페이지 구성

### index.html — 시작 화면
- Guest 버튼: 클릭 시 `links.html`로 이동
- Admin 버튼: 추후 연결 예정, 현재 동작 없음

### links.html — 링크 목록 화면
- `js/content.js`의 데이터를 `js/render.js`가 읽어 DOM을 동적으로 렌더링
- 링크 개수는 `links` 배열 크기에 따라 자동 조정

## 프로젝트 구조

```
.
├── index.html
├── links.html
├── css/
│   └── style.css       # 전체 공용 스타일 (다크 테마)
├── js/
│   ├── content.js      # 콘텐츠 데이터 (제목·소개문·링크 목록)
│   └── render.js       # links.html DOM 동적 렌더링
└── images/             # 링크 썸네일 이미지 업로드 폴더
```

## 콘텐츠 수정

`js/content.js`만 수정하면 된다. 다른 파일은 건드릴 필요 없음.

```js
const SITE_CONTENT = {
  title: "페이지 제목",
  intro: "소개문",
  links: [
    {
      image: "images/photo1.jpg",  // 또는 외부 이미지 전체 URL
      desc: "링크 설명",
      url: "https://..."
    }
    // 항목 추가/삭제 자유
  ]
};
```

- `image`를 비워두면(`""`) 기본 placeholder 표시
- 같은 저장소 이미지: `"images/파일명.jpg"` (상대경로)
- 외부 이미지: 전체 URL (`https://raw.githubusercontent.com/...` 등)

## 스타일

- 다크 테마: 배경 `#0f172a`, 카드 `#1e293b`, 텍스트 `#e5e7eb`
- 모든 색상은 `css/style.css` 한 파일에서 관리

## 배포 (GitHub Pages)

- 저장소 이름이 `사용자명.github.io`이면 main 브랜치 푸시만으로 자동 배포
- 일반 저장소 이름이면 최초 1회 Settings → Pages → 브랜치/루트 지정 필요
- 이후는 커밋·푸시만 하면 자동 반영

## 로컬 테스트

```bash
python3 -m http.server 8000
# http://localhost:8000 접속
```
