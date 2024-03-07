//alert('hello this is an example');
function ageIn(){
let dayH = prompt('enter the date you were born');
let monthH=prompt('enter the month you were born');
let yearH=prompt('enter the year you were born');

var today = new Date();
let d = today.getDate();
let m = today.getMonth();
let y = today.getFullYear();
console.log("years today:"+yearH);

let MaxDays=0;
let MonthNum=1;
console.log("day"+d+"month"+m+"year"+y);
if(m==1){
    MaxDays=31;
    MonthNum=1;
}
if(m==2){
    MaxDays=28;
    MonthNum=2;
}
if(m==3){
    MaxDays=31;
    MonthNum=3;
}
if(m==4){
    MaxDays=30;
    MonthNum=4;
}
if(m==5){
    MaxDays=31;
    MonthNum=5;
}
if(m==6){
    MaxDays=30;
    MonthNum=6;
}
if(m==7){
    MaxDays=31;
    MonthNum=7;
}
if(m==8){
    MaxDays=31;
    MonthNum=8;
}
if(m==9){
    MaxDays=30;
    MonthNum=9;
}
if(m==10){
    MaxDays=31;
    MonthNum=10;
}
if(m==11){
    MaxDays=30;
    MonthNum=11;
}
if(m==12){
    MaxDays=31;
    MonthNum=12;
}

var ageYears = y - yearH;
console.log("final "+ageYears);
if(m<=monthH){
    m=m+12;
}
var ageMonth=m - monthH;
console.log("month "+ageMonth);
console.log("max days "+(MaxDays-d));

var ageDays = (MaxDays - d) + parseInt(dayH);
console.log("days final "+ageDays);
document.getElementById('final').innerHTML=ageYears+" YEARS "+ageMonth+" MONTH "+ageDays+" DAYS";

}
function reset(){
    document.getElementById('final').innerHTML="";
    
}