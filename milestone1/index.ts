let toggleButton = document.getElementById("toggle-work") as HTMLButtonElement;
let work = document.getElementById("experience") as HTMLElement;
toggleButton.addEventListener("click", () => {
  if (work.style.display === "none") {
    work.style.display = "block";
  } else {
    work.style.display = "none";
  }
});
