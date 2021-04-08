// Codes adapted from https://www.hongkiat.com/blog/text-to-speech/
// This module relies on the Web Speech API, with documentation available at https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API
// In this case, we heavily rely on the SpeechSynthesis interface.


onload = function () {
    // First check whether speech synthesis is supported.
    if ('speechSynthesis' in window) with(speechSynthesis) {

        // assign variables to the three elements, play, pause and stop.
        var playEle = document.querySelector('#play');
        var pauseEle = document.querySelector('#pause');
        var stopEle = document.querySelector('#stop');
        // flag in this case means that the API has been started or not.
        var flag = false;

        // add event listener to execute function on trigger
        playEle.addEventListener('click', onClickPlay);
        pauseEle.addEventListener('click', onClickPause);
        stopEle.addEventListener('click', onClickStop);


        // this function is called when the play button is clicked.
        function onClickPlay() {
            if (!flag) {
                flag = true;
                // create a new instance of SpeechSynthesis and passing the text content of the article into it. 
                // Documentation https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
                utterance = new SpeechSynthesisUtterance(document.querySelector('article').textContent);
                // Set the speech voice to the first one in the list
                utterance.voice = getVoices()[0];
                utterance.onend = function () {
                    flag = false;
                    playEle.className = pauseEle.className = '';
                    stopEle.className = 'stopped';
                };
                playEle.className = 'played';
                stopEle.className = '';
                speak(utterance);
            }
            if (paused) {
                /* unpause/resume narration */
                playEle.className = 'played';
                pauseEle.className = '';
                resume();
            }
        }

        function onClickPause() {
            if (speaking && !paused) {
                /* pause narration */
                pauseEle.className = 'paused';
                playEle.className = '';
                pause();
            }
        }

        function onClickStop() {
            if (speaking) {
                /* stop narration */
                /* for safari */
                stopEle.className = 'stopped';
                playEle.className = pauseEle.className = '';
                flag = false;
                cancel();

            }
        }

    }

    else {
        /* speech synthesis not supported */
        msg = document.createElement('h5');
        msg.textContent = "Detected no support for Speech Synthesis";
        msg.style.textAlign = 'center';
        msg.style.backgroundColor = 'red';
        msg.style.color = 'white';
        msg.style.marginTop = msg.style.marginBottom = 0;
        document.body.insertBefore(msg, document.querySelector('div'));
    }

}


// -------------------------------------------------------------------------------------------------------------------

// Darkmode toggle logic

function toggleDarkMode() {
    // When dark mode is toggled on.
    // Append dark-mode class to body 
    document.body.classList.toggle("dark-mode"); 

    document.querySelector(".modal-content").classList.toggle("dark-mode-pop");
    // add dark-mode to navbar and side bar
    document.querySelector(".navbar").classList.toggle("dark-mode-bar");
    document.querySelector("footer").classList.toggle("dark-mode-bar");
    document.querySelector("#sidebarList").classList.toggle("dark-mode-bar");
    document.querySelector("#sidebarTag").classList.toggle("dark-mode-bar");
    // darkmode icon toogle
    document.querySelector("#darkmode").classList.toggle("on");

    // If there is an article title header, this will toggle the darkmode settings for those
    if ($("#articleTitle")){
        console.log("pass");
        document.querySelector("#articleTitle").classList.toggle("dark-mode-header");
        document.querySelector("#articleTitle h3").classList.toggle("dark-mode-text");
        document.querySelector("#articleTitle h6").classList.toggle("dark-mode-text");
        document.querySelector("#navigatePreviousBox").classList.toggle("dark-mode-box");
        document.querySelector("#navigateNextBox").classList.toggle("dark-mode-box");
    }
}
