const hamburgerBtn = document.getElementById("hamburger");
const line = document.getElementById("line");
const navLinks = document.getElementById("nav-links");
const scrollBtn = document.getElementById("scroll");
const header = document.querySelector(".header");
const date = document.querySelector(".date");
const accordians = document.getElementsByClassName("accordian-icon");
const subs = document.querySelectorAll(".sub");
const subLinks = document.querySelectorAll(".sub-links");
const subLink = document.querySelectorAll(".sub-link");

// const minus = document.getElementsByClassName("fa-minus");
// const plus = document.getElementsByClassName("fa-plus");

const toggleMenu = () => {
  line.classList.toggle("open-hamburger");
  navLinks.classList.toggle("show-links");
}

// sticky header
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// scroll to top
window.onscroll = function () {
  if (document.documentElement.scrollTop > 70) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// sub menu
function toggleSubMenu(e) {
  const target = e.currentTarget;
  //if on desktop, ignore event listeners
  if (window.outerWidth > 1100) {
    return;
  }
  //if on mobile, honor event listeners
  target.nextElementSibling.classList.toggle("show-sublinks");
  target.children[0].classList.toggle("rotate");
  for (const link of subLink) {
    link.addEventListener("click", function () {
      //if menu open, toggle
      closeOpenSublinks();
      line.classList.remove("open-hamburger");
      navLinks.classList.remove("show-links");
    });
  }
}

//check for open links
function closeOpenSublinks(e) {
  for (const sublink of subLinks) {
    if (sublink.classList.contains("show-sublinks")) {
      sublink.classList.remove("show-sublinks");
    }
  }
}

//sub links event listener
for (const sub of subs) {
  sub.addEventListener("click", toggleSubMenu);
}


//dynamic date
const currentDate = new Date().getFullYear();
date.textContent = currentDate;

// accordian
for (let i = 0; i < accordians.length; i++){
  accordians[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("accordian-active");
    this.parentElement.nextElementSibling.classList.toggle("show-accordian");
    // minus[i].classList.toggle("show");
    // plus[i].classList.toggle("hide");
  });
}


hamburgerBtn.addEventListener("click", toggleMenu);

scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});