// ********* sets the date in the footer *******

// const date = document.getElementById("date");
// date.innerHTML = new Date().getFullYear();

//******** */ close links in navbar *********

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".int-links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  // console.log(containerHeight);
  // console.log(linksHeight);

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight + 30}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
  console.log(scrollHeight);
});

//********select links*****
//**********SMOOTH SCROLL TO SECTION********* */

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    //nav to specific spot, slice(1) skips the #
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //calc heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");

    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight + containerHeight;
    } else {
      position = position + containerHeight;
    }
    console.log(position);
    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.style.height = 0;
  });
});
