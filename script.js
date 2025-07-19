const buttonContainer = document.querySelector("#container");
const buttons = document.querySelectorAll(".button");
const text = document.querySelectorAll(".text");
const btns = document.querySelector(".button_container");
buttonContainer.addEventListener("click", function (e) {
  // add closest method because if click child ,
  // target is button and if click ,
  // parent element log null

  const clicked = e.target.closest(".button");
  //   this is modern way that name is Gaurd clause
  // when we want not excute code in some way
  if (!clicked) return;

  buttons.forEach((t) => t.classList.remove("button--active"));
  text.forEach((c) => c.classList.remove("text--active"));

  clicked.classList.add("button--active");
  document
    .querySelector(`#tab${clicked.dataset.tab}`)
    .classList.add("text--active");

  console.log(clicked);
});

const handleHover = function (e , opacity) {
   if (e.target.classList.contains("button")) {
    const link = e.target;
    const siblings = link
      .closest(".button_container")
      .querySelectorAll(".button");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
 
}

btns.addEventListener("mouseover", handleHover.bind(0.5)
);

btns.addEventListener("mouseout", handleHover.bind(1)
);
