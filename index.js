
window.onload = function() {

    let button = document.querySelector(".btn");

    // flag
    let clicked = 0;

    button.addEventListener("click", function (e) {
        e.preventDefault();
        clicked++;
        if (clicked === 1) {
            
            // random number generate
            let randomNumber = Math.floor(Math.random() * 100)


            let proGress = document.querySelector(".progress-value");
            let progressValue = randomNumber;

            let outer = document.querySelector(".outer");


            let start = 0;
            let end = progressValue;

            let progress = setInterval(() => {
                start++;

                proGress.textContent = `${start}`;
                let font = document.querySelector(".p-value-container")

                if (start <= 25) {
                    outer.style.background = `conic-gradient(#FF0060 ${start * 3.6}deg, #effaeb34 0deg)`;
                    font.style.color = '#FF0060';
                }
                else if (start > 25 && start <= 50) {
                    outer.style.background = `conic-gradient(#FF0060 ${25 * 3.6}deg, #F6FA70 ${start * 3.6}deg, #effaeb34 ${360 - (75 * 3.6)}deg`;
                    font.style.color = '#F6FA70';
                }
                else if (start > 50 && start <= 75) {
                    outer.style.background = `conic-gradient(#FF0060 ${25 * 3.6}deg, #F6FA70 ${50 * 3.6}deg, #00DFA2 ${start * 3.6}deg, #effaeb34 ${360 - (start * 3.6)}deg`;
                    font.style.color = '#00DFA2';
                }
                else if (start > 75 && start <= 100) {
                    outer.style.background = `conic-gradient(#FF0060 ${25 * 3.6}deg, #F6FA70 ${50 * 3.6}deg, #00DFA2 ${75 * 3.6}deg, #0079FF ${start * 3.6}deg, #effaeb34 ${360 - (start * 3.6)}deg`;
                    font.style.color = '#0079FF';
                }


                if (start == end) {
                    clearInterval(progress);
                    clicked = 0;
                }
            }, 40)
        } 
            
    });

    
}

