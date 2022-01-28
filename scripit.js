const animais = document.querySelectorAll(".js-animais li");
const constlista = document.querySelectorAll(".js-content section ");
constlista[0].classList.add("ativo");
function activetab(index) {
  constlista.forEach((section) => {
    section.classList.remove("ativo");
  });

  constlista[index].classList.add("ativo");
}

animais.forEach((animais, index) => {
  animais.addEventListener("click", () => {
    activetab(index);
  });
});
