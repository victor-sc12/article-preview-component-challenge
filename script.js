const articleFooter = document.getElementById("article-footer");
const footrContentWrapper = articleFooter.querySelector(".footer-content-wrapper");
const shareButton = footrContentWrapper.querySelector(".article-component__btn--share");

shareButton.addEventListener("click", function () {
    const shareButtonIcon = shareButton.querySelector("svg.share-icon");
    const shareOptsSection = footrContentWrapper.querySelector("#article-share-opts");

    articleFooter.classList.toggle("article-component__footer--share-state-bg");
    shareButton.classList.toggle("article-component__btn--share-activated");
    shareButtonIcon.querySelector("path").classList.toggle("activated-shape");
    shareOptsSection.toggleAttribute("hidden");
    shareOptsSection.classList.toggle("article-component__share-opts");
});