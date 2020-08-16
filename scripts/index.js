"use strict";
window.onload = () => {
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    let arrowPrev = document.querySelector(".arrow-prev");
    let arrowNext = document.querySelector(".arrow-next");

    let arrowObjPrev = {
        arrow: arrowPrev,
        error: function(i) {
            return i - 1 < 0;
        },
        errorIndex: function(slides) {
            return slides.length - 1;
        },
        notErrorIndex: function(i) {
            return i - 1;
        }
    }

    let arrowObjNext = {
        arrow: arrowNext,
        error: function(i, slides) {
            return i + 1 > slides.length-1;
        },
        errorIndex: function() {
            return 0;
        },
        notErrorIndex: function(i) {
            return i + 1;
        }
    }
    
    function setActiveDot(i, classListFunc) {
        if (classListFunc === "remove") {
            dots[i].classList.remove("dot-active");
        }
        if (classListFunc === "add") {
            dots[i].classList.add("dot-active");
        }
    }


    function clickBtnSlider(obj) {
        obj.arrow.onclick = (e) => {
            for (let i = 0; i < slides.length; i++) {
                if (slides[i].classList.contains("slide-active")) {
                    slides[i].classList.remove("slide-active");
                    setActiveDot(i, "remove");
                    if (obj.error(i, slides)) {
                        slides[obj.errorIndex(slides)].classList.add("slide-active");
                        setActiveDot(obj.errorIndex(slides), "add");
                        return;
                    } else {
                        slides[obj.notErrorIndex(i)].classList.add("slide-active");
                        setActiveDot(obj.notErrorIndex(i), "add");
                        return;
                    }
                }
            }
        }
    
    }

    clickBtnSlider(arrowObjPrev);
    clickBtnSlider(arrowObjNext);

}