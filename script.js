"use strict";

const screenContainer = document.querySelector(".screen-container");
const allInsects = {
  fly: "http://pngimg.com/uploads/fly/fly_PNG3946.png",
  mosquito: "http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png",
  spider: "http://pngimg.com/uploads/spider/spider_PNG12.png",
  roach: "http://pngimg.com/uploads/roach/roach_PNG12163.png"
}


let userInsect = '';
let userInsectName = '';

const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");
const screen3 = document.querySelector(".screen-3");
const startBtn = document.getElementById("play");

const insectContainer = document.querySelector(".images");

const playground = document.getElementById("playground");
const gameTimer = document.querySelector(".timer");
const scoreboard = document.querySelector(".score");
const message = document.querySelector(".message");
let score = 0;
let seconds = 0;

startBtn.addEventListener("click", () => screenContainer.classList.add("play"), {
  once: true
});


insectContainer.addEventListener("click", function (e) {
  const target = e.target;
  if (!target.closest(".img")) return;
  userInsectName = target.closest(".img").querySelector("img").getAttribute("alt");
  userInsect = allInsects[userInsectName];
  screenContainer.classList = "screen-container playing";
  setTimeout(() => {
    setInterval(() => startTimer(), 1000);
    spawnInsect();
  }, 1000);
}, { once: true });


playground.addEventListener("click", function (e) {

  const target = e.target;

  if (target.classList.value === "playground") return;

  target.remove();
  updateScore();
  setTimeout(() => {
    spawnInsect();
    setTimeout(() => {
      spawnInsect();
    }, 500);
  }, 500);
});

const startTimer = function () {
  seconds++;
  const minute = Math.floor(seconds / 60);
  const sec = seconds % 60;
  gameTimer.innerText = `${String(minute).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

const updateScore = function () {
  score++;
  scoreboard.innerText = String(score).padStart(2, '0');
  score === 20 && message.classList.add("active");
}

function spawnInsect() {
  playground.insertAdjacentHTML("beforeend",
    `<img src="${userInsect}" alt="${userInsectName}" 
    style=" top: ${randomPosition()}%; left : ${randomPosition()}%;
    transform:rotate(${randomrotation()}deg)">`);
}

const randomPosition = () => Math.floor(Math.random() * 95);
const randomrotation = () => Math.floor(Math.random() * 365);