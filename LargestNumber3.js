var a = 2;
var b = 3;
var c = 4;
var d = 5;
var e = 6;
if (a > b && a > c && a > d && a > e) {
    console.log(a);
}
else if (b > c && b > d && b > e) {
    console.log(b);
}
else if (c > d && c > e) {
    console.log(c);
}
else if (d > e) {
    console.log(d);
}
else {
    console.log(e);
}