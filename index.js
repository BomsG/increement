let increaseBtn = document.getElementById("increase");
let decreseBtn = document.getElementById("decrease");
let value = document.getElementById("value");
let main = 0;

increaseBtn.addEventListener(`click`, () => {
  main++;
  value.innerHTML = main;
  mainStyle();
});

decreseBtn.addEventListener(`click`, () => {
  main--;
  value.innerHTML = main;
  mainStyle();
});

function mainStyle() {
  if (main > 0) {
    main.classList.add("positive");
  } else if (main < 0) {
    main.classList.add("negative");
  } else {
    main.classList.remove("positive");
    main.classList.remove("negative");
  }
}
