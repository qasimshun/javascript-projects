const leftBtn = document.querySelector('.left');
const pauseBtn = document.querySelector('.pause');
const rightBtn = document.querySelector('.right');
const title = document.querySelector('.title');
const audio = document.querySelector('.audio');
const image = document.querySelector('.img')
let isPlaying = false;
let counter = 0;
let nameOfTheSong = ['anewbeginning','creativeminds','ukulele'];
loadSong(nameOfTheSong[counter]);
pauseBtn.addEventListener('click', () => {
    if(isPlaying){
        audio.pause();
        isPlaying = false;
    }else {
        audio.play();
        isPlaying = true;
    }
});

leftBtn.addEventListener('click', ()=>{
    
    counter--;
    loadSong(nameOfTheSong[counter])
    if(counter<0){
        counter=2;
    }
    audio.play()
});

rightBtn.addEventListener('click', ()=>{
    
    counter++;
    loadSong(nameOfTheSong[counter])
    if(counter>nameOfTheSong.length-1){
        counter=0;
    }
    audio.play()
})

function loadSong(song){
    audio.src = `bensound-${song}.mp3`;
    image.src = `${song}.jpg`;
}