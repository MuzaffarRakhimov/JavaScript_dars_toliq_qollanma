//Tanlash operatori
// 'if', 'else' operator

if (6 > 5) {
  console.log("6 soni katta ");
} else {
  console.log("5 soni katta");
}

//------terneriy { shart ? true : false } operatori----------------

let a = 20;
let b = 30;

a > b ? true : false;

// -----SWitch --------------------------------------------------
let ol = "olma";
switch (ol) {
  case "olma":
    console.log("yabloko");
    break;
  case "bir":
    console.log("adin");
    break;
  default:
    ol;
}

//------------------For loop ( takrorlash )---------------------------------------

for (let i = 0; i < 4; i++) {
  //console.log(i)
}

//---------------for... in ------Obyekt uchun yaxshi -----------------------------------

let aa = [1, 2, 3, 4, 5, 6];

for (let son in aa) {
  let bb = son;
  console.log(bb);
}

//----------------------for ...of ---- array uchun yaxshi---------------------

let ss = [1, [], {}, "aa", 2];

for (let ol of ss) {
  let natija = ol;
  console.log(natija);
}

//-------------------While---------------------------------------

let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}

//----------------------do...while-----------------------------

let j = 0;

do console.log(i++);
while (i < 5);

//--------------------break va continue ----------------------

for (r of ff)
  for (e of rr) {
    if (typeof e == "string") continue;
    s += e;
  }

for (f of di) {
  let natija = true;
  for (x of f) {
    if (f % x == 0) break;
    let natija = false;
  }
  return natija;
}

//-------------------------Talab operatorlari---------------------------------

//----------------------Try operatori----------------------------------------------

try {
  ("asosiy bolim");
} catch {
  ("xatolar bolimi");
} finally {
  console.log("xabar berish");
}

//---------------------------------throw------------------------------------------

let xato = new Error("xatolik yuz berdi...");
throw xato;

//----------------------async / await ---------------------------------------

async function bajar() {
  const w = await fun();
  console.log(w);
}

//-------Vada obyekti -------------------------------------------------

Promise.resolve();
Promise.reject();
Promise.rase();
Promise.all();

//-----------------Error obyekti------------------------------

new Error([[[]]]);

let er = new Error();
er.name;
er.message;
er.stack;

InternalError;

URIError;
SyntaxError;
ReferenceError;
RangeError;
TypeError;
EvalError;

// ----------------Console obyekti-----------------------------------------------------

console.dir();
console.log();
