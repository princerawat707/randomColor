const hexCode = document.getElementById("hex-code");
const btn = document.getElementById("btn");
const h2 = document.querySelector("h2");

const getColor = () => {
  // Hex Code Generator
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomCode;
  h2.innerText = randomCode;
  
//   copy code to Clipboard ⬇⬇⬇
// navigator.clipboard.writeText(randomCode);
};

btn.addEventListener("click", getColor)


// initial call
getColor(); 

// const btn = document.querySelector('button');
// const h1 = document.querySelector('h1');

// const makeRandColor = () => {
//    const r = Math.floor(Math.random() * 255);
//    const g = Math.floor(Math.random() * 255);
//    const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

// btn.addEventListener('click', function() {
//     const randColor = makeRandColor();
//     document.body.style.backgroundColor = randColor ;
//     h1.innerText = randColor;
//     switch(randColor <= rgb(200, 200, 200)){
//         case h1.style.color = white:
//             break;

//     }

// })
