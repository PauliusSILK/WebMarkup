const cookies = localStorage.getItem("cookies");
console.log(cookies != "accepted");
if (cookies != "accepted") {
  document.getElementById("cookie-popup").style.display = "flex";
}

let nav = document.getElementById("nav-sidebar");

function HideCookies() {
  document.getElementById("cookie-popup").style.display = "none";
  localStorage.setItem("cookies", "accepted");
}

function OpenCloseNav() {
  if (nav.style.display != "block") {
    nav.style.display = "block";
  } else nav.style.display = "none";
}
