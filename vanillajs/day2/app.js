// boolean ->  true false

const amIFat = false; //or true or null -> 변수에 아무것도 없다(false랑은 다름)
let something; // 정의해주지 않음
console.log(amIFat);
console.log(something); //undefined 라고 출력

const mon ="mon";
const tue ="tue";
const wed ="wed";
const thu ="thu";
const fri ="fri";
const sat ="sat";
const sun ="sun";

// const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;  
const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]; //array
console.log(daysOfWeek); 

