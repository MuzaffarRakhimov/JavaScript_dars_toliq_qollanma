// umumlashtirish amali

// << ; >> ifodalar tugaganini bildiradi
// << , >> ifodani ajratish , ifodani davom ettirish uchun ishlatiladi

// let x =5 ; let y = 3; // ifoda to'liq yozish

// let d = 5 , b  = 3 ;  // ifoda qisqa yozish

//-------------------------------------------------------------------------

// kengaytirish amali
// kengaytirish amali Jadval yoki obyekt elementlani , funksiyadi kiruvchi qiymatlani ro'xtini kengaytirish uchun ishalatiladi

// let a=[8,9,25]; b=[12 ,...a]; console.log(b);  // natija [ 12, 8, 9, 25 ]

// let s = {min : 17 }; d = {...s , max : 20  }; console.log (d) // natija { min: 17, max: 20 }

// bu amal jadval , obyekt , funksiyadan boshqa yerda ishlamaydi.

//----------------------------------------------------------------------------

// Yield amali

// bu amal bir qarashda  "return" ga o'xshab ketadi

// function* generateSequence() {
//     let index =0;
//     yield  ++index;
//   }

//   let generator = generateSequence();

//   let one = generator.next();

//   console.log(JSON.stringify(one));

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
// let yosh = 17;
// yosh >18 ? ruxsat = true : alert('Mumkin emas');

//--------------------------------------------------------------------------------

// yoki amali  || orqali bajariladi
 
// let a =1
//     b= 2
//     c=3;

//  console.log(a>b||b>c||c>a); 

//--------------------------------------------------------------------------------

// va amali && orqali bajariladi

// let a = 1, b = 2, c = 3;

// console.log(a<b && b<c);

//--------------------------------------------------------------------------------

// mantiqiy tenglik << == >> << === >>  teng emas << !== >>


// let a=1
//    b=2
//     c=3;
// console.log(a==b); // false
// console.log(b===2); // true
// console.log(b!==2); // false 

//--------------------------------------------------------------------------------

// Taqqoslash  " < ", " > ", "<=", ">=";

// "<" katta 
// ">" kichik
// "<=" katta yoki teng
//">=" kichik yoki teng

// let a = 1, b = 2, c = 3;

// console.log(a<b) // true
// console.log(a>b) // false
// console.log(a<=b) // true
// console.log(a>=b) // false


//--------------------------------------------------------------------------------

// << + >> , << - >> , << / >> , << * >>  amallar

// let a=1 
//     b=2
//     c=3
// console.log(a+b);// 3  qo'shish amali
// console.log(c-b);// 1  ayirish  amali
// console.log(b*b);// 4  ko'patirish amali
// console.log((b+b)/b);// 2  bo'lish amali

//--------------------------------------------------------------------------------

// darajaga oshirish amali << ** >> 

// let a = 3;
// console.log(a**a ); // 27  

//--------------------------------------------------------------------------------

// olddan oshirish amali << ++ >> olddan katirish amali << -- >>

// let a = ++3;
// let b = 33++;
// let c = --3;
// let d = 3--;
// console.log(a);

//--------------------------------------------------------------------------------

// Guruhlash amali () qavus bilan alohi ajratiladi;

let a = 3;
    b=4 ;
    c= 5 ;
    d= 6 ;
console.log(a+(b+c)-d);
