

const info = document.querySelectorAll(".info");
info.forEach((ele) => {
  ele.addEventListener("click", () => {
    const content = ele.parentElement.querySelector(".content");
    content.classList.toggle("flipCard");
  });
});
