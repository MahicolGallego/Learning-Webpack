import styles from "./style.css";
import logo from "./assets/Genshin_Impact_logo.svg";
import furina from "./assets/Furina.jpg";

const arr = [1, 2, 3],
  codeESNext = () => {
    console.log(...arr);
  };

console.log(
  "Hiiiiiiiiiiiiiii, aprendiendo webpack, aun no tenemos config del webpack :("
);

codeESNext();

// alert("holaaaaaa");

// document.getElementById("app").innerHTML = `<img src="${logo}" alt="genshin"/>`;

const d = document,
  $app = d.getElementById("app"),
  $h1 = d.createElement("h1"),
  $logo = d.createElement("img"),
  $img = d.createElement("img");

$h1.textContent = "Hola mundo en Webpack";
$logo.src = logo;
$logo.style.backgroundColor = "white";
$logo.classList.add("icon");
$img.src = furina;

app.appendChild($h1);
app.appendChild($logo);
app.appendChild($img);
