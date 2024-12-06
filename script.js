function menu() {
    var menuRow = document.querySelectorAll(".menu-row")
    menuRow.forEach(function (row) {
        row.addEventListener("click", function () {
            row.querySelector(".dropdownIcon").classList.toggle("rotate")
            row.querySelector(".menu-row-btm").classList.toggle("max-h-0")
        })
    })

    var menuBtn = document.querySelector(".menu-icon")
    var closeIcon = document.querySelector(".close-icon")
    menuBtn.addEventListener("click", function () {
        document.querySelector(".phone-menu").style.height = "100vh"
        document.querySelector(".phone-menu").style.transition = "all 0.3s linear"
    })

    closeIcon.addEventListener("click", function () {
        document.querySelector(".phone-menu").style.height = "0vh"
        document.querySelector(".phone-menu").style.transition = "all 0.3s linear"
    })
}

function ugcVideos() {
    var playPauseIcon = document.querySelectorAll(".playIcon")
    var muteUnmuteIcon = document.querySelectorAll(".mute-unmute-btn .volumeIcon")
    var videos = document.querySelectorAll(".videoshow")
    var coverImgs = document.querySelectorAll(".coverimg")

    playPauseIcon.forEach(function (icon, index) {


        icon.addEventListener("click", function () {
            playPauseIcon.forEach(function (otherIcon, otherIndex) {
                if (otherIndex != index) {
                    var otherVideos = document.querySelectorAll(".videoshow")
                    var otherCoverImgs = document.querySelectorAll(".coverimg")
                    otherVideos[otherIndex].pause()
                    otherCoverImgs[otherIndex].style.display = "block"
                    otherIcon.classList.remove("ri-pause-fill")
                    otherIcon.classList.add("ri-play-fill")
                }
            })

            if (icon.classList.contains("ri-play-fill")) {
                icon.classList.remove("ri-play-fill")
                icon.classList.add("ri-pause-fill")
                coverImgs[index].style.display = "none"
                videos[index].play()
            }
            else {
                icon.classList.remove("ri-pause-fill")
                icon.classList.add("ri-play-fill")
                coverImgs[index].style.display = "block"
                videos[index].pause()
            }
        })
    })

    muteUnmuteIcon.forEach(function (muIcon, index) {
        muIcon.addEventListener("click", function () {

            if (muIcon.classList.contains("ri-volume-mute-line")) {
                muIcon.classList.remove("ri-volume-mute-line")
                muIcon.classList.add("ri-volume-up-line")
                videos[index].muted = false
            }
            else {
                muIcon.classList.remove("ri-volume-up-line")
                muIcon.classList.add("ri-volume-mute-line")
                videos[index].muted = true
            }
        })
    })

}


function influencers() {
    var influencerSections = document.querySelectorAll(".influencer");

    influencerSections.forEach(function (section) {
        var video = section.querySelector("video");
        var image = section.querySelector("img");

        section.addEventListener("mouseenter", function () {
            if (image.classList.contains("block")) {
                video.play();
                image.classList.remove("block");
                image.classList.add("hidden");
            } else {
                video.pause();
                image.classList.remove("hidden");
                image.classList.add("block");
            }
        });
        section.addEventListener("mouseleave", function () {
            video.pause();
            image.classList.remove("hidden");
            image.classList.add("block");
        })
    });
}


function faqSection(){
    var faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        var faqAnswer = item.querySelector(".faq-answer");
        var icon = item.querySelector("i");
        var isOpen = false;
    
        item.addEventListener("click", () => {
            if (isOpen) {
                gsap.to(faqAnswer, { height: 0, duration: 0.2, ease: "power2.inOut" });
            } else {
                gsap.to(faqAnswer, {
                    height: "auto", duration: 0.2, ease: "power2.inOut",
                });
            }
    
            icon.classList.toggle("ri-subtract-fill");
            isOpen = !isOpen; 
        });
    });
    
}

menu()
ugcVideos()
influencers()
faqSection()


