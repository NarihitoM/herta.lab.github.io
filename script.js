document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const audio = document.getElementById('audio');
    const audio1 = document.getElementById('audio1');
    const container = document.querySelector('.container');
    const counterDisplay = document.querySelector('h3');
    let counter = 0;
    let playFirstAudio = true;
    audio.volume = 0.9;
    audio1.volume = 1;

    button.addEventListener('click', () => {
        const gif = document.createElement('div');
        gif.classList.add('gif');
        document.body.appendChild(gif);

        setTimeout(() => {
            gif.remove();
        }, 3000);

        if (playFirstAudio) {
            const newAudio = audio.cloneNode();
            newAudio.play();
        } else {
            const newAudio1 = audio1.cloneNode();
            newAudio1.play();
        }
        playFirstAudio = !playFirstAudio;

        counter++;
        counterDisplay.textContent = `Kuru Kuru Count: ${counter}`;
    });
});
