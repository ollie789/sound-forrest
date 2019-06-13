document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('a-scene');
    const splash = document.querySelector('#splash');
    const loading = document.querySelector('#splash .loading');
    const startButton = document.querySelector('#splash .start-button');

    const creditsToggle = document.querySelector('#splash .show-credits');
    const creditsList = document.querySelector('#splash .credits-list');

    const emitEvent = (eventName, listeners) => {
        listeners.forEach((listener) => {
            const el = document.querySelector(listener);
            el.emit(eventName);
        })
    };

    const emitMediaEvent = (eventType, listeners) => {
        listeners.forEach((listener) => {
            const el = document.querySelector(listener);
            el.components.sound[eventType]();
        })
    };

    const activateSoundsForTouch = () => {
    	const sounds = document.querySelectorAll('a-sound')
        sounds.forEach((soundEl) => {
            soundEl.components.sound.playSound();
            soundEl.components.sound.stopSound();
        })
    };

    scene.addEventListener('loaded', function (e) {
        setTimeout(() => {
            loading.style.display = 'none';
            splash.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
            startButton.style.opacity = 1;
            creditsToggle.style.opacity = 1;
        }, 50);
    });

    creditsToggle.addEventListener('click', function (e) {
    	e.preventDefault();

    	var display = creditsList.style.display === 'none'
            || creditsList.style.display === '' ? 'block' : 'none';
        
        creditsList.style.display = display;

        return false;
    });

    startButton.addEventListener('click', function (e) {
        activateSoundsForTouch();
        splash.style.display = 'none';
    });

    document.querySelector('#anima').addEventListener('click', function (e) {
        emitMediaEvent('playSound', ['#anima-sound']);
    });

    document.querySelector('#anima-stop').addEventListener('click', function (e) {
        emitMediaEvent('stopSound', ['#anima-sound']);
    });

    document.querySelector('#sphere-1').addEventListener('click', function (e) {
        emitMediaEvent('playSound', ['#orb-sound']);
    });

    document.querySelector('#sphere-2').addEventListener('click', function (e) {
        emitMediaEvent('playSound', ['#orb-sound']);
    });

    document.querySelector('#orb-stop').addEventListener('click', function (e) {
        emitMediaEvent('stopSound', ['#orb-sound']);
    });

    document.querySelector('#dargon').addEventListener('click', function (e) {
        emitMediaEvent('playSound', ['#dragon-sound']);
    });

    document.querySelector('#dragon-stop').addEventListener('click', function (e) {
        emitMediaEvent('stopSound', ['#dragon-sound']);
    });

    document.querySelector('#curved-image').addEventListener('click', function (e) {
        emitMediaEvent('playSound', ['#pic-sound']);
    });

    document.querySelector('#image-stop').addEventListener('click', function (e) {
        emitMediaEvent('stopSound', ['#pic-sound']);
    });

    document.querySelector('#welcome-box').addEventListener('click', function (e) {
        emitMediaEvent('playSound', ['#welcome-sound']);
    });

    document.querySelector('#welcome-stop').addEventListener('click', function (e) {
        emitMediaEvent('stopSound', ['#welcome-sound']);
    });

    document.querySelector('#head-box').addEventListener('click', function (e) {
        emitMediaEvent('playSound', ['#cube-sound']);
    });

    document.querySelector('#body-box').addEventListener('click', function (e) {
        emitMediaEvent('playSound', ['#cube-sound']);
    });

    document.querySelector('#teeth-box').addEventListener('click', function (e) {
        emitMediaEvent('playSound', ['#cube-sound']);
    });

    document.querySelector('#boxs-stops').addEventListener('click', function (e) {
        emitMediaEvent('stopSound', ['#cube-sound']);
    });

    document.querySelector('#women-chair').addEventListener('click', function (e) {
        emitMediaEvent('playSound', ['#women-sound']);
    });

    document.querySelector('#women').addEventListener('click', function (e) {
        emitMediaEvent('playSound', ['#women-sound']);
    });

    document.querySelector('#women-stop').addEventListener('click', function (e) {
        emitMediaEvent('stopSound', ['#women-sound']);
    });
});