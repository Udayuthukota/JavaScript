var today = new Date();
var hours = today.getHours();
var minitues = today.getMinutes();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}
today = mm + '/' + dd + '/' + yyyy;
console.log(today);
var time = hours + ':' + minitues;
console.log(time);
