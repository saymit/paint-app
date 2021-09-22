canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="red";
var mouseEvent="empty";
var last_x,last_y;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent="mousedown";
}


canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_x=e.clientX - canvas.offsetLeft;
    current_y=e.clientY- canvas.offsetTop;

    if(mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2;
        
        console.log("last position of x and y");
        console.log(last_x,last_y);

        ctx.moveTo(last_x,last_y);

        console.log("current position of x and y");
        console.log(current_x,current_y);

        ctx.lineTo(current_x,current_y);
        ctx.stroke();

    }
    last_x=current_x;
    last_y=current_y;
}