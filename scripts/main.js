const myImage = document.querySelector("img");

myImage.addEventListener("mouseover", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.jpg") {
    myImage.setAttribute("src", "images/cat2.jpg");
  } else {
    myImage.setAttribute("src", "images/cat.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Cats are cool, ${myName}!`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Cats are cool, ${storedName}!`;
}

// changes name
myButton.addEventListener("click", () => {
  setUserName();
});
