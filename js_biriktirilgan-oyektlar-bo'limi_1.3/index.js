"use strict";

//-----------son(Number)------------------
new Number(); // obyekt sifatida aniqlanadi

// Numberni xosalari

//------------------------------------------------------------

Number.NaN;

//_________________________________________________________________________
//Numberni obyektini functionlari
//___________________________________________________________________________

Number.isNaN(); // berilgan qiymatni sonligini tekshiradi

let is = "a" / 2;
console.log(isNaN(is)); // true
//-------------------------------------------------------------------

Number.isFinite(); // qiymatni asl sonligini tekshiradi

let isf1 = "a" / 3;
let isf2 = "2" / 2;
console.log(isFinite(isf1)); // false
console.log(isFinite(isf2)); // true
//-------------------------------------------------------

Number.isInteger(); // berilgan qiyamtni aniq butun sonligini tekshiradi

let isi = Number.isInteger(2.4);
let isi2 = Number.isInteger(2);
console.log(isi); // false
console.log(isi2); // true
//---------------------------------------------------------

Number.parseFloat(); // berilgan satrni haqiyqiy songa o'girib beradi

let pa = parseFloat("25aa");
console.log(pa); // 25
//---------------------------------------------------------------

Number.parseInt(); // berilgan satrni faqat butun qismini oladi

let par = parseInt("26.1vdf");
console.log(par); // 26
//-------------------------------------------------------

//____________________________________________________________________________
// Number obyectini biriktirilgan funsiyalari
//____________________________________________________________________________

let num = 100;

//-----------------------------------------------

num.toFixed(); // sonni berilgan aniqlikda yaxlitlaydi

let tof = (55).toFixed(5);
console.log(tof); // 55.00000
//-------------------------------------------------------

num.toLocaleString(); //

let tol = (50).toLocaleString("ru-RU", {
  style: "currency",
  currency: "USD",
});
console.log(tol); // 50$
//---------------------------------------------------------
//-------------------------------------------------------------

num.toString(); // sonni ko'rsatilgan sanoq tizimiga o'girib satr sifatida qaytaradi

let tos = (10).toString(8);
console.log(tos); // "12"
//----------------------------------------------------------------
//_____________________________________________________________________
//----------Satr( String )------------------------------------
//_____________________________________________________________________-

const str = new String("dasturlash");

//---------------------------------------------------------

str.concat(); // satr ortidan berilgan satrlarni birlashtiradi

let con = [1, 2, 3];
let con2 = [4, 5, 6];
let con3 = con.concat(con2, [7, 8, 9]);
console.log(con3); // 1,2,3,4,5,6,7,8,9
//-------------------------------------------------------------

// str.includes(); // satr ichidan qidiriluvchini ko'satilgan o'rni bo'yicha izlaydi

// let inc = "Assalomu alaykom ustoz";
// let inc2 = inc.includes("alaykom"[6]);
// let inc3 = inc.includes("alaykom"[10]);
// console.log(inc2); // true
// console.log(inc3); // false
//------------------------------------------------------------------

// str.endsWith(); // satr berilgan qidiriluvchi bilan yakunlanganini tekshiradi

// let end = "Assalomu alaykom ustoz";
// let end2 = end.endsWith("ustoz");
// let end3 = end.endsWith("alaykom");
// console.log(end2); //true
// console.log(end3); // false
//-------------------------------------------------------------------

// str.startsWith(); //satr berilgan qidiriluchi bilan boshlanganini tekshiradi

// let st = "Assalomu alaykom ustoz";
// let st2 = st.startsWith("Assalomu");
// let st3 = st.startsWith("ustoz");
// console.log(st2); // true
// console.log(st3); // false
//-----------------------------------------------------------------

str.indexOf(); // satr ichida berilgan indexdan boshlab qidiriluvchini o'rni qaytaradi

let ind = "Assalomu alaykom ustoz";
let ind2 = ind.indexOf("alaykom"[4]);
console.log(ind2); // 13
//---------------------------------------------------------------------

//---------------------------------------------------------------------------

// str.localeCompare(); // ko'rsatilgan satr asos satrdan alifbo tartibida oldin ekanligini tekshiradi

// let loc = "HTML".localeCompare("css");
// console.log(loc);
//-----------------------------------------------------------------------

// str.padEnd(); // satr belgilangan uzunlikka yetguncha qiymat berilgan bo'lsa qiymatni unda bo'sh joyni oxiridan ulab boradi

// let pad = "js".padEnd(6);
// let pad2 = "js".padEnd(10, "ss");
// console.log(pad); //"js     " bo'sh joy qo'shdi
// console.log(pad2); // "jsssssssss" ss ulab chiqdi
//----------------------------------------------------------------------

// str.padStart(); // satr belgilangan uzunlikka yetguncha qiymat berilgan bo'lsa qiymatni unda bo'sh joyni boshidan ulab boradi

// let pads = "js".padStart(6);
// let pads2 = "js".padStart(10, "str");
// console.log(pads); // "    js" // boshidan bo'sh joy qo'shdi
// console.log(pads2); // "srtsrtstjs" // strni boshidan qo'shib chiqdi
//---------------------------------------------------------------------------

// str.repeat(); // satrni ko'rsatilgan karra marotaba takrorlab ko'satadi

// let rep = "js".repeat(5);
// console.log(rep); // jsjsjsjsjs
//------------------------------------------------------------------

str.replace(); // qism satrini almashtiradi

let repl = "JavaScript".replace("S", "$");
console.log(repl); // Java$cript
//----------------------------------------------------------------------

str.slice(); // belgilangan index orasidagi satrni kesib oladi

let sli = "JavaScript".slice(2, 4);
let sli2 = "JavaScript".slice(-8, 4);
console.log(sli); // va
console.log(sli2); // va
//----------------------------------------------------------------------

str.split(); // satrni berilgan ajratuvchi yordamida bo'laklarga bo'lib jadval sifatida qaytaradi

let spl = "png|gif|jpg".split("|");
let spl2 = "HTML,XML,SVG".split(",", 2);
console.log(spl); // [ 'png', 'gif', 'jpg' ]
console.log(spl2); // [ 'HTML', 'XML' ]
//---------------------------------------------------------------------

str.toLowerCase(); // satrni faqat kichik hariflarga ifodalaydi

let tolo = "JAVASCRIPT".toLowerCase();
console.log(tolo);
//----------------------------------------------------------------

str.toUpperCase(); // satirni kichik hariflarini bosh harifga o'girib beradi

let tou = "javascript".toUpperCase();
console.log(tou); // JAVASCRIPT
//----------------------------------------------------------------

str.toString();
//-------------------------------------------------------------

str.trim(); //satrni boshi va oxiridagi bo'sh joylarni olib taylaydi

let tr = "  JavaScript  ".trim();
console.log(tr); // JavaScript
//----------------------------------------------------------------

str.valueOf();
//------------------------------------------------------------------

//_________________________________________________________________________________
//------- Jadval ( Array ) obyekti-------------------------------
//_______________________________________________________________________________

const ar = new Array(5, 4, { id: 1 }, [1, 2, 3]);
let ar2 = ar.length;
console.log(ar2); // 4
//--------------------------------------------------------

// Array.from(); // jadvalga aylantirish mumkin bo'lgan obyektlardan yangi jadval yaratadi

// let fr = Array.from("JS");
// let fr2 = Array.from([1, 2, 3, 4], (js) => 3 * js);
// console.log(fr); // [ 'J', 'S' ]
// console.log(fr2); // [ 3,6,9,12 ]
//-----------------------------------------------------------------

Array.isArray(); // berilgan obyektni jadvalligini tekshiradi mantiqiy tur qaytaradi

let isa = Array.isArray([1, 2, 3]);
let isa2 = Array.isArray({ id: 1 });
console.log(isa); // true
console.log(isa2); // false
//-----------------------------------------------------------------

//_______________________________________________________________
//Array qiymatini o'zgartiradigan usullar
//_________________________________________________________________

let a = [1, 2, 3, 4, 5, 6];
//----------------------------------------------------------------

// a.copyWithin();
//----------------------------------------------------------------

// a.fill();
//----------------------------------------------------------------

a.pop(); //oxirgi elementni qaytaradi va uni jadvaldan o'chirib taylaydi

let raq = [1, 2, 3, 4, 5, 6, 7];
let raq2 = raq.pop();
console.log(raq2); // [ 1,2,3,4,5,6]
//-------------------------------------------------------------------

a.push(); // jadval davomidan yangi element qo'shadi va hosil bo'lgan jadval uzunligini qaytaradi

let pu = [1, 2, 3, 4];
let pu2 = pu.push(5, 6);
console.log(pu2); // [1,2,3,4,5,6]
//----------------------------------------------------------------------

a.reverse(); // jadvalni teskari tartiblaydi

let re = [1, 2, 3];
let re2 = re.reverse();
console.log(re2); // [ 3,2,1 ]
//----------------------------------------------------------------------
//a.shift();
a.splice();
a.sort();
//a.unshift();
a.concat();
a.includes();
a.join();
a.toString();
a.indexOf();
a.forEach(); //yaxshi o'rganish kerak
a.entries();
a.every(); //kerakli
// a.some();
a.filter();
a.find();
a.findIndex();
a.keys();
a.map();
a.reduce();
a.reduceRight();

//-----------------To'plam ( Set ) obyekti-----------------------------------------------

let set = new Set([]);

set.add();
set.clear();
set.delete();
set.entries();
set.forEach();
set.has();

//-------Mantiqiy tur ( Boolean) -----------------------------

new Boolean([]);

if (shart) {
} else {
}

//---------------Sana ( Date ) obyekti----------------

new Date();
Date.now();
Date.parse();
Date.UTC();

// Dade obyektini  uslublari

let d = new Date();

d.getTimezoneOffset();
d.getTime();
d.getDate();
d.getDay();
d.getFullYear();
d.getHours();
d.getMilliseconds();
d.getMinutes();
d.getMonth();
d.getSeconds();
d.setTime();

//Date obyektini qiymatini satr sifatida qaytaradi
d.toString();
d.toDateString();
d.toISOString();
d.toJSON();
d.toLocaleDateString();
d.toTimeString();
d.toUTCString();

//-----------Matematika ( Math ) obyekti---------------------------

// Math.E;
// Math.LN2;
// Math.LN10;
// Math.LOG10E;
// Math.LOG2E;
// Math.PI;
// Math.SQRT1_2;
// Math.SQRT2;

// matematik funksiyalarni bajarish uchun
// Math.exp();
// Math.expm1();
// Math.abs();
// Math.cos();
// Math.cosh();
// Math.acos();
// Math.acosh();
// Math.asin();
// Math.asinh();
// Math.atan();
// Math.atan2();
// Math.cbrt();
// Math.ceil();
// Math.floor();
// Math.hypot();
// Math.log();
// Math.log1p();
// Math.log2();
// Math.log10();
// Math.max();
// Math.min();
Math.pow();
Math.random();
Math.round();
// Math.sin();
// Math.sinh();
// Math.sign();
// Math.sqrt();
// Math.tan();
// Math.tanh();
Math.trunc();

//-------------Obyekt ( Object )-------------------

new Object([]);

let ob = { b: 2, c: "u" };
ob.d;
ob.__proto__ = { d: 9 };
Date.prototype.asr = 21; // o'rganish kerak kerakli
//-----------obyekt tamoyillari--------------

Object.assign();
Object.create();
Object.defineProperties();
Object.defineProperty();
Object.preventExtensions();
Object.freeze();
Object.getOwnPropertyNames();
Object.getOwnPropertyDescriptor();
Object.getPrototypeOf();
Object.seal();
Object.is();
Object.isExtensible();
Object.isFrozen();
Object.isSealed();
Object.keys();
Object.setPrototypeOf();

//---------Xarita ( Map )-------------------------------

let mp = new Map([]);

mp.get();
mp.set();
mp.clear();
mp.delete();
mp.has();
mp.size();
mp.entries();
mp.forEach();
mp.keys();
mp.values();

//-----------JSON----------------------------------------

JSON.parse();
JSON.stringify();
