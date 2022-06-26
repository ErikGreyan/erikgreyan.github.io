"use strict";

window.addEventListener("load", () => {
  const links = document.querySelectorAll("a[href='#']");
  links.forEach((elem) => {
    elem.addEventListener("click", (i) => {
      i.preventDefault();
    });
  });

  const menu = document.querySelector(".menu");
  const btnClick = document.querySelector(".btn");
  btnClick.addEventListener("click", () => {
    btnClick.classList.toggle("btn_active");
    menu.classList.toggle("active_menu");
  });

  const swiper = new Swiper(".swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  scrollActive(".about", "#about");
  scrollActive(".services", "#services");
  scrollActive(".certificate", "#certificate");
  scrollActive(".portfolio", "#portfolio");
  scrollActive(".contact", "#contact");
  scrollActive(".project", "#contact");
  scrollActive(".btnUp", "#home");
  scrollActive(".framework", "#framework");
  function scrollActive(btn, element) {
    const link = document.querySelector(btn);
    const all = document.querySelectorAll(btn);
    const nav = document.querySelector("nav");
    const elem = document.querySelector(element).offsetTop - nav.offsetHeight;
    all.forEach((all) => {
      all.addEventListener("click", () => {
        window.scrollTo(0, elem);
        btnClick.classList.remove("btn_active");
        menu.classList.remove("active_menu");
      });
    });
    link.addEventListener("click", () => {
      window.scrollTo(0, elem);
      btnClick.classList.remove("btn_active");
      menu.classList.remove("active_menu");
    });
  }

  scroll(".about", "#about");
  scroll(".services", "#services");
  scroll(".certificate", "#certificate");
  scroll(".portfolio", "#portfolio");
  scroll(".contact", "#contact");
  function scroll(link, element) {
    const linkSelector = document.querySelector(link);
    const elem = document.querySelector(element);
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= elem.offsetTop - 80 && window.pageYOffset <= elem.offsetTop + elem.offsetHeight) {
        linkSelector.classList.add("active");
      }
      else {
        linkSelector.classList.remove("active");
      }
    })
  };

  const btnUp = document.querySelector(".btnUp");
  window.addEventListener("scroll", () => {
    window.scrollY >= 300 ? btnUp.classList.add("btnShow") : btnUp.classList.remove("btnShow");
  });
});