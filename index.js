const div= document.createElement("div");
div.classList.add("Main-container");
div.style.backgroundColor= "#f1da79";
div.style.width= "1200px";
div.style.height= "100vh";
document.body.append(div);


const h2 = document.createElement("h2");
h2.innerText="Why we should visit lisbon";
div.appendChild (h2);
h2.style.fontSize= "60px";
h2.style.textAlign= "center"

const img=document.createElement("img");
img.src= "./lisbon.jpg";
img.alt="portugal";
img.style.display= "block"
img.style.margin= "auto"
div.appendChild(img);

const p = document.createElement("p");
p.innerText= "LISBON is a hilly coastal capital city that enjoys an average of more than 300 sunny days a year. Lisbon is, among other things, known for its unique historical center, stunning architecture, colorful azulejos (ceramic tiles), and fantastic food";
p.style.textAlign= "center";
div.appendChild(p);

const button=document.createElement("button");
button.innerText= "READ MORE ";
div.appendChild (button)
button.style.backgroundColor="white";
div.style.textAlign= "center"






