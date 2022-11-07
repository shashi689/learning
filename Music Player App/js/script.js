const wrapper = document.querySelector(".wrapper");
const musicImg = wrapper.querySelector(".img-area img");
const musicName = wrapper.querySelector(".song-details .name");
// console.log(musicName);
const musicArtist = wrapper.querySelector(".song-details .artist");
const playPauseBtn = wrapper.querySelector(".play-pause");
// if(playPauseBtn){
//   playPauseBtn.addEventListener('click', ()=>{
//     console.log('clicked');
//   })
// }
const prevBtn = wrapper.querySelector("#prev");
const nextBtn = wrapper.querySelector("#next ");
const mainAudio = wrapper.querySelector("#main-audio");
const progressArea = wrapper.querySelector(".progress-area");
const progressBar = wrapper.querySelector(".progress-bar");
const musicList = wrapper.querySelector(".music-list");
const moreMusicBtn = wrapper.querySelector("#more-music");
const closeMoreMusic = wrapper.querySelector("#close");

let musicIndex = Math.floor(Math.random() * allMusic.length + 1);
// console.log(allMusic.length);
// console.log(Math.random());
// console.log(musicIndex);
let isMusicPaused = true;

window.addEventListener("load", () => {
  loadMusic(musicIndex);
  playingSong();
});

function loadMusic(indexNumb) {
  musicName.innerText = allMusic[indexNumb - 1].name;
  // console.log(allMusic[indexNumb-1].name);
  // console.log(allMusic);
  musicArtist.innerText = allMusic[indexNumb - 1].artist;
  musicImg.src = `images/${allMusic[indexNumb - 1].src}.jpg`;
  mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}
//Play music function
function playMusic() {
  wrapper.classList.add("paused");
  playPauseBtn.querySelector("i").innerText = "pause";
  playPauseBtn.setAttribute("title", "Pause");
  mainAudio.play();
}
//Pause music function
function pauseMusic() {
  wrapper.classList.remove("paused");
  playPauseBtn.querySelector("i").innerText = "play_arrow";
  playPauseBtn.setAttribute("title", "Play");
  mainAudio.pause();
}

//Prev music funtion

function prevMusic() {
  musicIndex--; //decrement of musicIndex by 1
  //if musicIndex is less than 1 then musicIndex will be array length
  musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex++);
  // if(musicIndex < 1){
  //   musicIndex = allMusic.length;
  // }
  // else{
  //   musicIndex = musicIndex--
  // }
  loadMusic(musicIndex);
  playMusic();
  playingSong();
}
function nextMusic() {
  musicIndex++; //increment of musicIndex by 1
  //if musicIndex is greater than array length then musicIndex will be set to index 0
  if (musicIndex > allMusic.length) {
    musicIndex = 1;
  } else {
    musicIndex = musicIndex++;
  }
  loadMusic(musicIndex);
  playMusic();
  playingSong();
}
//Play or pause button event
playPauseBtn.addEventListener("click", () => {
  const isMusicPlay = wrapper.classList.contains("paused");
  isMusicPlay ? pauseMusic() : playMusic();
  playingSong();
});

prevBtn.addEventListener("click", () => {
  prevMusic();
});

nextBtn.addEventListener("click", () => {
  nextMusic();
});

mainAudio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  // console.log(e.target.duration);
  let progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = ` ${progressWidth}% `;

  let musicCurrentTime = wrapper.querySelector(".current-time");
  musicDuration = wrapper.querySelector(".max-duration");

  mainAudio.addEventListener("loadeddata", () => {
    //update song total duration
    let mainAdDuration = mainAudio.duration;
    let totalMin = Math.floor(mainAdDuration / 60);
    // console.log(totalMin);
    let totalSec = Math.floor(mainAdDuration % 60);
    // console.log(totalSec);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`;
  });
  //update playing song current time
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

progressArea.addEventListener("click", (e) => {
  let progressWidth = progressArea.clientWidth; //getting width of progress bar
  let clickedOffsetX = e.offsetX; //getting offset x value
  let songDuration = mainAudio.duration; //getting song total duration

  mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
  playMusic();
  playingSong();
});

//change loop, shuffle, repeat icon onclick
const repeatBtn = wrapper.querySelector("#repeat-plist");

repeatBtn.addEventListener("click", () => {
  let getText = repeatBtn.innerText;

  switch (getText) {
    case "repeat":
      repeatBtn.innerText = "repeat_one";
      repeatBtn.setAttribute("title", "Song Looped");
      break;
    case "repeat_one":
      repeatBtn.innerText = "shuffle";
      repeatBtn.setAttribute("title", "Playback Shuffled");
      break;
    case "shuffle":
      repeatBtn.innerText = "repeat";
      repeatBtn.setAttribute("title", "Playlist looped");
      break;
  }
});

mainAudio.addEventListener("ended", () => {
  let getText = repeatBtn.innerText;

  switch (getText) {
    case "repeat":
      nextMusic();
      break;
    case "repeat_one":
      mainAudio.currentTime = 0;
      loadMusic(musicIndex);
      playMusic();
      break;
    case "shuffle":
      let randIndex = Math.floor(Math.random() * allMusic.length + 1);
      // console.log(randIndex);
      do {
        randIndex = Math.floor(Math.random() * allMusic.length + 1);
      } while (musicIndex == randIndex);
      musicIndex == randIndex;
      loadMusic(musicIndex);
      playMusic();
      playingSong();
      break;
  }
});
//show music list on click of more music icon
moreMusicBtn.addEventListener("click", () => {
  musicList.classList.toggle("show");
});

closeMoreMusic.addEventListener("click", () => {
  moreMusicBtn.click();
});

const ulTag = wrapper.querySelector("ul");

for (let i = 0; i < allMusic.length; i++) {
  let liTag = `
  <li li-index='${i + 1}'>
  <div class= 'row'>
  <span> ${allMusic[i].name}</span>
  <p> ${allMusic[i].artist}</p>
   </div>
   <span id= '${allMusic[i].src}' class= 'audio-duration'>3:40</span>
   <audio class='${allMusic[i].src}' src= 'songs/${
    allMusic[i].src
  }.mp3'></audio>
   </li>
  `;

  ulTag.insertAdjacentHTML("beforeend", liTag);
  let liAudioDurationTag = ulTag.querySelector(`#${allMusic[i].src}`);
  let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);

  liAudioTag.addEventListener("loadeddata", () => {
    let duration = liAudioTag.duration;
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60); 
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    liAudioDurationTag.innerText = `${totalMin}:${totalSec}`;
    liAudioDurationTag.setAttribute("t-duration)", `${totalMin}:${totalSec}`);
  });
}

function playingSong() {
  const allLiTag = ulTag.querySelectorAll("li");
  for (let j = 0; j < allliTag.length; j++) {
    let audioTag = allliTag[j].querySelector(".audio-duration");
    if (allLiTag[j].classList.contains("playing")) {
      allliTag[j].classList.remove("playing");
      let addDuration =audioTag.setAttribute('t-duration');
      audioTag.innerText = addDuration;
    }
    if(allLiTag[j].getAttribute('li-index') == musicIndex){
      allLiTag[j].className.add('playing');
      audioTag.innerText = 'Playing';
    }
    allLiTag[j].setAttribute('onclick', 'clicked(this)');
  }
}
