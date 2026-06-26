(function () {
  function addButtonEffects() {
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('mouseenter', function () {
        btn.style.transform = 'scale(1.05) translateY(-2px)';
        btn.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.35)';
      });
      btn.addEventListener('mouseleave', function () {
        btn.style.transform = '';
        btn.style.boxShadow = '';
      });
      btn.addEventListener('mousedown', function () {
        btn.style.transform = 'scale(0.97) translateY(0)';
        btn.style.boxShadow = '';
      });
      btn.addEventListener('mouseup', function () {
        btn.style.transform = 'scale(1.05) translateY(-2px)';
        btn.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.35)';
      });
    });
  }

  function addLinkCardEffects() {
    document.querySelectorAll('.link-item').forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        card.style.transform = 'translateY(-4px)';
        card.style.borderColor = '#3b82f6';
        card.style.boxShadow = '0 8px 28px rgba(0, 0, 0, 0.45)';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.borderColor = '';
        card.style.boxShadow = '';
      });
      card.addEventListener('mousedown', function () {
        card.style.transform = 'translateY(-1px)';
      });
      card.addEventListener('mouseup', function () {
        card.style.transform = 'translateY(-4px)';
      });
    });
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
    addButtonEffects();
    addLinkCardEffects();
    addPageLoadAnimation();
  });
})();
