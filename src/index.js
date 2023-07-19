const menuToggle = document.querySelector('.menu-toggle');
const menus = document.querySelectorAll('nav ul li');
const navMenu = document.querySelector('nav');
const closeNavMenu = document.querySelector('nav .close-icon');

menuToggle.onclick = () => {
  navMenu.classList.add('active');
}

 closeNavMenu.onclick = () => {
  navMenu.classList.remove('active');
 }

for (let i = 0; i < menus.length; i++) {
  menus[i].onclick = () => {
    menus.forEach(menu => {
      menu.classList.remove('active');
    })
    menus[i].classList.add('active');
    setTimeout(() => {
      navMenu.classList.remove('active');
    }, 315)
  }
};

