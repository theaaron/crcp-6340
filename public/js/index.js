(() => {
    "use strict";
    let degreeRot = 6;
    let heroBg = document.getElementById('hero-title');
    function rotateHeroBg() {
        heroBg.style.background = `repeating-linear-gradient(-${degreeRot}deg, rgb(108, 0, 118), rgb(41, 0, 88) 1%)`;
        degreeRot += 0.5;
        requestAnimationFrame(rotateHeroBg);
    }

    rotateHeroBg();

    
})();
