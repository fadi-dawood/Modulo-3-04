let CollBtn = Array.from(document.getElementsByClassName("collassare"))
let rowToHide = Array.from(document.getElementsByClassName("to-hide"))
CollBtn.forEach((element, index) => {
    element.addEventListener("click", () => {
        rowToHide[index].classList.toggle("nascondi");
    });
});


let nViaggi = Array.from(document.getElementsByClassName("travle"))
console.log(nViaggi.length)

