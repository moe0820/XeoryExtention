window.addEventListener("scroll", function () {
  // スクロールしたピクセル数を取得
  let scroll = document.documentElement.scrollTop;
  // document.getElementById("scrollValue").textContent = scroll;

  if (scroll < 200) {
    this.document.querySelector(".pagetop").classList.add("display");
  } else {
    this.document.querySelector(".pagetop").classList.remove("display");
  }
});
// ドロワー
const btn = document.querySelector(".burger-btn");
const drawer = document.querySelector(".drawer");

btn.addEventListener("click", () => {
  drawer.classList.toggle("on");
});
