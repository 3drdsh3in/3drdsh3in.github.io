const navflexRef = document.querySelector(".nav_flex");
const navBarButton = document.querySelector("#book_bars")

navBarButton.addEventListener("click", () => {
    if (navflexRef.style.display === "" || navflexRef.style.display === "none") {
        navflexRef.style.display = "block";
    }
    else {
        navflexRef.style.display = "none";
    }
})

if (matchMedia) {
    // Runs whenever media query status changes [Screen size is difference]
    // It will do the following:
    // 1. Get the MediaQueryList object.
    // 2. Add the WidthChange Listener to the MediaQueryList object
    // to check if the 

    // 3. Check if SCREEN_WIDTH > 600px 
    const mq = window.matchMedia("(min-width: 768px)");
    mq.addListener(WidthChange);

    // No idea what this call does, since addListener is prompting the function
    // to be called whenever screen width changes anyway.
    // SPOILER ALERT: IT IS NOT NEEDED. MediaQueryList.addListener(WidthChange)
    // WILL RUN THE CALLBACK of WidthChange on its own without needing to the line commented
    // out below:
    // WidthChange(mq);
}

function WidthChange(mq) {
    if (mq.matches) {
        navflexRef.style.display = 'flex';// window width is at least 600px
    } else {
        navflexRef.style.display = 'none';// window width is less than 600px
    }
}

// Projects Switch:
const switchOverviewRef = document.getElementById('switch-overview');
const switchProjectsRef = document.getElementById('switch-projects');
const switchContainerRef = document.getElementById('switch-container');

// Switch's checkbox field which is used for the visual toggling.
const switchCheckRef = document.getElementById('switch-checkbox');
const flipCardsRef = document.querySelectorAll('.flip-card');

switchOverviewRef.addEventListener("click", () => {
    if (!switchCheckRef.checked) {
        switchCheckRef.checked = true;
        for (let i = 0; i < flipCardsRef.length; i++) {
            flipCardsRef[i].classList.add('trigger-card-flip')
        }
    }
    else {
        switchCheckRef.checked = false;
        for (let i = 0; i < flipCardsRef.length; i++) {
            flipCardsRef[i].classList.remove('trigger-card-flip')
        }
    }
})
switchProjectsRef.addEventListener("click", () => {
    if (!switchCheckRef.checked) {
        switchCheckRef.checked = true;
        for (let i = 0; i < flipCardsRef.length; i++) {
            flipCardsRef[i].classList.add('trigger-card-flip')
        }
    }
    else {
        switchCheckRef.checked = false;
        for (let i = 0; i < flipCardsRef.length; i++) {
            flipCardsRef[i].classList.remove('trigger-card-flip')
        }
    }
})
switchContainerRef.addEventListener("click", () => {
    if (!switchCheckRef.checked) {
        switchCheckRef.checked = true;
        for (let i = 0; i < flipCardsRef.length; i++) {
            flipCardsRef[i].classList.add('trigger-card-flip')
        }
    }
    else {
        switchCheckRef.checked = false;
        for (let i = 0; i < flipCardsRef.length; i++) {
            flipCardsRef[i].classList.remove('trigger-card-flip')
        }
    }
})