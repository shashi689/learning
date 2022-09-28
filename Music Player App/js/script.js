const wrapper = document.querySelector(".wrapper");
const musicImg = wrapper.querySelector(".img-area img");
const musicName = wrapper.querySelector(".song-details .name");
// console.log(musicName);
const musicArtist = wrapper.querySelector(".song-details .artist");
const playPauseBtn = wrapper.querySelector(".play .pause");
const prevBtn = wrapper.querySelector("#prev");
const nextBtn = wrapper.querySelector("#next ");
const mainAudio = wrapper.querySelector("#main-audio");
const progressArea = wrapper.querySelector(".progress-area");
const progressBar = wrapper.querySelector(".progress-bar");
const musicList = wrapper.querySelector(".music-list");
const moreMusicBtn = wrapper.querySelector("#more-music");
const closeMoreMusic = wrapper.querySelector("#close");

let musicIndex = Math.floor(Math.random() * allMusic.length);
// console.log(allMusic.length);
// console.log(Math.random());
let isMusicPaused = true;

window.addEventListener("load", () => {
  loadMusic(musicIndex);
  playingSong();
});

function loadMusic(indexNumb) {
  musicName.innerText = allMusic[indexNumb - 1].name;
//   console.log(allMusic[indexNumb]);
  // console.log(allMusic);
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `images/${allMusic[indexNumb - 1].src}.jpg`;
  mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}
//Play music function
function playMusic() {
  wrapper.classList.add("paused");
  playPauseBtn.querySelector("i").innerText = "pause";
  mainAudio.play();
}
//Pause music function
function pauseMusic() {
  wrapper.classList.remove("paused");
  playPauseBtn.querySelector("i").innerText = "play_arrow";
  mainAudio.pause();
}

//Prev music funtion

function preMusic() {
  musicIndex--; //decrement of musicIndex by 1
  //if musicIndex is less than 1 then musicIndex will be array length
  musicIndex < 1
    ? (musicIndex = allMusic.length)
    : (musicIndex = loadMusic(musicIndex));
  playMusic();
  playingSong();
}
function nextMusic() {
  musicIndex++; //increment of musicIndex by 1
  //if musicIndex is greater than array length then musicIndex will be set to index 0
  musicIndex > allMusic.length
    ? (musicIndex = 1)
    : (musicIndex = loadMusic(musicIndex));
  playMusic();
  playingSong();
}
//Play or pause button event
// playPauseBtn.addEventListener("click", () => {
//   const isMusicPlay = wrapper.classList.contains("paused");
//   isMusicPlay ? pauseMusic() : playMusic();
//   playingSong();
// });

prevBtn.addEventListener("click", () => {
  preMusic();
});

nextBtn.addEventListener("click", () => {
  nextMusic();
});
