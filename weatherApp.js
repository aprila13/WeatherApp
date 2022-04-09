//**APRIL */
let weather = {
  apikey: "650a8878e347137c39f66ce8c8cbdfab",
  baseurl: "https://api.openweathermap.org/data/2.5/weather?",
  getweather: function (zipCode) {
    fetch(this.baseurl + "zip=" + zipCode + ",us&units=imperial&appid=" + this.apikey)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let city = document.querySelector(".zipCodeCity");
        city.innerHTML = data["name"];
      });
  },
};

let zipButton = document.querySelector(".zipButton");

zipButton.addEventListener("click", function (e) {
  let zipInputValue = document.querySelector(".zipInput").value;
  console.log(zipInputValue);
  weather.getweather(zipInputValue);
  e.preventDefault();
});



//**CHINA */
// let weather = {
//     "apikey": "650a8878e347137c39f66ce8c8cbdfab",
//     "baseurl" : "https://api.openweathermap.org/data/2.5/weather?",
//     getweather: function (zipCode) {
//         fetch( this.baseurl + "zip=" + zipCode +",us&units=imperial&appid="+this.apikey)
//         .then((response) => {
//             if(!response.ok) {
//                 alert("invalid zipcode");
//                 throw new Error("invalid zipcode")
//             }
//             return response.json();
//         })
//         .then((data) => this.displayweather(data));
//     },
//     displayweather(data) {
//         let { timezone }= data;
//         let { name } = data;
//         let { icon, description } = data.weather[0];
//         let { temp }  = data.main;
//         let {temp_max, temp_min} = data.main;
//         // console.log(timezone,name,icon,description,temp,temp_max,temp_min)
//         // window.onload = function() {
//         //     setInterval(200)
//         // Have to go back and fix date
//         document.querySelector(".currentDate").innerHTML = "Date:" + timezone;
//         document.querySelector(".zipCodeCity").innerHTML = "Weather in " + name;
//          // document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
//         document.querySelector(".currentConditions").innerHTML = "What's it's like today: " + description;
//         document.querySelector(".temperature").innerHTML = "Temperature: " + temp + " &#x2109";
//         document.querySelector(".tempHiLow").innerHTML = "High: " + temp_max + " &#x2109" + " / Low: " + temp_min + " &#x2109";
//         // }
//     },
// search: function() {
//             this.getweather(document.querySelector(".zipButton").value)
//         }
        
// };

// window.onload = () => {
//     weather.getweather("27597")
// document.querySelector(".zipButton").addEventListener("click", function(e) {
//   weather.search();
//   e.preventDefault()
// })
// }


// // window.onload = () => {
// //     weather.getweather()

// //     document.getElementById("zipButton").addEventListener('submit', (e) => {
// //         let location = document.getElementById("zipButton").value;
// //         document.getElementById("zipButton").value = '';

// //         weather.getweather(location).catch(() => {
// //             document.getElementById("zipButton").classList.add("invalid");
// //         });
// //         e.preventDefault();
// //     });

// //     document.getElementById("zipButton").addEventListener('input', () => {
// //         const zipButton = document.getElementById("zipButton");
// //     })
// // };
