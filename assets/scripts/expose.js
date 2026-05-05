// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

function init() {
    // TODO

    // select the first image
    const img = document.querySelector('img');
    const audio = document.querySelector('audio');

    function setHornImgAudio() {
        const horn = hornSelect.value;

        if (horn == 'air-horn') {
            img.src = 'assets/images/air-horn.svg';
            audio.src = 'assets/audio/air-horn.mp3';
        } else if (horn == 'car-horn') {
            img.src = 'assets/images/car-horn.svg';
            audio.src = 'assets/audio/car-horn.mp3';
        } else if (horn == 'party-horn') {
            img.src = 'assets/images/party-horn.svg';
            audio.src = 'assets/audio/party-horn.mp3';
        } else {
            img.src = 'assets/images/no-image.png';
            audio.src = '';
        }
    }

    const hornSelect = document.getElementById('horn-select');
    hornSelect.addEventListener('change', setHornImgAudio);
    setHornImgAudio();

    const volumeControls = document.getElementById('volume-controls');
    const range = volumeControls.querySelector('input');
    const volumeIcon = volumeControls.querySelector('img');

    function setVolume() {
        const value = Math.min(Math.max(range.value, 0), 100);
        audio.volume = value / 100;

        if (value == 0) {
            volumeIcon.src = 'assets/icons/volume-level-0.svg';
        } else if (value < 33) {
            volumeIcon.src = 'assets/icons/volume-level-1.svg';
        } else if (value < 67) {
            volumeIcon.src = 'assets/icons/volume-level-2.svg';
        } else {
            volumeIcon.src = 'assets/icons/volume-level-3.svg';
        }
    }

    range.addEventListener('change', setVolume);
    setVolume();

    const playButton = document.querySelector('button');
    playButton.onclick = function() {
        audio.play();

        if (hornSelect.value == 'party-horn') {
            jsConfetti.addConfetti()
        }
    };
}
