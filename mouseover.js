let header = document.getElementsByTagName("header");
header[0].addEventListener("mousemove", (e) => {
    let object = document.getElementById("svglines");
    let x = e.clientX / 5;
    let y = e.clientY / 5;
    object.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
});