const articleFooter = document.getElementById("article-footer");
const footrCtntWrpr = articleFooter.querySelector(".footer-content-wrapper");
const shareButton = footrCtntWrpr.querySelector(".article-component__btn--share");

shareButton.addEventListener("click", function () {
    const shareButtonImage = shareButton.querySelector("img");
    const shareOptsSection = footrCtntWrpr.querySelector("#article-share-opts");

    articleFooter.classList.toggle("article-component__footer--share-state-bg");
    shareButton.classList.toggle("article-component__btn--share-activated");
    shareOptsSection.toggleAttribute("hidden");
    shareOptsSection.classList.toggle("article-component__share-opts");

    if (shareButton.classList.contains("article-component__btn--share-activated")) {
        shareButtonImage.setAttribute("src", "./images/icon-share-white.svg");
    } else {
        shareButtonImage.setAttribute("src", "./images/icon-share.svg");
    }
});