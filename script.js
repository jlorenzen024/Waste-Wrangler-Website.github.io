function clickHandle1() {
    window.location.href = "https://github.com/jlorenzen024";
}

function clickHandle2() {
    window.location.href = "https://www.linkedin.com/in/jacob-lorenzen-304667219";
}

function clickHandle3() {
    window.location.href = "https://www.instagram.com/luna.lancer/?hl=en";
}

function clickHandle4() {
    window.location.href = "https://jlorenzen024.github.io/Rock-Paper-Scissors.github.io/";
}

function clickHandle5() {
    window.location.href = "https://github.com/jlorenzen024/weather-app";
}

function clickHandle6() {
    window.location.href = "https://jlorenzen024.github.io/2022-Resume.github.io/";
}

function clickHandle7() {
    window.location.href = "https://jlorenzen024.github.io/Waste-Wrangler-Website.github.io/"
}

window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}