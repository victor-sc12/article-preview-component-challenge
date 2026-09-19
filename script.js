const articleFooter = document.getElementById("article-footer");
const shareButton = articleFooter.querySelector(".article-component__btn--share")

shareButton.addEventListener("click", function () {
    const footerWrapper = document.getElementById("footer-container");
    const shareButtonImage = shareButton.querySelector("img");
    
    footerWrapper.classList.toggle("footer-wrapper");
    shareButton.classList.toggle("article-component__btn--share-activated");
    
    if (shareButton.classList.contains("article-component__btn--share-activated")) {
        shareButtonImage.setAttribute("src", "./images/icon-share-white.svg")
    } else {
        shareButtonImage.setAttribute("src", "./images/icon-share.svg")
    }

    for (const element of articleFooter.children) {
        if (element === shareButton) continue;

        if (getComputedStyle(element).getPropertyValue("display") === "none"){
            element.style.setProperty("display", "initial");
        } else {
            element.style.setProperty("display", "none");
        }
    }
});