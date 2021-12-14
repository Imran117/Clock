const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".pause");

focusTimeInput.value = localStorage.getItem("focusTime");
breakTimeInput.value = localStorage.getItem("breakTime");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("focusTime", focusTimeInput.value);
  localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", (e) => {
  e.target.classList.add('active')
  setTimeout(() => {
    e.target.classList.remove('active')
  }, 1000);
  startBtn.disabled = false;
  clearTimeout(initial);
  setProgress(0);
  mindiv.textContent = 0;
  secdiv.textContent = 0;
});

pauseBtn.addEventListener("click", (e) => {
  e.target.classList.add('active')
  setTimeout(() => {
    e.target.classList.remove('active')
  }, 1000);
  if (paused === undefined) {
    return;
  }
  if (paused) {
    paused = false;
    initial = setTimeout("decremenT()", 60);
    pauseBtn.textContent = "pause";
  } else {
    clearTimeout(initial);
    pauseBtn.textContent = "resume";
    paused = true;
  }
});
