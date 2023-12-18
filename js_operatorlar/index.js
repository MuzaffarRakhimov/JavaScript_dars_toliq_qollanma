//Tanlash operatori
// 'if', 'else' operator

if (6>5){
   console.log("6 soni katta ");
}
else {
   console.log('5 soni katta')

}

//------terneriy { shart ? true : false } operatori----------------

let a =20 ;
let b =30 ;

a>b ? true : false;

// -----SWitch --------------------------------------------------
let ol = 'olma';
switch(ol){
   case 'olma':
      console.log('yabloko');
   break;
   case 'bir':
      console.log('adin');
   break;
   default:ol
}

//------------------For loop ( takrorlash )---------------------------------------

for(let i = 0; i<4 ; i++){
   //console.log(i)
}

//---------------for... in -----------------------------------------

let aa = [1,2,3,4,5,6]

for(let son in aa){
   let bb =son;
   console.log(bb)
}

//----------------------for ...of -------------------------

let ss = [1,[],{},'aa',2];

for(let ol of ss){
   let natija = ol;
   console.log(natija)
}