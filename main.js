import Contact from "./classes/contact.js"


const p1 = new Contact ("Mr", "Saint-James", "Robert", "10/12/1955", "0685121212", "allll@gmail.com");
console.log(p1.display())

let resultOutput = document.querySelector("#table-data");
resultOutput.innerHTML = p1.display();