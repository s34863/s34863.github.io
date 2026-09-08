document.addEventListener("click", (e) => {
  const link = e.target.closest(".navlinks a");
  if (link) document.querySelector(".navlinks")?.classList.remove("open");
});
