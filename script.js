

//Designation Changer
var typeData = new Typed(".role", {
    strings: [
        "Web Developer",
        "Front-End Developer",
        "Coder",
        "Problem Solver"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");


// Modal OPEN function
const openModal=() => {
    console.log("Modal is OPEN");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

// Modal CLOSE function 

const closeModal=() => {
    console.log("Modal is OPEN");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};
