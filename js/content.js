// 이 파일만 수정하면 됩니다. links 배열에 항목을 추가/삭제하면 개수에 맞춰 자동으로 표시됩니다.
// image는 비워두면(""), 사진 대신 기본 placeholder가 표시됩니다.
// 이미지를 이 저장소의 images/ 폴더에 올렸다면 "images/파일명.jpg" 형태로,
// 다른 곳에 올렸다면 해당 이미지의 전체 URL을 그대로 적으면 됩니다.
// github는 해당 서비스의 저장소 주소. 적어두면 카드 우측에 깃허브 아이콘이 생깁니다.
// 저장소가 없거나 숨기고 싶으면 github 줄을 지우거나 ""로 두면 아이콘이 나오지 않습니다.
const SITE_CONTENT = {
  title: "MOVINGWOO HUB",
  intro: "운영중인 서비스 리스트",
  links: [
    {
      image: "https://raw.githubusercontent.com/movingwoo/hub/refs/heads/main/images/wfeature_icon.png",
      desc: "W-Feature — WIPI 에뮬레이터",
      url: "https://wfeature.movingwoo.com/",
      github: "https://github.com/movingwoo/wfeature"
    },
	{
      image: "https://raw.githubusercontent.com/movingwoo/hub/refs/heads/main/images/wtools_icon.png",
      desc: "W-Tools — 브라우저 개발자 도구",
      url: "https://wtools.movingwoo.com/",
      github: "https://github.com/movingwoo/wtools"
    },
    {
      image: "https://raw.githubusercontent.com/movingwoo/hub/refs/heads/main/images/arc_icon.png",
      desc: "작업 기록 및 학습 내용에 대한 통합 아카이브",
      url: "https://arc.movingwoo.com/",
      github: "https://github.com/movingwoo/movingwoo.github.io"
    }
  ],

  // ===== 기타 =====
  // 홈페이지 없이 깃허브 저장소만 있는 것들.
  // url은 적지 않아도 되고, 카드를 누르면 github 주소로 바로 이동합니다.
  // 아래 주석을 풀고 값을 채우면 '기타' 줄이 나타납니다.
  // others가 비어 있으면 가로줄과 '기타' 제목까지 통째로 표시되지 않습니다.
  othersTitle: "기타 개발 중이거나 소소한 것들",
  others: [
    {
      image: "https://raw.githubusercontent.com/movingwoo/hub/refs/heads/main/images/ready_icon.png", 
      desc: "프라이빗 웹 터미널",
      github: "https://github.com/movingwoo/wterm"
    },
    {
      image: "https://raw.githubusercontent.com/movingwoo/hub/refs/heads/main/images/brainstem_icon.png", 
      desc: "뇌간",
      github: "https://github.com/movingwoo/brainstem"
    },
    {
      image: "https://raw.githubusercontent.com/movingwoo/hub/refs/heads/main/images/sentinel_icon.png", 
      desc: "센티널",
      github: "https://github.com/movingwoo/sentinel"
    },
    {
      image: "https://raw.githubusercontent.com/movingwoo/hub/refs/heads/main/images/ready_icon.png", 
      desc: "미니스크린",
      github: "https://github.com/movingwoo/miniscreen"
    }
  ]
};
