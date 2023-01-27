const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height; //nav bar height
window.addEventListener("scroll", () => {     //toskills scroll (on mouse ,mouse over,mouse dwon)
  const scrollHeight = window.pageYOffset;    //arrow fun
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav"); //  open a section
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")]; //rest parameter
links.map((link) => {                     //arow fun link as parameter
  link.addEventListener("click", (e) => {   //event fire
    e.preventDefault();                     //prevent default behaviour like colour change

    const id = e.target.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = el.offsetTop - navHeight; // nav bar automatically adjust

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

// Toggle Menu
const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});
// window.addEventListener("scroll", () => {
//   control.classList.remove("open");
// });

AOS.init();

new TypeIt("#type1", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Problem Solver", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

new TypeIt("#type2", {
  speed: 120,
  loop: true,
  waitUntilVisible: true,
})
  .type("Designer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Developer", { delay: 400 })
  .pause(500)
  .delete(9)
  .type("Problem Solver", { delay: 400 })
  .pause(500)
  .delete(9)
  .go();

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 0.8, x: 20 });
gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.1, x: -200 });
gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 1.4, y: -50 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 1.7, y: -45 });
gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 2.1, y: -30 });
gsap.from(".hero a", { opacity: 0, duration: 1, delay: 2.4, y: -10 });

gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1,
  y: 30,
  stagger: 0.2,
});

gsap.from(".icons span", {
  opacity: 0,
  duration: 1,
  delay: 2.5,
  x: -30,
  stagger: 0.2,
});
// weather app
let temperature = document.getElementById('placetemp');
let weathertype = document.getElementById('weathertype');
let weathertypeimg = document.getElementById('weather-type-img');


function citysubmit() {
    let cityname = document.getElementById('mycity').value;
    // let cityname = "jabalpur";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a5905030ca9c50c3a516d13d5fd3bd59`
    // console.log(url);
    document.getElementById('displaycityname').innerHTML = cityname;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        document.getElementById('city-error').style.display = 'none'
        console.log(data);
        weathertype.innerHTML = data.weather[0].main;
        temp = data.main.temp - 273.15;
        temperature.innerHTML = temp.toFixed(2) + ' °C';
        document.getElementById('weathercard').style.display = 'flex'

        if (data.weather[0].main == 'Clouds') {
            weathertypeimg.src = './icons/cloudy.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weathertypeimg.src = './icons/sun.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weathertypeimg.src = './icons/rain.png';
        }
        else if (data.weather[0].main == 'Snow') {
            weathertypeimg.src = './icons/snowman.png';
        }
        else if (data.weather[0].main == 'Thunderstorm') {
            weathertypeimg.src = './icons/thunder.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weathertypeimg.src = './icons/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weathertypeimg.src = './icons/mist.png';
        }
        else if (data.weather[0].main == 'Smoke') {
            weathertypeimg.src = './icons/fog.png';
        }
        else if (data.weather[0].main == 'Haze') {
            weathertypeimg.src = './icons/haze.png';
        }
        else if (data.weather[0].main == 'Dust') {
            weathertypeimg.src = './icons/dust.png';
        }
        else if (data.weather[0].main == 'Fog') {
            weathertypeimg.src = './icons/fog.png';
        }
        else if (data.weather[0].main == 'Sand') {
            weathertypeimg.src = './icons/sand.png';
        }
        else if (data.weather[0].main == 'Ash') {
            weathertypeimg.src = 'https://img.icons8.com/color/48/000000/fog-day.png';
        }
        else if (data.weather[0].main == 'Squall') {
            weathertypeimg.src = 'https://img.icons8.com/color/48/000000/fog-day.png';
        }
        else if (data.weather[0].main == 'Tornado') {
            weathertypeimg.src = './icons/hurricane.png';
        }
        else {
            weathertypeimg.src = './icons/sun.png';
        }

    })
        .catch((data) => {
            document.getElementById('city-error').style.display = 'flex'
            document.getElementById('weathercard').style.display = 'none'
        })
}
// weather app close
// food app
form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    inpValue = e.target.querySelector('input').value
    fetchData4mAPI(inpValue)
})

async function fetchData4mAPI(inpVal) {
    app_id = 'd8feb9b1';
    app_key = 'cd9cb2390f98fe12e951f5df71d0b41e';
    baseURl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}&to=4`;
    result = await fetch(baseURl);
    datas = await result.json()
    console.log(datas)
    genrateHTML(datas.hits);
}

function genrateHTML(results) {
    showINHTML = '';
    results.map(result => {
        showINHTML += `
        <div class="col-3 my-3">
        <div class="card">
            <div class="card-body">
                <img src="${result.recipe.image}" alt="" class='img-fluid'>
                <h6 class=' text-center my-2 text-truncate'>${result.recipe.label}</h6>
                <div class="d-flex justify-content-between align-items-center">
                    <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
                    <a href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
                </div>
            </div>
        </div>
    </div> 
        `
        document.querySelector('#showRecipe').innerHTML = showINHTML;

    })
}
//weather app close
form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    inpValue = e.target.querySelector('input').value
    fetchData4mAPI(inpValue)
})

async function fetchData4mAPI(inpVal) {
    app_id = 'd8feb9b1';
    app_key = 'cd9cb2390f98fe12e951f5df71d0b41e';
    baseURl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}&to=4`;
    result = await fetch(baseURl);
    datas = await result.json()
    console.log(datas)
    genrateHTML(datas.hits);
}

function genrateHTML(results) {
    showINHTML = '';
    results.map(result => {
        showINHTML += `
        <div class="col-3 my-3">
        <div class="card">
            <div class="card-body">
                <img src="${result.recipe.image}" alt="" class='img-fluid'>
                <h6 class=' text-center my-2 text-truncate'>${result.recipe.label}</h6>
                <div class="d-flex justify-content-between align-items-center">
                    <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
                    <a href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
                </div>
            </div>
        </div>
    </div> 
        `
        document.querySelector('#showRecipe').innerHTML = showINHTML;

    })
}
// weather app close 