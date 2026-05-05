// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    // TODO

    const voiceSelect = document.getElementById('voice-select');

    speechSynthesis.addEventListener('voiceschanged', () => {
        const voices = speechSynthesis.getVoices();

        for (let voice of voices) {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.value = voice.name;
            voiceSelect.add(option);
        }
    });

    const faceImg = document.querySelector('img');
    const talkButton = document.querySelector('button');
    const textBox = document.querySelector('textarea');

    talkButton.addEventListener('click', function() {
        let utterance = new SpeechSynthesisUtterance(textBox.value);

        const voices = speechSynthesis.getVoices();
        utterance.voice = voices.find(v => v.name == voiceSelect.value);

        utterance.onstart = function() { faceImg.src = 'assets/images/smiling-open.png' };
        utterance.onend = function() { faceImg.src = 'assets/images/smiling.png' };

        speechSynthesis.speak(utterance);
    });
}
