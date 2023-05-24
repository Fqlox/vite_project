import './style.css'
// import './node_modules/normalize.css/normalize.css'
import DOMSosie from './js/dom.js';


const root = document.querySelector("#root");

function noAnimationAtStart(domElement) {
  domElement.classList.add("no-animation");
  
  setTimeout( ()=> domElement.classList.remove("no-animation"), 1000);
}


function dissableAllAnimation() {
  noAnimationAtStart(document.querySelector(".sosie-modal"))
}


async function fetchData() {
  const res = await fetch("./distance_matrix.json");
  const data = await res.json();


  data.forEach( (item, index) => {

    const [name, listSosies] = item;

    const sosie = DOMSosie(name, listSosies, index);
    root.appendChild(sosie)

  });

}





dissableAllAnimation();
fetchData()