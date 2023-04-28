const btn = document.getElementsByClassName('arrow-up');
window.addEventListener('scroll', () => {
    const home = document.querySelector('#home');
    if (window.scrollY > home.offsetTop + home.offsetHeight) {
        for(let i=0; i < btn.length; i++){
            btn[i].classList.add('visible')
        }
    } else {
        for(let i=0; i < btn.length; i++){
            btn[i].classList.remove('visible')
        }
    }
});

const menuBtn = document.querySelector('.navbar__toggle-btn');
const menuContainer = document.querySelector('.menu-container');
const menuNav = document.querySelector('.navbar__menu');
console.log(menuNav)
menuBtn.addEventListener('click', () => {
    menuContainer.classList.toggle('open');
    menuNav.classList.add('open');
});


function goToScroll(name) {
    var location = document.querySelector('#' + name).offsetTop;
    window.scrollTo({ top: location-50, behavior: "smooth" });
  }

  function openClose() {
    if(document.getElementById('navbar__menu').style.display === 'block') {
        document.getElementById('navbar__menu').style.display = 'none';
    } else {
        document.getElementById('navbar__menu').style.display = 'block';
    }
}


function clickmenu() {
    const menu = document.getElementsByTagName("li");
    for (let i = 0; i < menu.length; i++) {
        menu[i].classList.remove("active");
    }
}
function goToScroll(name) {
    let location = document.querySelector("#" + name);
    menuid = 'mn_' + location.id
    window.scrollTo({ top: location.offsetTop - 50, behavior: "smooth" });
    clickmenu();
    select = document.getElementById(menuid)
    select.classList.add("active");
}