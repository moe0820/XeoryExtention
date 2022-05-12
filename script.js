window.addEventListener("scroll", function () {
  // スクロールしたピクセル数を取得
  let scroll = document.documentElement.scrollTop;
  // document.getElementById("scrollValue").textContent = scroll;

  if (scroll < 200) {
    this.document.querySelector(".pagetop").classList.add("display")
  } else {
    this.document.querySelector(".pagetop").classList.remove("display");
  }
});