const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top:"+(e.pageY - 25)+"px; left:"+(e.pageX - 25)+"px;");
})