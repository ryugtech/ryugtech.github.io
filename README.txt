PLECT GAMES — STATIC ONE-PAGE SITE

구성
- index.html      : 본문/카드/링크
- styles.css      : 전체 디자인, 반응형, 애니메이션
- script.js       : 스크롤 등장, 트레일러 모달, 가로 드래그, 링크 안내
- assets/         : 파비콘, 원본 헤더 참고 이미지

바로 실행
1) 압축 해제
2) index.html 더블클릭

수정 포인트
1) 게임 이미지/GIF
   index.html에서 .game-media 영역을 아래처럼 교체하면 됩니다.
   <img src="assets/game-01.gif" alt="게임 플레이" class="your-image-class">
   styles.css에 .your-image-class { width:100%; height:100%; object-fit:cover; } 추가

2) Steam / SNS 링크
   index.html에서 href="#" 를 실제 URL로 교체하세요.

3) 트레일러
   <div class="trailer-placeholder"> ... </div> 영역을 YouTube iframe으로 바꾸면 됩니다.

4) 게임 카드 추가
   <article class="game-card ...">...</article> 블록을 복사해서 제목/설명/태그/링크만 수정하세요.

5) 메인 컬러
   styles.css 최상단 :root의 --yellow 값을 변경하면 사이트 전체 포인트 컬러가 바뀝니다.

배포
- GitHub Pages, Netlify, Cloudflare Pages 등 정적 호스팅에 폴더 그대로 업로드하면 됩니다.
- 외부 라이브러리/폰트 없이 동작합니다.

참고
- assets/header-reference.png는 제공받은 헤더 이미지 원본 보관용입니다.
- 실제 첫 화면은 이미지가 아니라 CSS 배경색 + 텍스트로 재현해 선명도/로딩 속도를 유지합니다.
