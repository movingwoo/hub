(function () {
  // hover / press 효과는 css/style.css의 :hover, :active가 담당한다.
  // 이 파일은 페이지 로드 시 스태거 등장 애니메이션만 처리한다.

  function prefersReducedMotion() {
    return !!(window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function addPageLoadAnimation() {
    var header = document.querySelector('.page header');
    if (header) {
      header.classList.add('anim-hidden');
      setTimeout(function () {
        header.classList.add('anim-visible');
      }, 60);
    }

    document.querySelectorAll('.link-item').forEach(function (item, i) {
      item.classList.add('anim-hidden');
      setTimeout(function () {
        item.classList.add('anim-visible');
      }, 120 + i * 80);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // 움직임 최소화 설정이면 숨겼다 보여주는 과정 자체를 건너뛴다.
    if (prefersReducedMotion()) {
      return;
    }
    addPageLoadAnimation();
  });
})();
