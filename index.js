function hometown() {
  let name = prompt("What is your name? ");
  let montreal = prompt(" Do you want to come to Montreal ? ");
  montreal = montreal.toLowerCase();
  montreal = montreal.trim();
  if (montreal === "yes") {
    let heading = document.querySelector("h8");
    heading.innerHTML = "<strong>Hi " + name + "! <br>Let's keep in touch <em> and see you in Mtl ☕️</em> one day!</strong>";
  } else {
    let heading = document.querySelector("h8");
    heading.innerHTML = "<strong>Hi " + name + "! <br> Really sad to hear <em> ! Hope we meet elswhere </em> one day!</strong>";
  }
}
let mtlButton = document.querySelector("button");
mtlButton.addEventListener("click", hometown);
