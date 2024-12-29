let x=0;

document.getElementById("button1").onclick= function(){
    x++;
    document.getElementById("reading").textContent=x;
}
document.getElementById("button3").onclick= function(){
    x--;
    document.getElementById("reading").textContent=x;
}
document.getElementById("button2").onclick= function(){
    x=0;
    document.getElementById("reading").textContent=x;
}