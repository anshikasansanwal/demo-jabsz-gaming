document.addEventListener('DOMContentLoaded', () => {
    /* Sticky Nav Bar + Burger Menu */
    let nav = document.querySelector("nav");
    window.onscroll = function() {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }
    };

    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    /* Gaming Text Animation */
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let gamingInterval = null;

    const gamingTextElement = document.querySelector("span[data-value='GAMING']");
    if (gamingTextElement) {
        gamingTextElement.onmouseover = event => {  
            let iteration = 0;
            clearInterval(gamingInterval);
            
            gamingInterval = setInterval(() => {
                event.target.innerText = event.target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return event.target.dataset.value[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");
                
                if (iteration >= event.target.dataset.value.length) { 
                    clearInterval(gamingInterval);
                }
                
                iteration += 1 / 3;
            }, 30);
        };

        gamingTextElement.onmouseout = event => {
            clearInterval(gamingInterval);
            event.target.innerText = event.target.dataset.value; // Reset to original text
        };
    }

    /* Countdown Timer */
    const targetDate = new Date("Oct 10, 2024 14:30:00").getTime();
    let countdownInterval = setInterval(timer, 1000);

    function timer() {
        const now = new Date().getTime();
        const remainingSec = Math.floor((targetDate - now) / 1000);

        if (remainingSec < 0) {
            clearInterval(countdownInterval);
            document.querySelector("#day").innerHTML = "00";
            document.querySelector("#hour").innerHTML = "00";
            document.querySelector("#min").innerHTML = "00";
            document.querySelector("#sec").innerHTML = "00";
            return;
        }

        const days = Math.floor(remainingSec / (3600 * 24));
        const hours = Math.floor((remainingSec % (3600 * 24)) / 3600);
        const minutes = Math.floor((remainingSec % 3600) / 60);
        const seconds = Math.floor(remainingSec % 60);

        document.querySelector("#day").innerHTML = String(days).padStart(2, '0');
        document.querySelector("#hour").innerHTML = String(hours).padStart(2, '0');
        document.querySelector("#min").innerHTML = String(minutes).padStart(2, '0');
        document.querySelector("#sec").innerHTML = String(seconds).padStart(2, '0');
    }
});


const popupTrigger = document.getElementById("popup-trigger");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");

// Open the popup when the info icon is clicked
popupTrigger.onclick = function() {
  popup.style.display = "block";
}

// Close the popup when the x icon is clicked
closePopup.onclick = function() {
  popup.style.display = "none";
}

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = "none";
  }
}

