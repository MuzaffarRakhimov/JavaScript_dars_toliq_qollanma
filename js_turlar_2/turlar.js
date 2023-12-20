//-------- satr ----------------------------------------------------------------
// < "" > <''> belgilar orasidagi yozuv 
// let bilan  o'zgaruvchini elon qilamiz

let js = "JavaScript " ;// satr yani string 
let js2 = ' darslari ' ; // satr yani string


// < ` > yani bak slesh bundan ham foydalanish mumkin
alert(`${js} dasturlash tili`);

// ------Son yani number ----------------------------------------------------------

// butun son  'integer ' yoki qisqa qilib 'int' deyiladi  ----
// haqiqiy son 'float' so'zi bilan belgilanadi  -------------
// cheksizlik "infinity"  ------------------------------------
 
let misol = 2/0; // infinity  

//------------------------------ Sonmas "NAN "----------------------------------------------

let misol2 = "men" / 2 ; // NAN bo'ladi

//----------------------Maxsus qiymatlar -----------------------------------------------------------------------------

// nul hech narsa manosini beruvchi yagona qiymat 
let misol3 = null +12 ; // natijasi 12 bo'ladi
let misol4 = null + '12'; // natijasi null12 bo'ladi



// 'undefined'  o'zgaruvchini elon qilib unga qiymat bermaslik
let misol5;  // natijasi undefined 

// -----------------------Mantiqiy tur ----------------------------------------------------------------

// 'true' rost  va  'false' yolg'on  qiymatlardan birini qabul qiladigan tur "boolean"
// Yolg'on : "false","undefined","null"," 0 " kiradi.
// Rost : "true" , noldan farqli sonlar , bo'shmas satrlar.

let misol6 = 2*2 > 5 ; // false 
let misol7 = 2*2 < 5 ; // true 

// ----------------------- Function -------------------------------------------------------------------------

// funksiyani elon qilish uchun "function" so'zidan foydalaniladi.
function nom(){
    // turli amallar 
    // [return qiymat;]
}

// Colbak function

function colbac(col) {
    setTimeout(() => {
      console.log("colbac 1");
      col();
    }, 2000);
  }
  
  function colbac2() {
    console.log("colbac 2");
  }
  
  colbac(colbac2);
  


// ---------Obyekt ---------------------------------------------------------------------------------------

// obyekt eng murakkab va mukammal tur 

let misol8={               // obyekt 
    ism : 'Muzaffar ',
    yosh : 32 ,
    kasb : 'dasturchi'
}


// Jadval yani 'array'  

let misol9 =[ 'muzaffar', 32 , 'Dasturchi ', 15  , {}]

//----"Typeof" yani  turni aniqlash-----------------------------------------------------------------
// typeof bilan o'zgaruvchini qaysi turga mansubligini aniqlanadi

let misol10 = "Sikript";
typeof(misol10); // natija string 
















