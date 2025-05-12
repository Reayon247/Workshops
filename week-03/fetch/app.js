console.log("hello world");

// async function getMyStuffFromOverThere() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log("HTTP Response:", response);
//   const json = await response.json();
//   console.log("JSON Data:", json);
// }

// getMyStuffFromOverThere();
// the example

// im getting the data from the API, then selecting the specific piece i want
async function fetchTheData() {
  const response = await fetch("https://api.waifu.pics/sfw/megumin");
  const data = await response.json();
  console.log(data);
  const wrangledData = data.url;
  console.log(wrangledData);
  return wrangledData;
}

// im then making an element for the img to sit in
const imgContainer = document.getElementById("container");

function createTheImg(imgSrc) {
  const theImg = document.createElement("img");
  theImg.src = imgSrc;
  theImg.alt = "Megumin";
  theImg.className = "megumin";
  imgContainer.appendChild(theImg);
}

//then combining the 2 functions so they work together
async function createImgAndGetIt() {
  const fetchedData = await fetchTheData();
  createTheImg(fetchedData);
}

createImgAndGetIt();
createImgAndGetIt();
createImgAndGetIt();
