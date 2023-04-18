document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  const elm = document.querySelector(".card");
  const coords = elm.getBoundingClientRect();

  const elmX = coords.left + elm.offsetWidth / 2;
  const elmY = coords.top + elm.offsetHeight / 2;

  const angleX = (elmY - y) / 25;
  const angleY = (elmX - x) / -25;

  elm.style.transform = `rotateX(${angleX}deg)
												 rotateY(${angleY}deg)`;
});