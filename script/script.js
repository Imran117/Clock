/* Время */

let h = document.querySelector(".hour");
let m = document.querySelector(".minute");
let s = document.querySelector(".secund");
let weekDay = document.querySelector(".week__day");
let day = document.querySelector(".d");
let mounth = document.querySelector(".mounth");
let year = document.querySelector(".year");
let newDate = new Date()

function mount() {
  let array = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  return array[newDate.getMonth()]
}

function days() {
  let array = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  return array[newDate.getDay() - 1]
}

function result() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let secund = date.getSeconds();
  day.innerHTML = date.getDate() + '-'
  year.innerHTML = date.getFullYear()
  mounth.innerHTML = mount();
  weekDay.innerHTML = days()
  hour < 10 ? (h.innerHTML = "0" + hour) : (h.innerHTML = hour);
  minute < 10 ? (m.innerHTML = "0" + minute) : (m.innerHTML = minute);
  secund < 10 ? (s.innerHTML = "0" + secund) : (s.innerHTML = secund);

  setTimeout(result, 1000);
}

result();

/* Аудио */

var radio = new Audio();
let audioPlay, tim;
radio.src = "./music/Голос леса.mp3";
let at = document.querySelector(".at");
let icon = at.querySelector("i");
at.addEventListener("click", function () {
  if (radio.paused == true) {
    radio.play();
    audioPlay = true;
    icon.classList.remove('fad', 'fa-volume-mute')
    icon.classList.add('fas', 'fa-volume')

  } else {
    radio.pause();
    audioPlay = false;
    clearInterval(tim);
    icon.classList.remove('fas', 'fa-volume')
    icon.classList.add('fad', 'fa-volume-mute')
  }

  if (audioPlay == true) {
    tim = setInterval(() => {
      console.log(1);
      let time = Math.round(radio.currentTime);
      if (time == 243) {
        radio.play();
      }
    }, 1000);
  }
});


/* menu */


let menuBtn = document.querySelector('.menu');
let menuList = document.querySelector('.menu__list');
let windowItem = document.querySelectorAll('.watch__item');
let navLink = document.querySelectorAll('.nav__list-link');

menuBtn.addEventListener('click', function () {
  this.classList.toggle('opened')
  menuList.classList.toggle('active')
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', function () {
    Item(this)
    menuList.classList.remove('active')
    menuBtn.classList.remove('opened')
  })
};

function Item(elem) {
  windowItem.forEach(item =>
    item.classList.remove('active')
  );

  if (elem.innerHTML == 'Часы') {
    windowItem[0].classList.add('active');
  } else if (elem.innerHTML == 'Таймер') {
    windowItem[1].classList.add('active');
  } else if (elem.innerHTML == 'Секундомер') {
    windowItem[2].classList.add('active');
  }
};

/* секундомер */

let secundBtn = document.querySelector('.secund__btn-start');
let secundBtnClear = document.querySelector('.secund__btn-clear');
let secundHour = document.querySelector('.secund-h');
let secundMinutes = document.querySelector('.secund-m');
let secundS = document.querySelector('.secund-s');

secundBtn.addEventListener('click', () => {
  if (secundBtn.innerHTML == 'start') {
    secundBtn.innerHTML = 'stop';
    secundBtnClear.setAttribute('disabled', 'disabled');
  } else {
    secundBtn.innerHTML = 'start';
    secundBtnClear.removeAttribute('disabled');
  }
})

secundBtnClear.addEventListener('click', () => {
  secundHour.innerHTML = "0" + 0;
  secundMinutes.innerHTML = "0" + 0;
  secundS.innerHTML = "0" + 0;


})

function Watch() {
  if (secundBtn.innerHTML == 'stop') {
    secundS.innerHTML++;
    secundS.innerHTML < 10 ?
      (secundS.innerHTML = "0" + secundS.innerHTML++) :
      (secundS.innerHTML++);
    if (secundS.innerHTML > 59) {
      secundS.innerHTML = 0;
      secundMinutes.innerHTML++;
      secundMinutes.innerHTML < 10 ?
        (secundMinutes.innerHTML = "0" + secundMinutes.innerHTML++) :
        (secundMinutes.innerHTML++);
    } else if (secundMinutes.innerHTML > 59) {
      secundMinutes.innerHTML = 0;
      secundHour.innerHTML++;
      secundHour.innerHTML < 10 ?
        (secundHour.innerHTML = "0" + secundHour.innerHTML++) :
        (secundHour.innerHTML++);
    }
  }

  setTimeout(Watch, 100);
}
Watch()

/* Таймер */

// const el = document.querySelector('.time__top'),
//   bell = document.querySelector('.time__top-audio'),
//   mindiv = document.querySelector('.mins'),
//   secdiv = document.querySelector('.secs'),
//   startBtn = document.querySelector('.start');
// localStorage.setItem('btn', 'focus')

// let initial, totalsecs, prec, paused, mins, seconds;

// startBtn.addEventListener('click', function () {
//   let btn = localStorage.getItem('btn');

//   if (btn == 'focus') {
//     mins = +localStorage.getItem('focusTime');
//   } else {
//     mins = +localStorage.getItem('breakTime');
//   }

//   seconds = mins * 60;
//   totalsecs = mins * 60;
//   setTimeout(decremenT(), 60);
//   startBtn.style.transform = 'scale(0)';
//   paused = false;
// });

// function decremenT() {
//   mindiv.textContent = Math.floor(seconds / 60);
//   secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`

//   if (seconds > 0) {
//     seconds--
//     initial = window.setTimeout('decremenT()', 1000)
//   } else {
//     mins = 0;
//     seconds = 0;
//     bell.play();
//     let btn = localStorage.getItem('btn');

//     if (btn == 'focus') {
//       startBtn.textContent = 'start break';
//       startBtn.classList.add('break');
//       localStorage.setItem('btn', 'break');
//     } else {
//       startBtn.classList.remove('break');
//       startBtn.textContent = 'start focus';
//       localStorage.setItem('btn', 'focus');
//     }
//     startBtn.style.transform = 'scale(1)';
//   }

// }