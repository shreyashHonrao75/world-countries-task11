const cl = console.log;

const cardInfo = document.getElementById('cardInfo');

const btnName = document.getElementById('btnName');
const nameIcon = document.getElementById('nameIcon');

const btnCap = document.getElementById('btnCap');
const capIcon = document.getElementById('capIcon');

const btnPop = document.getElementById('btnPop');
const popIcon = document.getElementById('popIcon');


const updateCountries = () => {
    let result = '';
    countries.forEach(ele => {
        result += ` 
            <div class="col-lg-2">
                <div class="card country">
                    <img
                        src="${ele.flag}"
                        class="card-img-top shadow"
                        alt="Flag"
                        title="Flag"
                    />
                    <div class="card-body">
                        <h5 class="card-title text-center">${ele.name}</h5>
                        <div class="card-text">
                            <p class="mb-0"><span class="font-weight-bold">Capital: </span>${ele.capital}</p>
                            <p class="mb-0"><span class="font-weight-bold">Languages: </span>${ele.languages}</p>
                            <p class="mb-0"><span class="font-weight-bold">Population: </span>${ele.population}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    cardInfo.innerHTML = result;
};


updateCountries(); 


let isAscendingName = true;
let isAscendingCap = true;
let isAscendingPop = true;


const sortedNames = () => {
    nameIcon.classList.remove('d-none')
    capIcon.classList.add('d-none')
    popIcon.classList.add('d-none')
    if (isAscendingName) {
        nameIcon.classList.remove('fa-arrow-down-long');
        nameIcon.classList.add('fa-arrow-up-long');
        countries.sort((a, b) => (a.name > b.name) ? -1:1)
    } else {
        nameIcon.classList.remove('fa-arrow-up-long');
        nameIcon.classList.add('fa-arrow-down-long');
        countries.sort((a, b) => (a.name > b.name) ? 1:-1)
    }
    isAscendingName = !isAscendingName;
    updateCountries();
};

const sortedCapitals = () => {
    capIcon.classList.remove('d-none')
    nameIcon.classList.add('d-none')
    popIcon.classList.add('d-none')
    if (isAscendingCap) {
        capIcon.classList.remove('fa-arrow-down-long');
        capIcon.classList.add('fa-arrow-up-long');
        countries.sort((a, b) => {
            a.capital = a.capital || 'unknown';
            b.capital = b.capital || 'unknown';
            return (a.capital > b.capital) ? -1:1
        }) 
    } else {
        capIcon.classList.remove('fa-arrow-up-long');
        capIcon.classList.add('fa-arrow-down-long');
        countries.sort((a, b) => {
            a.capital = a.capital || 'unknown';
            b.capital = b.capital || 'unknown';
            return (a.capital > b.capital) ? 1:-1
        })
    }
    isAscendingCap = !isAscendingCap;
    updateCountries();
};


const sortedPopulations = () => {
    capIcon.classList.add('d-none')
    nameIcon.classList.add('d-none')
    popIcon.classList.remove('d-none')
    if (isAscendingPop) {
        popIcon.classList.add('fa-arrow-down-long');
        popIcon.classList.remove('fa-arrow-up-long');
        countries.sort((a, b) => a.population - b.population)
    } else {
        popIcon.classList.add('fa-arrow-up-long');
        popIcon.classList.remove('fa-arrow-down-long');
        countries.sort((a, b) => b.population - a.population)
    }
    
    isAscendingPop = !isAscendingPop;
    updateCountries();
};


btnName.addEventListener("click", sortedNames);
btnCap.addEventListener("click", sortedCapitals);
btnPop.addEventListener("click", sortedPopulations);
