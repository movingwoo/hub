(function () {
  const titleEl = document.getElementById("page-title");
  const introEl = document.getElementById("page-intro");
  const listEl = document.getElementById("link-list");

  const othersSection = document.getElementById("others-section");
  const othersTitleEl = document.getElementById("others-title");
  const othersListEl = document.getElementById("others-list");

  // GitHub 공식 마크 (octicon mark-github)
  const GITHUB_ICON =
    '<svg viewBox="0 0 16 16" aria-hidden="true" focusable="false">' +
    '<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 ' +
    '0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 ' +
    '1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 ' +
    '0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 ' +
    '1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 ' +
    '3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 ' +
    '8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>';

  // 카드 하나를 만든다.
  // url이 없으면(기타 항목) 카드 본문도 github 주소로 보낸다.
  function createCard(link) {
    const mainHref = link.url || link.github;
    if (!mainHref) {
      return null;
    }

    // 카드는 div. 안에 링크가 둘(서비스 / 깃허브) 들어가므로 a를 중첩할 수 없다.
    const item = document.createElement("div");
    item.className = "link-item";

    const main = document.createElement("a");
    main.className = "link-main";
    main.href = mainHref;
    main.target = "_blank";
    main.rel = "noopener";

    const thumb = document.createElement("span");
    thumb.className = "link-thumb";
    if (link.image) {
      const img = document.createElement("img");
      img.src = link.image;
      img.alt = link.desc;
      thumb.appendChild(img);
    } else {
      thumb.textContent = "사진";
    }

    const desc = document.createElement("span");
    desc.className = "link-desc";
    desc.textContent = link.desc;

    main.appendChild(thumb);
    main.appendChild(desc);
    item.appendChild(main);

    if (link.github) {
      const gh = document.createElement("a");
      gh.className = "link-github";
      gh.href = link.github;
      gh.target = "_blank";
      gh.rel = "noopener";
      gh.title = "GitHub 저장소";
      gh.setAttribute("aria-label", link.desc + " GitHub 저장소");
      gh.innerHTML = GITHUB_ICON;
      item.appendChild(gh);
    }

    return item;
  }

  function renderList(container, links) {
    let count = 0;
    (links || []).forEach(function (link) {
      const card = createCard(link);
      if (card) {
        container.appendChild(card);
        count += 1;
      }
    });
    return count;
  }

  document.title = SITE_CONTENT.title;
  titleEl.textContent = SITE_CONTENT.title;
  introEl.textContent = SITE_CONTENT.intro;

  renderList(listEl, SITE_CONTENT.links);

  // 기타 섹션 — 항목이 하나도 없으면 구분선과 제목까지 통째로 감춘다.
  const othersCount = renderList(othersListEl, SITE_CONTENT.others);
  if (othersCount > 0) {
    othersTitleEl.textContent = SITE_CONTENT.othersTitle || "기타";
    othersSection.hidden = false;
  }
})();
