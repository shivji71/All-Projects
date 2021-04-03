"use strict";
    // variables.........................
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");


    // eventListner .......................
    // btn.addEventListener('click', countries("portugal"));
class Countries {

      // all methods.........................

    // choose country.......................
_chooseMyCountry(c) {
    // create xml http request .........
    let xhr = new XMLHttpRequest();
    
    // xhr.open('GET', 'https://restcountries.eu/rest/v2/all', true);

    // connection open 
    xhr.open('GET', `https://restcountries.eu/rest/v2/name/${c}`, true);

    // send request to server  
    xhr.send();
    // load the data 
    xhr.addEventListener('load', function() {
    
        if(this.status === 200) {
            // response data here 
            let countries = JSON.parse(this.responseText);
            console.log(countries[0]);
            let population = String(countries[0].population)
            let p = [...population].splice(0, 2);
           console.log(p);
           console.log(population.split());
           
                    
            console.log(`${population}`);


            let html = `  <article class="country">
            <img class="country__img" src=${countries[0].flag} />
            <div class="country__data">
              <h3 class="country__name">${countries[0].name}</h3>
              <h4 class="country__region">${countries[0].region}</h4>
              <p class="country__row"><span>👫</span>${countries[0].population}</p>
              <p class="country__row"><span>🗣️</span>${countries[0].demonym}</p>
              <p class="country__row"><span>💰</span>${countries[0].currencies[0].name}</p>
            </div>
          </article>`;

          console.log(Math.round);
          console.log(Math);
        //   console.log(countriesContainer);
        //   countriesContainer.classList.toggle('hidden')
          
          countriesContainer.insertAdjacentHTML('beforeend',html);
            
            
        }
        
    })

    xhr.addEventListener('error', function() { 
        alert(`Network Error`);
      });
}

}


//     // all methods.........................

//     // choose country method................
// function chooseCountry(c) {
//     // create xml http request .........
//     let xhr = new XMLHttpRequest();
    
//     // xhr.open('GET', 'https://restcountries.eu/rest/v2/all', true);

//     // connection open 
//     xhr.open('GET', `https://restcountries.eu/rest/v2/name/${c}`, true);

//     // send request to server  
//     xhr.send();
//     // load the data 
//     xhr.addEventListener('load', function() {
    
//         if(this.status === 200) {
//             // response data here 
//             let countries = JSON.parse(this.responseText);
//             console.log(countries[0]);
//             let population = String(countries[0].population)
//             let p = [...population].splice(0, 2);
//            console.log(p);
//            console.log(population.split());
           
                    
//             console.log(`${population}`);


//             let html = `  <article class="country">
//             <img class="country__img" src=${countries[0].flag} />
//             <div class="country__data">
//               <h3 class="country__name">${countries[0].name}</h3>
//               <h4 class="country__region">${countries[0].region}</h4>
//               <p class="country__row"><span>👫</span>${countries[0].population}</p>
//               <p class="country__row"><span>🗣️</span>${countries[0].demonym}</p>
//               <p class="country__row"><span>💰</span>${countries[0].currencies[0].name}</p>
//             </div>
//           </article>`;

//           console.log(Math.round);
//           console.log(Math);
//         //   console.log(countriesContainer);
//         //   countriesContainer.classList.toggle('hidden')
          
//           countriesContainer.insertAdjacentHTML('beforeend',html);
            
            
//         }
        
//     })

//     xhr.addEventListener('error', function() { 
//         alert(`Network Error`);
//       });
// }

let country = new Countries();
country._chooseMyCountry('portugal')

