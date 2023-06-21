const toggleMenu = () => document.body.classList.toggle("open");
const crewNavItem = document.querySelector('.menu-a:nth-child(3)');
crewNavItem.classList.add('active');

const pic = document.getElementById('pic');
const role = document.getElementById('role');
const nameTitle = document.getElementById('name');
const bio = document.getElementById('bio');
const person = document.getElementById('person');
const person1 = document.getElementById('person1');
const person2 = document.getElementById('person2');
const person3 = document.getElementById('person3');

//Fetch Data

const list = fetch("../data.json")
.then(res=> res.json())

.then((data) => {
    //Person is clicked

    person.addEventListener("click", () =>{
        nameTitle.innerHTML =  data.crew[0].name;
        pic.src = data.crew[0].images.png;
        bio.innerHTML = data.crew[0].bio;
        role.innerHTML = data.crew[0].role;
        
    });

    //Person1 is clicked

    person1.addEventListener("click", () =>{
        nameTitle.innerHTML =  data.crew[1].name;
        pic.src = data.crew[1].images.png;
        bio.innerHTML = data.crew[1].bio;
        role.innerHTML = data.crew[0].role;
        
    });

    //Person2 is clicked

    person2.addEventListener("click", () =>{
        nameTitle.innerHTML =  data.crew[2].name;
        pic.src = data.crew[2].images.png;
        bio.innerHTML = data.crew[2].bio;
        role.innerHTML = data.crew[2].role;
        
    });

    //Person3 is clicked

    person3.addEventListener("click", () =>{
        nameTitle.innerHTML =  data.crew[3].name;
        pic.src = data.crew[3].images.png;
        bio.innerHTML = data.crew[3].bio;
        role.innerHTML = data.crew[3].role;
        
    });

    //Making Person Defult

    person.click();
});