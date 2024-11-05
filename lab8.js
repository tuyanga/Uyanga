//1. Гараас өгсөн тооны цифрүүдийн нийлбэр нь палимдром мөн эсэхийг шалга//
function bod1(){
document.writeln("<p>1.Цифрүүдийн нийлбэр нь палиндром эсэхийг шалгах програм</p>");
var number=window.prompt("Тоо:");
var numberInt=parseInt(number);
var digit, sum=0, reverse=0;
while(numberInt!=0){
    var digit=numberInt%10;
    sum+=digit;
    numberInt=Math.floor(numberInt/10);
}
var temp=sum;
while(temp!=0){
    reverse=reverse*10+temp%10;
    temp= Math.floor(temp/10);
}
if(reverse==sum){
    document.writeln("<p>Палиндром мөн</p>");
}else{
    document.writeln("<p>Палиндром биш</p>");   
}
}
// 2. Чоно 25 км/ц хурдтай, туулай 18 км/ц хурдтай. Гараас өгсөн зайтай байхад хэдэн минут хэдэн секундын дараа гэхэд гүйцэх вэ
function bod2(){
document.writeln("<p>2.Чоно туулайг гүйцэх хугацааг тооцоолох програм</p>");
var distance=window.prompt("Зай:");
var distanceInt=parseInt(distance);

var rabbitspeed=18*(5/18);
var wolfspeed=25*(5/18);

var time=distanceInt/(wolfspeed-rabbitspeed);
var minutes=Math.floor(time/60);
var seconds=Math.round(time%60);
document.writeln(minutes+" минут "+seconds+" секунд.");
}
// 3. Байшин 9 давхар, 3 орцтой, давхартаа 4 айлтай бол гараас өгсөн тоот нь хэддүгээр орцны хэддүгээр давхарын хэд дэх хаалга вэ
function bod3(){
document.writeln("<p>3.Тоот унших програм</p>");
var toot=window.prompt("Тоот:");
var tootInt=parseInt(toot);
//9 3 4 1=1-36 2=37-73 3=74-109
var davhar=9, orts=3, haalga=4;

orts=Math.floor(toot/(davhar*haalga));2 / 17
if (toot%(davhar*haalga)==0){ 
    document.writeln("Орц:"+orts); 
}
else{
    document.writeln("Орц:",orts+1);
}
toot=toot-(davhar*haalga*orts);
davhar=Math.floor(toot/haalga);
if (toot%haalga==0){
    document.writeln("Давхар:",davhar);
    document.writeln("Хаалга:",haalga);
}
else{
    haalga=toot-davhar*haalga;
    document.writeln("Давхар:",davhar+1);
    document.writeln("Хаалга:",haalga);
}
}
// 4. Array-д өгөгдсөн 5 тооны хамгийн бага ерөнхий хуваагдагчийг ол
function bod4(){
document.writeln("<p>4.5 тооны хамгийн бага ерөнхий хуваагдагчийг олох програм</p>");
var a=[];
var i=0;
while(i<5){
    a[i]=window.prompt("Тоо"+(i+1)+":");
    a[i]=parseInt(a[i]);
    i++;
}

var max_num=Math.max(...a) 
var res = 1;
var x = 2;

while (x <= max_num){
    var indexes=[];

    for (var j = 0; j<5; j++){
        if (a[j] % x == 0){
            indexes.push(j);
        }
    }
    
    if (indexes.length >= 2){
        for (var j = 0; j < indexes.length; j++){
            a[indexes[j]] = a[indexes[j]]/x;
        }
        res*=x;
    }else{
        x++;
    }
}
for (var i = 0; i < 5; i++){
    res*=a[i];
}
document.write("ХБЕХ:"+res);
}
// 5. Вэб сайтруу өглөө ороход гараас өгсөн тооны 2 зэрэгийг, орой ороход гараас өгсөн тооны язгуурыг ол. //
function bod5(){
document.writeln("<p>5.Тооны зэрэг болон язгуур олох програм</p>");
var too=window.prompt("Хувиргах тоо:");
var tooInt=parseInt(too);
var date=new Date();
var hour = date.getHours();

if (hour >= 6 && hour < 18) {
    document.writeln("<p>Таны тооны 2 зэрэг: " + Math.pow(tooInt, 2) + "</p>");
} else {
    document.writeln("<p>Таны тооны язгуур: " + Math.sqrt(tooInt) + "</p>");
}
}
