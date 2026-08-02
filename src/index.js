function displayPoem(response) {
  console.log("Poem loaded successfully");
  new Typewriter("#poem-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInputElement = document.querySelector("#user-instructions");
  let apiKey = "5bac517fb09b890c4230d5t470ofe359";
  let prompt = `User instructions:Generate an English poem about ${instructionsInputElement.value}`;
  let context =
    "You are a romatic poem expert and love to write short poems. Your mission is to generate a 4-line poem in basic HTML using <p> and <br> tags only. Return ONLY the HTML. Do not use Markdown. Do not wrap the response in ```html or ```. Make sure to follow user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("The poem is loading...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");

poemFormElement.addEventListener("submit", generatePoem);
