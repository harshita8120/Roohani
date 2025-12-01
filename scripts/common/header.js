const navbarHTML = `
<img src="images/Roohani.jpeg" alt="Roohani: Soulful indulgence by Masterchef Nayan Jyoti"   
    style="width:300px; height:100px; float:left;">

<div id="list">

<a href='index.html' id='header' target='_self' title='Home'> Home </a>
<a href='Menu.html' id='header' target='_blank' title='Menu'> Menu </a>
<a href='Gallery.html' id='header' target='_blank' title='Gallery'> Gallery </a> 
<a href='About.html' id='header' target='_blank' title='About'> About </a>
<a href='Contact.html' id='header' target='_blank' title='Contact'> Contact </a> 

</div>
`;

document.querySelector('.navbar-container').innerHTML=navbarHTML;