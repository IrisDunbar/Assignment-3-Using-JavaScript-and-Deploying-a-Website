const hamburgerMenu = document.getElementById('hamburger-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');
const navDropdown = document.getElementById('hamburger-nav');

function hamburgerDrop() {
    hamburgerMenu.style.display = 'none';
    navDropdown.style.display = 'block';
}

console.log(hamburgerMenu);
console.log(typeof hamburgerMenu);

hamburgerIcon.addEventListener('click', hamburgerDrop);