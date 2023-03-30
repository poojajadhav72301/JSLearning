console.log("====== API getElementsByTagName() to select element by tag name  =====");
const h2Element = document.getElementsByTagName("h2");
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML = "My Hobbies";

console.log("====== API getElementById() to select element by id  =====");
const elementProfile = document.getElementById("profile");
console.log(elementProfile.innerHTML);

console.log("====== API getElementsByClassName() to select element class Name  =====");
const elementLi =document.getElementsByClassName("liItem");
console.log(elementLi[1].innerHTML);
console.log("====== API querySelector() to select element by id  =====");
const elementProfileByQuery = document.querySelector("#profile");
console.log(elementProfileByQuery);

console.log("====== API querySelector() to select element by class  =====");
const elementByQuery= document.querySelector(".liItem");
console.log(elementByQuery);

console.log("====== API querySelectorAll() to select element by class  =====");
const elementsByQuery = document.querySelectorAll(".liItem");
console.log(elementsByQuery);

//elementsByQuery[3].innerHTML = "Oracle Database";
//console.log(elementsByQuery[3]);

console.log("====== Changing the attribute of an element =====");
const elementMyProfile = document.querySelector("#myProfile");
elementMyProfile.setAttribute("href", "https://www.linkedin.com/");
console.log(elementMyProfile);

const elementTeckStak = document.querySelector("#teckStack");
elementTeckStak.style.color = ("red");

const eleProfile = document.querySelector("#profile");
eleProfile.style.color = ("Purple");

console.log("====== Remove Element =====");
const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject);

const elementUlItem = document.querySelector("#ulItem");
const eleLi = document.querySelector("#listItem");
elementUlItem.removeChild(eleLi);

console.log("====== Adding Element =====");
const elementDiv = document.querySelector("#divProject");
const elementP = document.createElement("p");
const elementText = document.createTextNode("Team Size - 7");
elementP.appendChild(elementText);
elementDiv.appendChild(elementP);

const elementAddress = document.querySelector("#address");
elementAddress.addEventListener("click", () => {
  console.log("Listening click event");
});

elementAddress.addEventListener("mouseover", () => {
  console.log("mouse over");
 });

function show(){
     console.log("Click event....");
}

const elementEven = document.getElementById("isEvenButton");
elementEven.addEventListener('click', () => {
    const inputValue = prompt("Enter the number");
    console.log(inputValue);
    const result = inputValue%2==0 ? true : false;
    if(result){
       alert(`${inputValue} is even number`);
    }
    else{
      alert(`${inputValue} is not even number`);
    }
});


