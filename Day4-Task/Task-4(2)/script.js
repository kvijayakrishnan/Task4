
const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.onload = function(e) {
    var response = JSON.parse(request.responseText);
    response.forEach(element => {
        console.log(element.flag);  
    });
}


request.send();









// const getCountries = () => {
//         const xhr = new XMLHttpRequest();
//       xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
//       xhr.responeType = "json";
        
//         xhr.onload = () => {
//           const countries = xhr.response;
//          console.log(countries.flag);
//           console.log(JSON.parse(countries))
//         }
//           xhr.send();
//       }
//       getCountries();










