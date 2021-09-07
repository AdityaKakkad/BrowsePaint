var canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var mouse_event= "empty"

var lst_pst_x,lst_pst_y;

color= "black";
width_of_line= 5;

canvas.addEventListener("mousedown",ms_dwn);

function ms_dwn(e) {
    mouse_event="mousedown";
    color= document.getElementById("color").value;
    width_of_line= document.getElementById("width_of_line").value;
}

canvas.addEventListener("mouseup",ms_up);

function ms_up(e) {
    mouse_event="mouseup";
}

canvas.addEventListener("mouseleave",ms_lv);

function ms_lv(e) {
    mouse_event="mouseleave";
}

canvas.addEventListener("mousemove",ms_mv);

function ms_mv(e) {
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;   
if(mouse_event=="mousedown") {
    ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth=width_of_line;
 ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 50, 0)

console.log("Last Position Of X&Y cordinates:");
console.log("x="+lst_pst_x+"y="+lst_pst_y);
ctx.moveTo(lst_pst_x,lst_pst_y);

console.log("Current Position Of X&Y cordinates:");
console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
}

lst_pst_x= current_position_of_mouse_x;
lst_pst_y= current_position_of_mouse_y;
}

function erase() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
