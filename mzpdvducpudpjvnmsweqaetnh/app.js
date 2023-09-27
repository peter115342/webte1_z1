const menuToggle = document.getElementById("responsiveMenuButton");
const toggleDropdown = document.getElementById("responsiveMenuButton");
const dropMenu = document.querySelector(".dropdown");

 menuToggle.onclick = function() {
     dropMenu.classList.toggle("open");
 }