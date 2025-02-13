document.addEventListener("DOMContentLoaded", function() {
    // Get the current page's URL to identify which page is loaded
    const currentPage = window.location.pathname.split("/").pop();

    // Sound effect (common)
    const clickSound = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

    // Handle envelope click on index.html
    if (currentPage === 'index.html') {
        const envelope = document.getElementById("envelope");
        const letter = document.querySelector(".letter");
        const heart = document.querySelector(".heart");
        const yesBtn = document.getElementById("yesBtn");
        const noBtn = document.getElementById("noBtn");

        envelope.addEventListener("click", function() {
            letter.style.display = "block";
            heart.style.display = "none";
            clickSound.play();
            console.log("Sound should be playing")
        });

        yesBtn.addEventListener("click", function() {
            window.location.href = "confirm.html"; // Redirect to confirm page on 'Yes'
        });

        noBtn.addEventListener("click", function() {
            window.location.href = "denied.html"; // Redirect to denied page on 'No'
        });

        // Floating hearts effect on index.html
        function createHeart() {
            const heartEl = document.createElement("div");
            heartEl.classList.add("heart-bg");
            heartEl.innerHTML = "❤️";
            document.body.appendChild(heartEl);

            const startX = Math.random() * window.innerWidth;
            heartEl.style.left = `${startX}px`;
            heartEl.style.top = "100vh";

            setTimeout(() => {
                heartEl.remove();
            }, 5000);
        }

        setInterval(createHeart, 500); // Create hearts every 500ms
    }

    // Handle broken hearts effect on denied.html
    if (currentPage === 'denied.html') {
        // Broken hearts animation on the right of the page
        function createBrokenHeart() {
            const heartEl = document.createElement("div");
            heartEl.classList.add("heart-bg");
            heartEl.innerHTML = "💔";
            heartEl.style.position = "absolute";
            heartEl.style.top = `${Math.random() * window.innerHeight}px`;
            heartEl.style.right = "0"; // Positioned on the right side

            document.body.appendChild(heartEl);

            heartEl.style.animation = "floatBrokenHearts 5s linear infinite";

            setTimeout(() => {
                heartEl.remove();
            }, 5000); // Remove after animation duration
        }

        setInterval(createBrokenHeart, 1000); // Create broken hearts every 1 second

        // Rain effect on denied.html
        const rainContainer = document.createElement("div");
        rainContainer.classList.add("rain");
        document.body.appendChild(rainContainer);

        function createRaindrop() {
            const raindrop = document.createElement("div");
            raindrop.classList.add("raindrop");

            raindrop.style.left = `${Math.random() * 100}%`;
            raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;

            rainContainer.appendChild(raindrop);

            setTimeout(() => {
                raindrop.remove();
            }, 2000); // Remove raindrop after animation duration
        }

        setInterval(createRaindrop, 100); // Add raindrops every 100ms
    }

    // Floating broken hearts for background effect (common for all pages)
    function createMovingBackground() {
        const backgroundContainer = document.createElement("div");
        backgroundContainer.classList.add("background-container");
        document.body.appendChild(backgroundContainer);

        setInterval(() => {
            const bgHeart = document.createElement("div");
            bgHeart.classList.add("bg-heart");
            bgHeart.innerHTML = currentPage === 'denied.html' ? "💔" : "❤️"; // Different heart for denied.html
            backgroundContainer.appendChild(bgHeart);

            const startX = Math.random() * window.innerWidth;
            bgHeart.style.left = `${startX}px`;
            bgHeart.style.animationDuration = `${5 + Math.random() * 5}s`;

            setTimeout(() => {
                bgHeart.remove();
            }, 10000);
        }, 300); // Add background hearts every 300ms
    }

    createMovingBackground(); // Activate the background heart animation
});
