let headerTitle = document.querySelector(".header__title")
let headerTxt = document.querySelector(".header__txt")



function fn(text, speed) {
   
    let txt = text.innerHTML
    text.innerHTML = ""

    function str(x = 0) {
        text.innerHTML += txt[x]
        x++

        if (x < txt.length) {
            setTimeout(() => {
                str(x)
            }, speed);
        }
    }

    str()
}

fn(headerTitle, 80)
fn(headerTxt, 20)



// btn

let btn = document.querySelectorAll(".btn")

btn.forEach(btns => {
    btns.addEventListener("mousemove", function (e) {
        // this.innerHTML = this.offsetLeft - e.pageX
        // this.innerHTML = e.pageY - this.offsetTop
        // this.innerHTML = e.pageX

        const X = e.pageX - this.offsetLeft - 100
        const Y = e.pageY - this.offsetTop - 100
        console.log(X);

        this.style.setProperty("--x", `${X}px`)
        this.style.setProperty("--y", `${Y}px`)
    })
});

// btn

// burger
let burger = document.querySelector(".nav__burger")
let menu = document.querySelector(".nav__menu")
let footerEnd = document.querySelector(".footer__end")

burger.addEventListener("click", function () {
    menu.classList.toggle("active")
})
// burger

// logotips
let map = document.querySelector(".footer__content")
let boxes = document.querySelector(".boxes")
let aboutme = document.querySelector(".aboutme")
let mainContent = document.querySelector(".container")

window.addEventListener("scroll", () => {
    
    fadeAnim(map, "top")
    fadeAnim(footerEnd, "right")
    fadeAnim(footerEnd, "left")
    fadeAnim(boxes, "right", 3)
    fadeAnim(boxes, "left", 3)
    fadeAnim(boxes, "bottom", 3)
    fadeAnim(aboutme, "bottom")
    fadeAnim(mainContent, "bottom")

   
})

function fadeAnim(div, dirAnim, coor = 1) {
    let faderight = div.querySelectorAll(".fade-right")
    let fadeleft = div.querySelectorAll(".fade-left")
    let fadetop = div.querySelectorAll(".fade-top")
    let fadebottom = div.querySelectorAll(".fade-bottom")
    if (dirAnim == "right") {
        faderight.forEach(faderights => {
            if (window.scrollY >= div.offsetTop - div.offsetHeight / coor) {
                faderights.classList.add("active")
            } else {
                faderights.classList.remove("active")
            }
        });
    } else if (dirAnim == "left") {
        fadeleft.forEach(fadelefts => {
            if (window.scrollY >= div.offsetTop - div.offsetHeight / coor) {
                fadelefts.classList.add("active")
            } else {
                fadelefts.classList.remove("active")
            }
        });
    } else if (dirAnim == "top") {
        fadetop.forEach(fadetops => {
            if (window.scrollY >= div.offsetTop - div.offsetHeight / coor) {
                fadetops.classList.add("active")
            } else {
                fadetops.classList.remove("active")
            }
        });
    } else if (dirAnim == "bottom") {
        fadebottom.forEach(fadebottoms => {
            if (window.scrollY >= div.offsetTop - div.offsetHeight / coor) {
                fadebottoms.classList.add("active")
            }
            else {
                fadebottoms.classList.remove("active")
            }
        });
    }
}
// logotips
// design
const design = document.querySelectorAll(".bgdg")

window.addEventListener("scroll", (e) => {
    // console.log(e.pageX);
    design.forEach(designs => {

        const speed = +designs.getAttribute("data-speed");

        designs.style.transform = `translateX(${this.scrollY * speed}px) rotate(${this.scrollY * speed / 2}deg)`
        // designs.style.transform = `rotate(${this.scrollY * speed}deg)`

    })
})
// design