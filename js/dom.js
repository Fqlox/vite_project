
let dataSosie = [];

 document.body.addEventListener("mousemove", (ev) => {
    document.querySelector(".info_bulle").style.setProperty("--x", `${ev.pageX}px`)
    document.querySelector(".info_bulle").style.setProperty("--y", `${ev.pageY}px`)
}) 



 
// change modal content

function modalContent(index, url) {

    const sosieImageSource = document.querySelector(".sosie-source");
    const sosieListe = document.querySelector(".sosie-modal .sosies");
    const infoBulle = document.querySelector(".info_bulle");
    sosieListe.innerHTML = "";
    sosieImageSource.src = `./photo_index/${url}`;
    sosieImageSource.classList.toggle("hidden", false);


    dataSosie[index].forEach(sosie => {
        const img = document.createElement("img");

        img.src = `./photo_index/${sosie[1]}`;
        img.alt = `distance : ${sosie[0]}`;

        img.addEventListener("mouseover", () => {
            infoBulle.innerText = `distance : ${sosie[0]}`;
            infoBulle.classList.add("show");
        })
        img.addEventListener("mouseout", () => {
            // infoBulle.innerText = `D`;
            infoBulle.classList.remove("show");
        })
        sosieListe.appendChild(img)
    })
}



function eventListenerSosie(domElement, url){
    // Désélécitonne toute les vignette
    document.querySelectorAll(".vignette").forEach(
        vignette => vignette.classList.remove("vignette-selected"));
    
    
    // Séléctionne la vignette
    domElement.classList.toggle("vignette-selected")

    let isActive = domElement.classList.contains("vignette-selected");
    

    document.querySelector("#root").classList.toggle("move", isActive);
    document.querySelector(".sosie-modal").classList.toggle("selected", isActive);
    
    modalContent(domElement.getAttribute("index"), url);


    //document.querySelector("#root").classList.toggle("move");
    
    
}

document.querySelector("body").addEventListener("click", (e) => {
    document.querySelectorAll(".vignette").forEach(
        vignette => vignette.classList.remove("vignette-selected"));
    document.querySelector("#root").classList.toggle("move", false);
    document.querySelector(".sosie-modal").classList.toggle("selected", false);
    document.querySelector(".sosie-source").classList.toggle("hidden", true);
});


export default function DOMSosie(url, listSosies, index) {
    const domSosie = document.createElement("div");
    const image  = document.createElement("img");
    image.src = `/photo_index/${url}`;
    //image.src = `/photo_index/photodemoi.jpg`;
    //image.src = getImageUrl(url);
    domSosie.setAttribute("index", index);
    domSosie.appendChild(image);
    domSosie.classList.add("vignette");
    dataSosie.push(listSosies);

    domSosie.addEventListener("click", (e) => {
        
        eventListenerSosie(domSosie, url);
        //domSosie.classList.toggle("vignette-selected");
        e.stopPropagation();


        //document.querySelector("#root").classList.toggle("move");

        //const {x, y} = returnCalcPosition(domSosie);

        //domSosie.style.setProperty("--x", `${x}px`);
        //domSosie.style.setProperty("--y", `${y}px`);



        
    })

    return domSosie;
}