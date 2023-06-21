const toggleMenu = () => document.body.classList.toggle("open");
const destinationNavItem = document.querySelector('.menu-a:nth-child(2)');
destinationNavItem.classList.add('active');



const pic = document.getElementById('pic');
const moon = document.getElementById('moon');
const mars = document.getElementById('mars');
const europa = document.getElementById('europa');
const titan = document.getElementById('titan');
const nameTitle = document.getElementById('name-title');
const para = document.getElementById('para');
const distance = document.getElementById('distance');
const time = document.getElementById('time');




//Fetch Data

const list = fetch("../data.json")
.then(res=> res.json())

.then((data) => {

    //Moon is clicked

    moon.addEventListener("click", () =>{
        nameTitle.innerHTML =  data.destinations[0].name;
        pic.src = data.destinations[0].images.png;
        para.innerHTML = data.destinations[0].description;
        distance.innerHTML = data.destinations[0].distance;
        time.innerHTML = data.destinations[0].travel;
    });

    //Mars is clicked

    mars.addEventListener("click", () =>{
        nameTitle.innerHTML =  data.destinations[1].name;
        pic.src = data.destinations[1].images.png;
        para.innerHTML = data.destinations[1].description;
        distance.innerHTML = data.destinations[1].distance;
        time.innerHTML = data.destinations[1].travel;
    });

    //Europa is clicked

    europa.addEventListener("click", () =>{
        nameTitle.innerHTML =  data.destinations[2].name;
        pic.src = data.destinations[2].images.png;
        para.innerHTML = data.destinations[2].description;
        distance.innerHTML = data.destinations[2].distance;
        time.innerHTML = data.destinations[2].travel;
    });

    //Titan is clicked

    titan.addEventListener("click", () =>{
        nameTitle.innerHTML =  data.destinations[3].name;
        pic.src = data.destinations[3].images.png;
        para.innerHTML = data.destinations[3].description;
        distance.innerHTML = data.destinations[3].distance;
        time.innerHTML = data.destinations[3].travel;
    });

    //Making Moon Defult
    moon.click();
});

const detailAItems = document.querySelectorAll('.detail-a');
detailAItems.forEach(item => {
    item.addEventListener('click', function() {
        detailAItems.forEach( a=> {
            a.classList.remove('active')
        });
        this.classList.add('active');
    })
});    

const rotatePlanets = () => {
    const planets = document.querySelectorAll('.info-img');
    planets.forEach((planet, index) => {
      planet.style.animationDelay = `${index * 2}s`; // Delay the animation for each planet
    });
  };
  
  const setInitialPlanet = (planetIndex) => {
    const planets = document.querySelectorAll('.detail-a');
    planets.forEach((planet, index) => {
      if (index === planetIndex) {
        planet.classList.add('active');
        planet.click(); // Simulate a click event to display the initial planet details
      } else {
        planet.classList.remove('active');
      }
    });
  };
  
  // Call the functions to rotate the planets and set the initial planet (e.g., Moon)
  rotatePlanets();
  setInitialPlanet(0);
  