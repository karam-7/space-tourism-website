const toggleMenu = () => document.body.classList.toggle("open");
const technologyNavItem = document.querySelector('.menu-a:nth-child(4)');
technologyNavItem.classList.add('active');

const pic = document.getElementById('t-pic');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const nameTitle = document.getElementById('t-name');
const para = document.getElementById('t-para');

//Fetch Data

const list = fetch("https://karam-7.github.io/space-tourism-website/data.json")
.then(res=> res.json())

.then((data) => {
    //one is clicked

    one.addEventListener("click", () =>{
        nameTitle.innerHTML =  data.technology[0].name;
        if(window.innerHTML <= 768){
            pic.src = data.technology[0].images.landscape;
        }else{       
            pic.src = data.technology[0].images.portrait;
        }
        para.innerHTML = data.technology[0].description;
        
    });

    //two is clicked

    two.addEventListener("click", () =>{
        nameTitle.innerHTML =  data.technology[1].name;
        if(window.innerHTML <= 768){
             pic.src = data.technology[1].images.landscape;
        }else{
            pic.src = data.technology[1].images.portrait;          
        }
        para.innerHTML = data.technology[1].description;
        
    });

    //three is clicked

    three.addEventListener("click", () =>{
        nameTitle.innerHTML =  data.technology[2].name;
        if(window.innerHTML <= 768){
            pic.src = data.technology[2].images.landscape;
        }else{            
            pic.src = data.technology[2].images.portrait;
        }
        para.innerHTML = data.technology[2].description;
        
    });

    //Making one Defult

    one.click();
});

const numSpan = document.querySelectorAll('.num-span');
numSpan.forEach(item => {
    item.addEventListener('click', function() {
        numSpan.forEach( span=> {
            span.classList.remove('active')
        });
        this.classList.add('active');
    })
});    