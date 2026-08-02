function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-output", {
    strings: [
      "Roses are red, violets are blue,",
      "I love programming, and so do you!",
    ],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);
