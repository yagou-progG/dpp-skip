// ==UserScript==
// @name         pular video speak
// @namespace    http://tampermonkey.net/
// @version      1.0
// @author       dopplin_
// @description  coloca um botão para pular os videos(não só no speak)
// @match        *://*/*
// @grant        none
// @icon         https://static.wikia.nocookie.net/sanrio/images/1/10/Hello-kitty.png/revision/latest?cb=20171105235741
// ==/UserScript==

(function() {
    'use strict';

  
    const skipButton = document.createElement('button');
    skipButton.innerText = `nini`;
    skipButton.style.position = 'fixed';
    skipButton.style.bottom = '20px';
    skipButton.style.right = '20px';
    skipButton.style.padding = '10px 20px';
    skipButton.style.zIndex = '9999';
    skipButton.style.backgroundColor = '#6A5ACD';
    skipButton.style.color = 'white';
    skipButton.style.border = 'none';
    skipButton.style.borderRadius = '5px';
    skipButton.style.cursor = 'pointer';
    skipButton.style.display = 'none';

    document.body.appendChild(skipButton);

   
    const skipSound = new Audio('https://www.myinstants.com/media/sounds/anime-ahh.mp3'); 


    function checkForVideo() {
        const video = document.querySelector('video');
        if (video) {
            skipButton.style.display = 'block';

           
            skipButton.onclick = () => {
                video.currentTime = video.duration;
                skipSound.play(); 
            };

            
            document.addEventListener('keydown', (e) => {
                if (e.key.toLowerCase() === "p") {
                    video.currentTime = video.duration;
                    skipSound.play(); // Toca o som
                }
            });
        } else {
            skipButton.style.display = 'none';
        }
    }

   
    setInterval(checkForVideo, 1000);
})();

//vão todos vcs tomar no cu seus sebosos

