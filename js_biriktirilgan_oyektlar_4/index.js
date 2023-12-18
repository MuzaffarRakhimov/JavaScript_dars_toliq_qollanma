//-----------son(Number)------------------
new Number(); // obyekt sifatida aniqlanadi

// Numberni xosalai
Number.EPSILON;
Number.MAX_SAFE_INTEGER;
Number.MAX_VALUE;
Number.MIN_SAFE_INTEGER;
Number.MIN_VALUE;
Number.NaN;
Number.NEGATIVE_INFINITY;
Number.POSITIVE_INFINITY;

//Numberni obyektini functionlari
Number.isNaN();
Number.isFinite();
Number.isInteger();
Number.isSafeInteger();
Number.parseFloat();
Number.parseInt();
Number.call();

// Number obyectini biriktirilgan funsiyalari

let num = 100;

num.toExponential();
num.toFixed();
num.toLocaleString();
num.toPrecision();
num.toString();
num.valueOf();

//----------Satr( String )------------------------------------

const str = new String("dasturlash");

String.fromCharCode();
str.charAt();
str.charCodeAt();
str.concat();
str.includes();
str.endsWith();
str.startsWith();
str.indexOf();
str.lastIndexOf();
str.localeCompare();
str.padEnd();
str.padStart();
str.repeat();
str.replace();
str.slice();
str.split();
str.substring();
str.toLowerCase();
str.toUpperCase();
str.toString();
str.trim();
str.valueOf();

//------- Jadval ( Array ) obyekti-------------------------------

const ar = new Array();

ar.length;
Array.from();
Array.isArray();
Array.of();

//Array qiymatini o'zgartiradigan usullar

let a = [1, 2, 3, 4, 5, 6];

a.copyWithin();
a.fill();
a.pop();
a.push();
a.reverse();
a.shift();
a.splice();
a.sort();
a.unshift();
a.concat();
a.includes();
a.join();
a.toString();
a.indexOf();
a.lastIndexOf();
a.forEach();
a.entries();
a.every();
a.some();
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

//-------Mantiwqiy tur ( Boolean) -----------------------------

 new Boolean([])

 if(shart){

 }
 else{

 };

 //---------------Sana ( Data ) obyekti----------------

 new Date()
 Date.now()
 Date.parse()
 Date.UTC()
 
 // Dade obyektini  uslublari
 
 let d = new Date()

 d.getTimezoneOffset()
 d.getTime()
 d.getDate()
 d.getDay()
 d.getFullYear()
 d.getHours()
 d.getMilliseconds()
 d.getMinutes()
 d.getMonth()
 d.getSeconds()
 d.setTime()

 //Date obyektini qiymatini satr sifatida qaytaradi
 d.toString()
 d.toDateString()
 d.toISOString()
 d.toJSON()
 d.toLocaleDateString()
 d.toTimeString()
 d.toUTCString()

//-----------Matematika ( Math ) obyekti---------------------------

Math.E
Math.LN2
Math.LN10
Math.LOG10E
Math.LOG2E
Math.PI
Math.SQRT1_2
Math.SQRT2

// matematik funksiyalarni bajarish uchun 
Math.exp()
Math.abs()
Math.acos()
Math.acosh()
Math.asin()
Math.asinh()
Math.atan()
Math.atan2()
Math.cbrt()
Math.ceil()
Math.cos()
Math.cosh()
Math.expm1()
Math.floor()
Math.hypot()
Math.log()
Math.log10()
Math.log1p()
Math.log2()
Math.max()
Math.min()
Math.pow()
Math.random()
Math.round()
Math.sin()
Math.sinh()
Math.sign()
Math.sqrt()
Math.tan()
Math.tanh()
Math.trunc()

//-------------Obyekt ( Object )-------------------

new Object([])

let ob = {b:2,c:'u'};
ob.d
ob.__proto__ ={d:9}

//-----------obyekt tamoyillari--------------

Object.assign()
Object.create()
Object.defineProperties()
Object.defineProperty()
Object.preventExtensions()
Object.freeze()
Object.getOwnPropertyDescriptor()
Object.getPrototypeOf()
Object.seal()
Object.is()
Object.isExtensible()
Object.isFrozen()
Object.isSealed()
Object.getOwnPropertyNames()
Object.keys()
Object.setPrototypeOf()

//---------Xarita ( Map )-------------------------------

 let mp = new Map([]);

mp.get()
mp.set()
mp.clear()
mp.delete()
mp.has()
mp.size()
mp.entries()
mp.forEach()
mp.forEach()
mp.keys()
mp.values()

//-----------JSON----------------------------------------

JSON.parse()
JSON.stringify()


