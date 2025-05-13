console.log("hello world");

const hiddenSect = document.getElementById("hidden");
const revealButton = document.getElementById("button");

revealButton.addEventListener("click", function () {
  const msg = document.createElement("h1");
  msg.textContent = "HA IM HERE, BUT NOT FOR LONG";
  hiddenSect.appendChild(msg);
});

revealButton,
  addEventListener("click", function () {
    setTimeout(function () {
      const h1Element = document.querySelector("h1");
      h1Element.remove();
    }, 5000);
  });
