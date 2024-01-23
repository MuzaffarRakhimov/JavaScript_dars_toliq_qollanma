
//-----------------Window obyekti-----------------------------------

window.crypto
window.devicePixelRatio
window.frameElement
window.frames
window.innerWidth
window.name
window.isSecureContext
window.length
window.location
window.locationbar
window.localStorage
window.menubar
window.opener
window.outerHeight
window.outerWidth
window.parent
window.personalbar
window.screen
window.scrollbars
window.scrollX
window.self
window.sessionStorage
window.statusbar
window.toolbar
window.top
window.window

//--------------Windowni uslublari-----------------------

window.alert()
window.btoa()
window.atob()
window.open()
window.close()
window.stop()
window.setInterval()
window.clearInterval()
window.setTimeout()
window.clearTimeout()
window.focus()
window.blur()
window.getComputedStyle()
window.getSelection()
window.print()
window.requestIdleCallback()
window.cancelIdleCallback()
window.scroll()
window.scrollBy()
window.scrollTo()
window.onsubmit()


//-----------Windowni Hodisalari ----------------------------------

window.onafterprint()
window.onbeforeprint()
window.onunload()
window.onbeforeinput()
window.onbeforeunload()
window.onblur()
window.onchange()
window.onclick()
window.ondblclick()
window.onclose()
window.oncontextmenu()
window.onfocus()
window.ondeviceorientation()
window.onerror()
window.onhashchange()
window.onmessage()
window.onoffline()
window.ononline()
window.onresize()
window.addEventListener()

//-------------------Sichqoncha harakatiga oid------------------------

altKey
ctrlKey
shiftKey

button:[
    0-'asosiy(chap)tugma',
    1-'qoshimcha (surgich)tugmasi',
    2-'ikkinchi(ong) tugma',
    3-'avvalgi sahifaga otkazuvchi tugma',
    4-'keyingi sahifaga otkazuvchi tugma'
]
screenX
screenY
clientX
clientY
movementX
movementY
offsetX
offsetY
pageX
pageY


//-----------location obyecti---------------------------------------

location.href
location.protocol
location.host
location.hostname
location.port
location.pathname
location.search
location.hash
location.origin


//-------------------history obyekti-----------------------------

history.back()
history.forward()
history.go()
history.pushState()
history.replaceState()
history.state

//--------------navigator obyekti--------------------

navigator.cookieEnabled
navigator.doNotTrack
navigator.geolocation
navigator.onLine
navigator.language
navigator.languages
navigator.userAgent
navigator.serviceWorker
navigator.registerProtocolHandler()
navigator.vibrate()


//---------------------performance obyecti------------------------

performance.setResourceTimingBufferSize()
performance.onresourcetimingbufferfull()
performance.navigator
performance.now()
performance.mark()
performance.getEntriesByName()
performance.clearMeasures()
performance.clearMarks()
performance.measure()
performance.getEntriesByType()
performance.getEntries()


//-------------------Element obyekti ---------------

Element
        attributes
        childElementCount
        children
        classList
        className
        clientHeight
        clientWidth
        firstElementChild
        lastElementChild
        innerHTML
        innerText
        previousElementSibling
        id
        nextElementSibling
        outerHTML
        outerText
        scrollHeight
        scrollWidth
        tagName
        style
        addEventListener()
        removeEventListener()
        closest()
        getAttributeNames()
        getAttribute()
        getAttributeNode()
        getBoundingClientRect()
        getClientRects()
        getElementsByClassName()
        getElementsByTagName()
        hasAttribute()
        insertAdjacentHTML()
        matches()
        querySelector()
        querySelectorAll()
        remove()
        removeChild()
        appendChild()
        requestFullscreen()
        requestPointerLock()
        scrollIntoView()
        setAttribute()
        setAttributeNode()
        removeAttribute()
        setPointerCapture()
        releasePointerCapture()


//-------------------document obyekti-------------------
 
document        
//------------documentni xususiyatlari-----------------------

document.characterSet
document.compatMode
document.contentType
document.doctype
document.documentElement
document.documentURI
document.activeElement
document.body
document.defaultView
document.designMode
document.dir
document.embeds
document.forms
document.head
document.images
document.lastModified
document.links
document.plugins
document.readyState
document.referrer
document.scripts
document.title
document.URL


//--------------documentni uslublari-----------------------------

document.adoptNode()
document.createAttribute()
document.createComment()
document.createElement()
document.createDocumentFragment()
document.createNodeIterator()
document.createTreeWalker()
document.createRange()
document.createTextNode()
document.elementFromPoint()
document.exitPointerLock()
document.importNode()
document.getSelection()
document.hasFocus()
document.open()
document.write()
document.close()
document.getElementById()

//-----------------document cookie---------------------------------------

document.cookie

//--------------Ajax orqali malumot almashish------------------------------

fetch()
//__________________________________________________________________________

method 
// method bu -- serverga murojat qilish uslubi : POST , GET , CONNECT,
//              DELETE , HEAD , OPTIONS , PATCH , PUT , TRECE kabi qiymatlardan birini qabul qailadi

//___________________________________________________________________________

headers 
// bosh qismida brauzerning tavsif malumotlari bilan birga yuboriladigan qiymatlar

//_________________________________________________________________________

body
// so'rovni tana qismi unda serverga yuboriladigan malumotlar jamlanadi .: HEAD yoki GET bo'lsa 
//              tana qismi mavjud bo'lmaydi 

//__________________________________________________________________________________

mode 
// usul << cors>> , << no- cors>> yoki << sanme- origin >> qiymatlaridan birini qabul qiladi 

//_______________________________________________________________________________________

credentials 
// serverga kukini qanday yuborishni aniqlaydi  << omit>> , << same-origin>> yoki << include >> 
// qiymatlaridan birini qabul qiladi 

//____________________________________________________________________________________

cache 
// so'rovni saqlab turish yo'rig'. serverga ayni bir xil so'rov bilan qayta- qayta murojat qilishni 
// oldini oladi << default >> ,<<only-if-cached>> , << no-store>> , <<reload>>,<<no-cache>>
// yoki <<force-cache>> dan birini qabul qiladi

//__________________________________________________________________________________

redirect
// boshqa ishoratda sakrashni nazorat qiladi. unga <<follow>> berilsa ,sakrashlar to'siqsiz amalga oshadi

//__________________________________________________________________________________

referrer
//ko'rsatilgan ishoratga sakrashni taminlaydi .unga aniq ishorat yoki << no-referrer>> berish mukin ,u << redirect>> 
// bilan mutanosib ishlaydi

//____________________________________________________________________________________

referrerPolicy
// qanday turdagi so'rovlar yo'naltirilishi lozimligini aniqlaydi ,<<unsafe-url>>,<<no-referrer-when-downgrade>> ,
// <<no-referrer>> ,<<origin>> ,<< strict-origin-when-cross-origin>> ,<<strict-origin>>,<<same-origin>> ,
// << origin-when-cross-origin>> qiymatlaridan birini qabul qiladi

integrity
keepalive
signal 

