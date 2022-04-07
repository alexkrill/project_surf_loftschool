(function() {
    
const video = document.getElementById("player");
const playBigButton = document.querySelector(".video__player-img");
const playerPlayBtn = document.querySelector(".duration__img");
const durationControl = document.getElementById("durationLevel");

const soundControl = document.getElementById("dynamicLevel");
const soundBtn = document.querySelector(".sound__btn");
const dynamicBtn = document.querySelector(".sound__btn");

let intervalId;
let soundLevel;

video.addEventListener("loadeddata", function () {

    video.addEventListener("click", playStop);

    let playButtons = document.querySelectorAll(".play");

    for (let i = 0; i < playButtons.length; i++) {
        playButtons[i].addEventListener("click", playStop);
    }

    durationControl.min = 0;
    durationControl.value = 0;
    durationControl.max = video.duration;
    durationControl.addEventListener("input", setVideoDuration);

    soundControl.min = 0;
    soundControl.max = 10;
    soundControl.value = soundControl.max;
    soundControl.addEventListener("input", changeSoundVolume);

    dynamicBtn.addEventListener("click", soundOff);

    video.addEventListener("ended", () => {
        playBigButton.classList.toggle("video__player-img--active");
        playerPlayBtn.classList.remove("active");
        video.currentTime = 0;
    })

});

function playStop() {
    playBigButton.classList.toggle("video__player-img--active");
    playerPlayBtn.classList.toggle("active");

    if (video.paused) {
        video.play();
        intervalId = setInterval(updateDuration, 1000 / 60);
    } else {
        clearInterval(intervalId);
        video.pause();
    }
}

function setVideoDuration() {
    video.currentTime = durationControl.value;
    updateDuration();
}

function updateDuration () {
    durationControl.value = video.currentTime;
    let step = video.duration / 100;
    let percent = video.currentTime / step;
    durationControl.style.background = `linear-gradient(90deg, #FEDB3F 0%, #FEDB3F  ${percent}%, #626262 ${percent}%)`;
}

function changeSoundVolume() {
    video.volume = soundControl.value / 10;
    if (video.volume === 0) {
        soundBtn.classList.add("active")
    } else {
        soundBtn.classList.remove("active")

    }
}

function soundOff() {
    if (video.volume === 0) {
        video.volume = soundLevel;
        soundControl.value = soundLevel * 10;
        soundBtn.classList.remove("active");

    } else {
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
        soundBtn.classList.add("active");
    }
}

})()