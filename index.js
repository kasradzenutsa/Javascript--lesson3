const div = document.createElement ("div");
div.classList.add ("container");
document.body.appendChild(div)

const h1=document.createElement ("h1");
h1.innerText= "nuca";
div.appendChild(h1)
h1.style.color="red"

const images= document.createElement.("img");
images.src= "img/software.jpg";
div.appendChild(images)
images.style.width="300px"

const p =document.createElement ("p");
p.innerText="loren impuls"
div.appendChild(p)

const button = document.createElement("button");
button.innerText="read more"
div.appendChild (button)
button.style.margin = "20px"