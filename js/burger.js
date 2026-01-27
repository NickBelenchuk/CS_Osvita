export const loadBurgerMenu = () => {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const body = document.body;

  if (!burger || !nav) return;

  const toggleMenu = () => {
    nav.classList.toggle("header__nav--open");
    burger.classList.toggle("header__burger--active");
    body.classList.toggle("no-scroll");
  };

  burger.addEventListener("click", toggleMenu);

  nav.addEventListener("click", (e) => {
    if (e.target.matches(".nav__link")) {
      nav.classList.remove("header__nav--open");
      burger.classList.remove("header__burger--active");
      body.classList.remove("no-scroll");
    }
  });
};
