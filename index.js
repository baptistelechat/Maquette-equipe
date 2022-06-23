const arrow = document.querySelector(".delivery__arrow");

window.onscroll = () => {
  displayBtn();
};

const displayBtn = () => {
  console.log(arrow.classList.value);

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    arrow.classList.value = "delivery__arrow enterAnimation";
  } else if (arrow.classList.value === "delivery__arrow enterAnimation") {
    arrow.classList.value = "delivery__arrow exitAnimation";
  } else if (
    arrow.classList.value !== "delivery__arrow enterAnimation" &&
    arrow.classList.value !== "delivery__arrow exitAnimation"
  ) {
    arrow.classList.value = "delivery__arrow";
  }
};

arrow.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, bevahior: "smooth" });
});
