const wrapper = document.querySelector('.wrapper');
const musicImg = wrapper.querySelector('.img-area img');
const musicName= wrapper.querySelector('.song-details .name');
const musicArtist= wrapper.querySelector('.song-details .artist');
const playPauseBtn= wrapper.querySelector('.play .pause');
const prevBtn= wrapper.querySelector('#prev');
const nextBtn= wrapper.querySelector('#next ');
const mainAudio= wrapper.querySelector('#main-audio');
const progressArea= wrapper.querySelector('.progress-area');
const progressBar= wrapper.querySelector('.progress-bar');
const musicList= wrapper.querySelector('.music-list');
const moreMusicBtn= wrapper.querySelector('#more-music');
const closeMoreMusic= wrapper.querySelector('#close');

let musicIndex = Math.floor((Math.random()* allMusic.length)+1);
let isMusicPaused = true;

window.addEventListener('load', ()=>{
    loadMusic(musicIndex);
    playingSong();
});

function loadMusic(indexNumb){
    musicName.innerText= allMusic[indexNumb - 1].name;
    console.log(musicName)
    musicArtist.innerText= allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic[indexNumb-1].src}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb-1].src}.mp3`;
}
//Play music function
function playingMusic(){
    
}