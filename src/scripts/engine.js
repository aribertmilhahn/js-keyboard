const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");
const distCheck = document.querySelector(".dist-check input");

let mappedKeys = [];
let isDistortionOn = false;

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = isDistortionOn ? `src/tunes/${key}-dist.wav` : `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout( () => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mappedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mappedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const toggleDistortion = () => isDistortionOn = !isDistortionOn;

volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", showHideKeys);
distCheck.addEventListener("click", toggleDistortion)