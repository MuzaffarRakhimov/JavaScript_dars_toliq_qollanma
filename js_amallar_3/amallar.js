// umumlashtirish amali

// << ; >> ifodalar tugaganini bildiradi
// << , >> ifodani ajratish , ifodani davom ettirish uchun ishlatiladi

let x = 5; let y = 3; // ifoda to'liq yozish

let d = 5, b = 3;  // ifoda qisqa yozish

//-------------------------------------------------------------------------

// kengaytirish amali
// kengaytirish amali Jadval yoki obyekt elementlani , funksiyadi kiruvchi qiymatlani ro'xtini kengaytirish uchun ishalatiladi

let a = [8, 9, 25]; b = [12, ...a]; console.log(b);  // natija [ 12, 8, 9, 25 ]

let s = { min: 17 }; d = { ...s, max: 20 }; console.log(d) // natija { min: 17, max: 20 }

//bu amal jadval , obyekt , funksiyadan boshqa yerda ishlamaydi.

//----------------------------------------------------------------------------

// Yield amali

// bu amal bir qarashda  "return" ga o'xshab ketadi

function* generateSequence() {
    let index = 0;
    yield ++index;
}

let generator = generateSequence();

let one = generator.next();

console.log(JSON.stringify(one));

//-----------------------------------------------------------------------------

// Qiymat berish

// Arifmetik amallar << + >> ,<< - >> , << * >> , <</ >> ,<< % >>

// x = y   x = y ;          Qiymat berish
// x + = y   x = x + y ;  ...qo'shish bilan
// x - = y   x = x - y ;  ...ayirish bilan
// x * = y   x = x * y ;  ...ko'paytirish bilan
// x / = y   x = x / y ;   ...bo'lish bilan
// x * = y   x = x ** y ;  ... darajaga oshirish bilan
// x % = y   x = x % y ;   ... qoldiqli bo'lish bilan
// x << = y   x = x << y ;  ... chapga surish bilan
// x >> = y   x = x >> y ;  ... o'nga surish bilan
// x >>> = y   x = x >>> y ; ... faqat musbat surish bilan
// x & = y   x = x & y ;   ... mantiqiy ko'paytirish bilan
// x ^ = y   x = x ^ y ;   ... mantiqiy farqlash bilan
// x | = y   x = x | y ;   ... mantiqiy qo'shish bilan

// -------------------------------------------------------------------------------

// talab amali

// talab ( ?,: ) amali ikki ifodadan birini bajarilishini taminlaydi
let yosh = 17;
yosh > 18 ? ruxsat = true : alert('Mumkin emas');

//--------------------------------------------------------------------------------

// yoki amali  || orqali bajariladi

let a_ = 1
b = 2
c = 3;

console.log(a_ > b || b > c || c > a);

//--------------------------------------------------------------------------------

// va amali && orqali bajariladi

let _a = 1, _b = 2, c = 3;

console.log(_a < _b && _b < c);

//--------------------------------------------------------------------------------

// mantiqiy tenglik << == >> << === >>  teng emas << !== >>


let a1 = 1
b = 2
c = 3;
console.log(a1 == b); // false
console.log(b === 2); // true
console.log(b !== 2); // false 

//--------------------------------------------------------------------------------

// Taqqoslash  " < ", " > ", "<=", ">=";

// "<" katta 
// ">" kichik
// "<=" katta yoki teng
//">=" kichik yoki teng

let a2 = 1, b2 = 2, c2 = 3;

console.log(a2 < b2) // true
console.log(a2 > b2) // false
console.log(b2 <= c2) // true
console.log(b2 >= c2) // false


//--------------------------------------------------------------------------------

// << + >> , << - >> , << / >> , << * >>  amallar

let a3 = 1
b = 2
c = 3
console.log(a3 + b);// 3  qo'shish amali
console.log(c - b);// 1  ayirish  amali
console.log(b * b);// 4  ko'patirish amali
console.log((b + b) / b);// 2  bo'lish amali

//--------------------------------------------------------------------------------

// darajaga oshirish amali << ** >> 

let a__ = 3;
console.log(a__ ** a__); // 27  

//--------------------------------------------------------------------------------

// olddan oshirish amali << ++ >> olddan kamaytirish amali << -- >>

let f = ++3;
let g = 33++;
let h = --3;
let j = 3--;
console.log(f);

//--------------------------------------------------------------------------------

// Guruhlash amali () qavus bilan alohida ajratiladi;

let aa = 3;
b = 4;
c = 5;
d = 6;
console.log(aa + (b + c) - d);
