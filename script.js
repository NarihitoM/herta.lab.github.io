document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const audio = document.getElementById('audio');
    const audio1 = document.getElementById('audio1');
    const container = document.querySelector('.container');
    const counterDisplay = document.querySelector('h3');
    let counter = 0;
    let playFirstAudio = true;
    const maxGifs = 50; // Limit the number of Herta images at a time

    audio.volume = 0.9;
    audio1.volume = 1;

    button.addEventListener('click', () => {
        if (document.querySelectorAll('.gif').length >= maxGifs) {
            return; // Stop adding if max limit is reached
        }

        const gif = document.createElement('div');
        gif.classList.add('gif');
        container.appendChild(gif); // Append to container instead of body

        setTimeout(() => {
            gif.remove();
        }, 3000);

        if (playFirstAudio) {
            audio.currentTime = 0; // Restart the original audio
            audio.play();
        } else {
            audio1.currentTime = 0;
            audio1.play();
        }
        playFirstAudio = !playFirstAudio;

        counter++;
        counterDisplay.textContent = `Kuru Kuru Count: ${counter}`;
    });
});
