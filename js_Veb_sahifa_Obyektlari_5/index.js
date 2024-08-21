//-----------------Window obyekti-----------------------------------

window.isSecureContext; //
window.localStorage; //
window.sessionStorage; //

//--------------Windowni uslublari-----------------------

window.alert(); //
window.open(); //
window.close(); //
window.stop(); //
window.setInterval(); //
window.clearInterval(); //
window.setTimeout(); //
window.clearTimeout(); //
window.focus(); //
window.onsubmit(); //

//-----------Windowni Hodisalari ----------------------------------

window.onchange(); //
window.onclick(); //
window.oncontextmenu(); //
window.onmessage(); //
window.onoffline(); //
window.ononline(); //
window.addEventListener(); //

//-------------------Sichqoncha harakatiga oid------------------------

altKey;
ctrlKey;
shiftKey;

button: [
  0 - "asosiy(chap)tugma",
  1 - "qoshimcha (surgich)tugmasi",
  2 - "ikkinchi(ong) tugma",
  3 - "avvalgi sahifaga otkazuvchi tugma",
  4 - "keyingi sahifaga otkazuvchi tugma",
];
screenX;
screenY;
clientX;
clientY;
movementX;
movementY;
offsetX;
offsetY;
pageX;
pageY;

//-----------location obyecti---------------------------------------

location.href;
location.protocol;
location.host;
location.hostname;
location.port;
location.pathname;
location.search;
location.hash;
location.origin;

//-------------------history obyekti-----------------------------

history.back();
history.forward();
history.go();
history.pushState();
history.replaceState();
history.state;

//--------------navigator obyekti--------------------

navigator.cookieEnabled;
navigator.doNotTrack;
navigator.geolocation;
navigator.onLine;
navigator.language;
navigator.languages;
navigator.userAgent;
navigator.serviceWorker;
navigator.registerProtocolHandler();
navigator.vibrate();

//---------------------performance obyecti------------------------

// performance.setResourceTimingBufferSize();
// performance.onresourcetimingbufferfull();
// performance.navigator;
// performance.now();
// performance.mark();
// performance.getEntriesByName();
// performance.clearMeasures();
// performance.clearMarks();
// performance.measure();
// performance.getEntriesByType();
// performance.getEntries();

//-------------------Element obyekti ---------------

Element;

children;
classList; //
className; //
innerHTML; //
innerText; //
id; //
tagName; //
style; //
addEventListener(); //
removeEventListener(); //
getAttributeNames(); //
getAttribute(); //
getElementsByClassName(); //
getElementsByTagName(); //
querySelector(); //
querySelectorAll(); //
appendChild(); //

//-------------------document obyekti-------------------

document;
//------------documentni xususiyatlari-----------------------

//--------------documentni uslublari-----------------------------

document.adoptNode(); //
document.createAttribute(); //
document.createElement(); //
document.getElementById(); //

//-----------------document cookie---------------------------------------

document.cookie;

//--------------Ajax orqali malumot almashish------------------------------

fetch();
//__________________________________________________________________________

method;
// method bu -- serverga murojat qilish uslubi : POST , GET , CONNECT,
//              DELETE , HEAD , OPTIONS , PATCH , PUT , TRECE kabi qiymatlardan birini qabul qailadi

//___________________________________________________________________________

headers;
// bosh qismida brauzerning tavsif malumotlari bilan birga yuboriladigan qiymatlar

//_________________________________________________________________________

body;
// so'rovni tana qismi unda serverga yuboriladigan malumotlar jamlanadi .: HEAD yoki GET bo'lsa
//              tana qismi mavjud bo'lmaydi

//__________________________________________________________________________________

mode;
// usul << cors>> , << no- cors>> yoki << sanme- origin >> qiymatlaridan birini qabul qiladi

//_______________________________________________________________________________________

credentials;
// serverga kukini qanday yuborishni aniqlaydi  << omit>> , << same-origin>> yoki << include >>
// qiymatlaridan birini qabul qiladi

//____________________________________________________________________________________

cache;
// so'rovni saqlab turish yo'rig'. serverga ayni bir xil so'rov bilan qayta- qayta murojat qilishni
// oldini oladi << default >> ,<<only-if-cached>> , << no-store>> , <<reload>>,<<no-cache>>
// yoki <<force-cache>> dan birini qabul qiladi

//__________________________________________________________________________________

redirect;
// boshqa ishoratda sakrashni nazorat qiladi. unga <<follow>> berilsa ,sakrashlar to'siqsiz amalga oshadi

//__________________________________________________________________________________

referrer;
//ko'rsatilgan ishoratga sakrashni taminlaydi .unga aniq ishorat yoki << no-referrer>> berish mukin ,u << redirect>>
// bilan mutanosib ishlaydi

//____________________________________________________________________________________

referrerPolicy;
// qanday turdagi so'rovlar yo'naltirilishi lozimligini aniqlaydi ,<<unsafe-url>>,<<no-referrer-when-downgrade>> ,
// <<no-referrer>> ,<<origin>> ,<< strict-origin-when-cross-origin>> ,<<strict-origin>>,<<same-origin>> ,
// << origin-when-cross-origin>> qiymatlaridan birini qabul qiladi

integrity;
keepalive;
signal;
