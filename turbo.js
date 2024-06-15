// Variable declarations
const demo = document.querySelector(".all-card");
const elanSayi = document.getElementById("elanSayi");
const markaAll = document.getElementById("markaAll");
const modelAll = document.getElementById("modelAll");
const currencys = document.getElementById("currencys");
const model = document.getElementById("model");
const banAll = document.getElementById("banAll");
const selectCount = document.getElementById("selectCount");
const artanIller = document.getElementById("artanIller");
const hiddenndiv = document.querySelector(".hiddenndiv");
let filteredMarkas = [];
const mark = document.querySelector(".mark");
const hidden_div = document.querySelector(".hidden_div");
const pulAll = document.getElementById("pulAll");
let seherrr = document.querySelector(".seherrr");
let ban = document.querySelector(".ban");
const pulsec = document.getElementById("pulsec");
const minPrice = document.getElementById("minIl");
const maxPrice = document.getElementById("maxIl");

// Display data in cards
function displayCars(cars) {
  demo.innerHTML = '';
  cars.map(
    (item) =>
      (demo.innerHTML += `
  <div class="card">
    <i class="fa-solid fa-rotate"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-crown"></i>
    <i class="fa-solid fa-gem"></i>
    <i class="fa-solid fa-percent"></i>
    <img src="${item.img}" alt="">
    <div class="text">
        <h4 class="price">${item.price} <span class="currency">${item.currency}</span></h4>
        <h4 class="name">${item.mark} <span class="currency">${item.model}</span></h4> 
        <h2 class="year">${item.graduationYear}, <span class="muherrik">${item.enginePower}</span>, <span class="surush">${item.km} km</span></h2>
        <span class="citi">${item.city},</span><span> bu gün 10:21</span>
    </div>
  </div>
  `)
  );
}

displayCars(database);
elanSayi.innerHTML = ` ${database.length} yeni elan`;

// Populate brand dropdown
let newmarka = [];
let itemMarka = database.map((item) => item.mark);
itemMarka.filter((item) => {
  if (!newmarka.includes(item)) {
    newmarka.push(item);
  }
});

for (let i = 0; i < newmarka.length; i++) {
  markaAll.innerHTML += `
 <li onclick="chooseMarkLi(this)" class="mmark">${newmarka[i]}</li>
  `;
}

// Toggle brand dropdown
function chooseMark() {
  hidden_div.classList.toggle("mark_active");
}

// Handle brand selection
let herseysl = document.getElementById("herseysl");
function chooseMarkLi(sebuhi) {
  filteredMarkas = database.filter((card) => card.mark == sebuhi.textContent);

  herseysl.style.color = "#ca1016";

  document.querySelector(".model_div").classList.remove("disabledd");
  if (!sebuhi.textContent.includes("Sıfırla")) {
    mark.innerHTML = `${sebuhi.textContent} <i class="fa-solid fa-angle-down">`;
  } else {
    mark.innerHTML = `Marka <i class="fa-solid fa-angle-down">`;
    model.innerHTML = "Model";
    herseysl.style.color = "#8d94ad";
    document.querySelector(".model_div").classList.add("disabledd");
    hiddenndiv.classList.remove("model_active");
  }
  chooseMark();
  hidden_div.classList.remove("mark_active");

  getFilteredModel();
}

// Populate model dropdown based on selected brand
function getFilteredModel() {
  modelAll.innerHTML = '<li class="mmodel" onclick="chooseModelLi(this)"><i class="fa-solid fa-x"></i> Sıfırla </li>';
  let newModel = [];
  newModel = filteredMarkas.map((item) => item.model);
  newModel.sort();

  for (let i = 0; i < newModel.length; i++) {
    modelAll.innerHTML += `
 <li onclick="chooseModelLi(this)" class="mmodel">${newModel[i]}</li>
    `;
  }
}

// Toggle model dropdown
function chooseModel(ehmed) {
  let hiddenndiv = document.querySelector(".hiddenndiv");
  hiddenndiv.classList.toggle("model_active");
}

// Handle model selection
function chooseModelLi(murad) {
  if (!murad.textContent.includes("Sıfırla")) {
    model.innerHTML = `${murad.textContent} <i class="fa-solid fa-angle-down">`;
  } else {
    model.innerHTML = `Model <i class="fa-solid fa-angle-down">`;
  }
  hiddenndiv.classList.remove("model_active");
  let cont = murad.textContent.trim();
  filteredMarkas = filteredMarkas.filter((item) => item.model.includes(cont));
}

// Populate currency dropdown
let newCurrency = [];
let itemcurrency = database.map((item) => item.currency);
itemcurrency.forEach((item) => {
  if (!newCurrency.includes(item)) {
    newCurrency.push(item);
  }
});
newCurrency.sort();

// Toggle currency dropdown
function choosePul() {
  const pulAll = document.getElementById("pulAll");
  pulAll.classList.toggle("active");
}

// Handle currency selection
function choosePulli(sebb) {
  herseysl.style.color = "#ca1016";
  const pulsec = document.getElementById("pulsec");
  pulsec.textContent = sebb;
  choosePul();
}

// Populate body type dropdown
let newBan = [];
let itemBan = database.map((item) => item.typeBan);
itemBan.filter((item) => {
  if (!newBan.includes(item)) {
    newBan.push(item);
  }
});
newBan.sort();

for (let i = 0; i < newBan.length; i++) {
  banAll.innerHTML += `
 <li class="bban mmark" onclick="chooseBanLi(this)"> ${newBan[i]}</li>
  `;
}

// Toggle body type dropdown
function chooseBan() {
  let banhdndiv = document.querySelector(".banhdndiv");
  banhdndiv.classList.toggle("model_active");
}

// Handle body type selection
function chooseBanLi(nicat) {
  herseysl.style.color = "#ca1016";
  let ban = document.querySelector(".ban");
  if (!nicat.textContent.includes("Sıfırla")) {
    ban.innerHTML = `${nicat.textContent} <i class="fa-solid fa-angle-down">`;
  } else {
    ban.innerHTML = `Ban növü <i class="fa-solid fa-angle-down">`;
    herseysl.style.color = "#8d94ad";
  }
  chooseBan();
}

// Populate city dropdown
let newCoun = [];
let itemCoun = database.map((item) => item.city);
itemCoun.filter((item) => {
  if (!newCoun.includes(item)) {
    newCoun.push(item);
  }
});
newCoun.sort();

for (let i = 0; i < newCoun.length; i++) {
  let seherAll = document.getElementById("seherAll");
  seherAll.innerHTML += `
 <li class="sseher mmark" onclick="chooSeseherLi(this)">${newCoun[i]}</li>
  `;
}

// Toggle city dropdown
function chooseseher() {
  let hiddendiv = document.querySelector(".hiddendiv");
  hiddendiv.classList.toggle("mark_active");
}

// Handle city selection
function chooSeseherLi(sebuhi) {
  herseysl.style.color = "#ca1016";
  let hiddendiv = document.querySelector(".hiddendiv");
  let seherrr = document.querySelector(".seherrr");
  if (!sebuhi.textContent.includes("Sıfırla")) {
    seherrr.innerHTML = `${sebuhi.textContent} <i class="fa-solid fa-angle-down"></i>`;
  } else {
    seherrr.innerHTML = `Şəhər <i class="fa-solid fa-angle-down"></i>`;
    herseysl.style.color = "#8d94ad";
    hiddenndiv.classList.remove("model_active");
  }
  chooseseher();
}
// il
function chooseart(element) {
  const dropdown = element.nextElementSibling;
  dropdown.classList.toggle("active");
}

// Function to handle min year selection
function chooseartli(element) {
  const selectedYear = element.textContent.trim();
  const displayElement = element.closest('.artanil').querySelector('.artil');
  displayElement.innerHTML = `${selectedYear} <i class="fa-solid fa-angle-down"></i>`;
  // Close the dropdown
  element.closest('.artilhdndiv').classList.remove("active");
}
function chooseart1(element) {
  const dropdown = element.nextElementSibling;
  dropdown.classList.toggle("active");
}

// Function to handle max year selection
function chooseartli1(element) {
  const selectedYear = element.textContent.trim();
  const displayElement = element.closest('.artanil').querySelector('.artill');
  displayElement.innerHTML = `${selectedYear} <i class="fa-solid fa-angle-down"></i>`;
  // Close the dropdown
  element.closest('.artilhdndi').classList.remove("active");
}

// Article event listeners
const articles = document.querySelectorAll(".yenispan");

articles.forEach((a) => {
  a.classList.remove("red");
});
articles[0].classList.add("red");

let flag = false;

articles.forEach((a) => {
  a.addEventListener("click", (e) => {
    articles.forEach((a) => {
      a.classList.remove("red");
    });
    const id = e.target.dataset.id;
    if (id == 2) {
      flag = true;
      setData();
      pulsec.textContent = "USD";
      document.querySelector(".model_div").classList.remove("disabledd");
    }
    if (id == 1) {
      flag = false;
      setData();
      pulsec.textContent = "AZN";
      document.querySelector(".model_div").classList.add("disabledd");
    }
    e.target.classList.add("red");
  });
});

// Apply filters
function filtrle() {
  let filteredCars = database;
  
  // Filter by selected brand
  const selectedBrand = mark.textContent.trim();
  if (selectedBrand !== 'Marka') {
    filteredCars = filteredCars.filter(car => car.mark === selectedBrand);
  }

  // Filter by selected model
  const selectedModel = model.textContent.trim();
  if (selectedModel !== 'Model') {
    filteredCars = filteredCars.filter(car => car.model === selectedModel);
  }

  // Filter by selected currency
  const selectedCurrency = pulsec.textContent.trim();
  if (selectedCurrency !== 'Valyuta') {
    filteredCars = filteredCars.filter(car => car.currency === selectedCurrency);
  }

  // Filter by selected body type
  const selectedBan = ban.textContent.trim();
  if (selectedBan !== 'Ban növü') {
    filteredCars = filteredCars.filter(car => car.typeBan === selectedBan);
  }

  // Filter by selected city
  const selectedCity = seherrr.textContent.trim();
  if (selectedCity !== 'Şəhər') {
    filteredCars = filteredCars.filter(car => car.city === selectedCity);
  }

  // Filter by year range
  const minYear = parseInt(minPrice.value);
  const maxYear = parseInt(maxPrice.value);
  if (!isNaN(minYear) && !isNaN(maxYear)) {
    filteredCars = filteredCars.filter(car => car.graduationYear >= minYear && car.graduationYear <= maxYear);
  }

  displayCars(filteredCars);
}

document.getElementById("filtrleButton").addEventListener("click", filtrle);
