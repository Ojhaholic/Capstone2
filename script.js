gsap.from(".trig1", {
    scale: 0.6,
    scrollTrigger: {
        trigger: ".trig1",
        scroller: "body",
        // markers : true,
        start: "top 99%",
        end: "bottom 20%",
        scrub: true
    }
})

gsap.from(".nleft", {
    scale: 0.4,
    y: -10,
    delay: 3,
    opacity: 0,
    duration: 1
})
gsap.from(".nright", {
    y: -10,
    delay: 0.5,
    opacity: 0,
    duration: 1
})

gsap.from(".section1 p", {
    y: 50,
    delay: 0.5,
    opacity: 0,
    duration: 1
})

gsap.to(".section3 h1", {
    transform: "translate(-200%)",
    scrollTrigger: {
        trigger: ".section3 h1",
        scroller: "body",
        // markers : true,
        start: "top 1%",
        end: "bottom 50%",
        scrub: 3,
        pin: true
    }
})

gsap.from(".text", {
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: ".section4",
        scroller: "body",
        // markers: true,
        start: "top 10%",
        end: "bottom 50%",
    }
})

window.addEventListener("wheel", (e)=>{
    var move = e.deltaY
    if (move>0) {
        gsap.to(".marque", {
            x:-2000,
            duration:40,  
    })
    gsap.to(".marque img", {
        rotate : 180  
})
        
    } else {
        gsap.to(".marque", {
            x:2000,
            duration:40,
            
        })
        gsap.to(".marque img", {
            rotate : 360  
    })
    }
    
})


window.addEventListener("mousemove", (e)=>{
    gsap.to(".pointer" , {
        x : e.x,
        y : e.y,
    })
})


// projects section starts here

var sec = document.querySelector(".wizardZ")
sec.addEventListener("mousemove", ()=>{
    // alert("ji")
    document.querySelector(".wizimg").classList.add("show")
    gsap.to(".pointer", {
        scale: 5,
    })
})

sec.addEventListener("mouseleave", ()=>{
    // alert("ji")
    document.querySelector(".wizimg").classList.remove("show")
    gsap.to(".pointer", {
        scale: 1,
    })
})

//project section ends

