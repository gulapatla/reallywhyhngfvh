function calculate(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    a= parseInt(a);
    b=parseInt(a);
    var c = a*b;
    var d = a + b;
    var e = 2*d;
    document.getElementById("h1").innerHTML = c;
    document.getElementById("h2").innerHTML = e;
}