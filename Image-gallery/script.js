let scrollContainer = document.querySelector(".gallery");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.style.scrollBehavior = "auto";
  scrollContainer.scrollLeft += e.deltaY;
});

previousBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});
