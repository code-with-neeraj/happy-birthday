
// let firstSlideContainer = 
// document.getElementsByClassName("slide--content")[0];

// let secondSlideContainer = 
// document.getElementsByClassName("slide--content--one")[0];

// let secondCanvas = 
// document.getElementsByClassName("second--canvas")[0];

// secondSlideContainer.setAttribute("style","display:none");
// secondCanvas.setAttribute("style","display:none");

// let thirdCanvas = 
// document.getElementsByClassName("third--canvas")[0];

// thirdCanvas.setAttribute("style","display:none");





// let containerToggleOne = setTimeout(function(){
// 	firstSlideContainer.setAttribute("style","display:none");
// 	secondSlideContainer.setAttribute("style","display:block");
// },2500);


// let removeFirstSlide = setTimeout(function(){
// 	document.getElementsByClassName("first--slide")[0].setAttribute("style","display:none;")
// 	secondCanvas.setAttribute("style","display:block");
// },6500);

// let removeSecondCanvas = setTimeout(function(){
// 	secondCanvas.setAttribute("style","display:none");
// 	thirdCanvas.setAttribute("style","display:block")
// },9800)



let firstSlideContainer = document.getElementsByClassName("slide--content")[0];
let secondSlideContainer = document.getElementsByClassName("slide--content--one")[0];
let secondCanvas = document.getElementsByClassName("second--canvas")[0];
let thirdCanvas = document.getElementsByClassName("third--canvas")[0];
let forthCanvas = document.getElementsByClassName("forth--canvas")[0]; // New forthCanvas element

// Hide secondSlideContainer, secondCanvas, thirdCanvas, and forthCanvas initially
secondSlideContainer.setAttribute("style", "display:none");
secondCanvas.setAttribute("style", "display:none");
thirdCanvas.setAttribute("style", "display:none");
forthCanvas.setAttribute("style", "display:none"); // Hide forthCanvas initially

// Show secondSlideContainer after 2.5 seconds
let containerToggleOne = setTimeout(function() {
    firstSlideContainer.setAttribute("style", "display:none");
    secondSlideContainer.setAttribute("style", "display:block");
}, 2500);

// Hide first slide and show secondCanvas after 6.5 seconds
let removeFirstSlide = setTimeout(function() {
    document.getElementsByClassName("first--slide")[0].setAttribute("style", "display:none;");
    secondCanvas.setAttribute("style", "display:block");
}, 6500);

// Hide secondCanvas and show thirdCanvas after 9.8 seconds
let removeSecondCanvas = setTimeout(function() {
    secondCanvas.setAttribute("style", "display:none");
    thirdCanvas.setAttribute("style", "display:block");
}, 9800);

// New timeout: Hide thirdCanvas and show forthCanvas after 12.5 seconds
let removeThirdCanvas = setTimeout(function() {
    thirdCanvas.setAttribute("style", "display:none");
    forthCanvas.setAttribute("style", "display:block");
}, 16500);

let fifthCanvas = document.getElementsByClassName("fifth--canvas")[0];
fifthCanvas.setAttribute("style", "display:none");


let removeForthCanvas = setTimeout(function() {
    forthCanvas.setAttribute("style", "display:none");
    fifthCanvas.setAttribute("style", "display:block");
}, 18000);
