const video = document.querySelector('.vid');
const playBtn = document.querySelector('.play');
const stopBtn = document.querySelector('.stop');
const progress = document.querySelector('.progress');
console.log(progress)

function togglePlay(){
    if(video.paused){
        video.play()
    }else {
        video.pause();
    }
}

function startOverVideo() {
    video.currentTime = 0;
    video.pause();
}

function playAlong() {
    progress.style.width = `${(video.currentTime/video.duration) * 100}px`;
}


// add event listeners 

video.addEventListener('click', togglePlay);
playBtn.addEventListener('click', togglePlay);
stopBtn.addEventListener('click', startOverVideo);
video.addEventListener('timeupdate', playAlong);
