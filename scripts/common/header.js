const navbarHTML = `
<img src="images/Roohani.jpeg" alt="Roohani: Soulful indulgence by Masterchef Nayan Jyoti" 
     class="nav-logo"  >

<div class="list">
     <a href='index.html' target='_self' title='Home'> Home </a>
     <a href='Menu.html' target='_blank' title='Menu'> Menu </a>
     <a href='Gallery.html' target='_blank' title='Gallery'> Gallery </a> 
     <a href='About.html' target='_blank' title='About'> About </a>
     <a href='Contact.html' target='_blank' title='Contact'> Contact </a> 
</div>

<i class="ri-menu-3-fill menuButton"></i>

<div class="navbar-vertical">
     <i class="ri-close-fill crossButton"></i>
     <div class="list-vertical">
          <a href='index.html' target='_self' title='Home'> Home </a>
          <hr>
          <a href='Menu.html' target='_blank' title='Menu'> Menu </a>
          <hr>
          <a href='Gallery.html' target='_blank' title='Gallery'> Gallery </a> 
          <hr>
          <a href='About.html' target='_blank' title='About'> About </a>
          <hr>
          <a href='Contact.html' target='_blank' title='Contact'> Contact </a> 
          <hr>
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

