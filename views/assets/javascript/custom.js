const hamberger = document.querySelector('.hamberger')
const navmenu = document.querySelector('.nav-menu')
const close_btn = document.querySelector('.close_btn')
    //open menu
hamberger.onclick = () => {
    navmenu.classList.add("view-menu")
}

//close menu
close_btn.onclick = () => {
    navmenu.classList.remove("view-menu")
}


// slider canger

const slider = document.querySelector('.slider')
let backgroundListe = ["Les-cascades-de-Man2-2.jpg", "Les-cascades-de-Man2-2.jpg"];

slider.style.background = `/assets/mediat/sliders/${backgroundListe[0]}`






//flash infos marquee
let flashinfos = document.querySelector('.flashinfos')
let message = flashinfos.querySelector('.p')
let getedmessage = message.innerHTML
message.innerHTML = `${getedmessage} ${getedmessage}`
let start = 0
setInterval(() => {
    flashinfos.querySelector('.p').style.transform = `translateX(${-(start += 1)}px)`;
    if (start == message.offsetWidth) {
        start = 0
    }
}, 20)