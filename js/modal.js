function openVideo(videoSrc) {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("popupVideo");

    video.src = videoSrc;
    modal.style.display = "flex";
    video.load();
    video.play();

}

function closeVideo() {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("popupVideo");

    video.pause();
    video.currentTime = 0;
    video.src = "";

    modal.style.display = "none";

}

window.addEventListener("click", function(event) {

    const modal = document.getElementById("videoModal");

    if (event.target === modal) {
        closeVideo();
    }

});

document.addEventListener("keydown", function(event){

    if(event.key === "Escape"){
        closeVideo();
    }

});



