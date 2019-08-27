function playAudio(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) {
        return; // Ends function if there is not an audio element
    } else {
        audio.currentTime = 0; // This should allow us to reset the sound each time
        audio.play();
        key.classList.add('playing');
    }
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') {
        return;
    } else {
        this.classList.remove('playing');
    }
}

const keys = Array.from(document.querySelectorAll('.key')); // Added the Array.from to ensure that the foreach loop will work as it is an array method that works for a node list but is by default an array method.
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playAudio);