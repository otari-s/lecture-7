const hideButton = document.querySelector(`#hider`);
const textToHide = document.querySelector(`#text`);

hideButton.addEventListener(`click`, () => {
  textToHide.style.display = `none`;
});

const body = document.querySelector(`body`);
const card = document.createElement(`div`);
const h2 = document.createElement(`h2`);
const link = document.createElement(`a`);
card.setAttribute(`id`, `card`);
link.setAttribute(`href`, `#`);
link.innerHTML = `Go to profile`;
h2.innerHTML = `Vaniko`;

card.append(h2, link);
body.append(card);

card.style.backgroundColor = `red`;
