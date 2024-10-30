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

    // Cria o botão
    const skipButton = document.createElement('button');
    skipButton.innerText = `dpp skip`;
    skipButton.style.position = 'fixed';
    skipButton.style.bottom = '20px';
    skipButton.style.right = '20px';
    skipButton.style.padding = '10px 20px';
    skipButton.style.zIndex = '9999';
    skipButton.style.backgroundColor = '#f44336';
    skipButton.style.color = 'white';
    skipButton.style.border = 'none';
    skipButton.style.borderRadius = '5px';
    skipButton.style.cursor = 'pointer';
    skipButton.style.display = 'none';

    document.body.appendChild(skipButton);

    // Função para verificar se há vídeo na página
    function checkForVideo() {
        const video = document.querySelector('video');
        if (video) {
            skipButton.style.display = 'block';

            // Pula para o final do vídeo ao clicar no botão
            skipButton.onclick = () => {
                video.currentTime = video.duration;
            };
        } else {
            skipButton.style.display = 'none';
        }
    }

    // Checa se há vídeo na página a cada 2 segundos
    setInterval(checkForVideo, 2000);
})();
