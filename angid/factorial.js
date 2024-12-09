function Factorial(n){
    if(n===0 || n===1){
        return 1;
    }
    return n*Factorial(n-1);
};

document.writeln("<p>1.Factorial oloh progamm</p>");
var number=window.prompt("Тоо n:");
var n=parseInt(number);
var result=Factorial(n);
document.writeln("ur dun:" + result);


countDown(30, "status");

  function visit() {
    let visitCounter = parseInt(localStorage.getItem('visitCounter'))||0;
    visitCounter++;
    localStorage.setItem('visitCounter', visitCounter);
}
visit ();