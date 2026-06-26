(function () {
  const titleEl = document.getElementById("page-title");
  const introEl = document.getElementById("page-intro");
  const listEl = document.getElementById("link-list");

  document.title = SITE_CONTENT.title;
  titleEl.textContent = SITE_CONTENT.title;
  introEl.textContent = SITE_CONTENT.intro;

  SITE_CONTENT.links.forEach((link) => {
    const item = document.createElement("a");
    item.className = "link-item";
    item.href = link.url;
    item.target = "_blank";
    item.rel = "noopener";

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

    item.appendChild(thumb);
    item.appendChild(desc);
    listEl.appendChild(item);
  });
})();
