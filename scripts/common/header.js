const navbarHTML = `
<img src="images/Roohani.png" alt="Roohani: Soulful indulgence by Masterchef Nayan Jyoti" 
     class="nav-logo">

<div class="list">
     <a href='index.html' target='_self'> Home </a>
     <a href='Menu.html' target='_self'> Menu </a>
     <a href='Gallery.html' target='_self'> Gallery </a> 
     <a href='About.html' target='_self'> About </a>
     <a href='Contact.html' target='_self'> Contact </a> 
</div>

<i class="ri-menu-3-fill menuButton"></i>

<div class="navbar-vertical">
     <i class="ri-close-fill crossButton"></i>
     <div class="list-vertical">
          <a href='index.html' target='_self' title='Home'> Home </a>
          <hr>
          <a href='Menu.html' target='_self' title='Menu'> Menu </a>
          <hr>
          <a href='Gallery.html' target='_self' title='Gallery'> Gallery </a> 
          <hr>
          <a href='About.html' target='_self' title='About'> About </a>
          <hr>
          <a href='Contact.html' target='_self' title='Contact'> Contact </a> 
          <hr>

          <p id="socialPara-header">Follow us: </p>

          <div class="social-links-header">

               <a href="https://www.instagram.com/roohanibynayanjyoti?igsh=MXJidzBjYm1zN2tqZQ==" title="roohanibynayanjyoti" target="_blank">
               <i class="ri-instagram-line"></i></a>

               <a href="https://www.facebook.com/nayan.saikia.5680/" title="Nayanjyoti Saikia" target="_blank">
               <i class="ri-facebook-line"></i></a>

               <a href="https://www.instagram.com/the_travellercook?igsh=MWYzeWQ3dm50c3Rzeg==" title="the_travellercook" target="_blank">
               <i class="ri-instagram-line"></i></a>

          </div>

          <p id="address-header">
               <i class="ri-map-pin-line"></i> 
               Central Mall, Block B, 1st Floor, GS Road, Guwahati, Assam - 781006 
          </p>

     </div>
</div>
`;

document.querySelector('.navbar-container').innerHTML=navbarHTML;

const menuBtn = document.querySelector('.menuButton');
const crossBtn = document.querySelector('.crossButton');

menuBtn.addEventListener('click', () => {
     document.querySelector('.navbar-vertical').classList.remove('navbar-vertical-hide');
     document.querySelector('.navbar-vertical').classList.add('navbar-vertical-visible');
     
});

crossBtn.addEventListener('click', () => {
     document.querySelector('.navbar-vertical').classList.remove('navbar-vertical-visible');
     document.querySelector('.navbar-vertical').classList.add('navbar-vertical-hide');
});

//Fading away of navbar while scrolling
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar-container');
    const currentScrollY = window.scrollY;

    if (currentScrollY > 80 && currentScrollY > lastScrollY) {
        navbar.classList.add('navbar-hidden');      /* scrolling down → hide */
    } else {
        navbar.classList.remove('navbar-hidden');   /* scrolling up → show */
    }

    lastScrollY = currentScrollY;
});

//if a function is enclosed within brackets, it runs automatically on page load. : Immediately Invoked Function Expression
(function activeTab() {
     const navLinks = document.querySelectorAll('.list a, .list-vertical a');
     const currentPath = window.location.pathname.split('/').pop().toLowerCase() || 'index.html'; 
    
     navLinks.forEach(link => {
         // FIXED: linkPath must be read inside the loop for every single anchor item
         const linkPath = link.getAttribute('href').toLowerCase();

         if (linkPath === currentPath) {
             link.classList.add('current');
         }
     });
})(); //() for trigerring the function