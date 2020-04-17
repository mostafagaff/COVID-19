$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

var allData = [];
var httpreq = new XMLHttpRequest();
getdata();
function display() {
    var tempContainer = `
    <div class="col-md-4 p-5 total">
          <h2>عدد الحالات</h2>
          <p>`+ allData.cases + `</p>
        </div>
        <div class="col-md-4 p-5 total">
          <h2>عدد الوفيات</h2>
          <p>`+ allData.deaths + `</p>
        </div>
        <div class="col-md-4 p-5 total">
          <h2>عدد المعافين</h2>
          <p>`+ allData.recovered + `</p>
        </div>`;
    document.getElementById("totalSec").innerHTML = tempContainer;
}
function getdata() {
    httpreq.open("GET", "https://coronavirus-19-api.herokuapp.com/all");
    httpreq.send();
    httpreq.onreadystatechange = function () {
        if (httpreq.readyState == 4 && httpreq.status == 200) {
            allData = JSON.parse(httpreq.response);
            display()
        }

    }
}




var allCountries = [];
var httpreqForCountries = new XMLHttpRequest();
getdataCountries();
function getdataCountries() {
    httpreqForCountries.open("GET", "https://coronavirus-19-api.herokuapp.com/countries");
    httpreqForCountries.send();
    httpreqForCountries.onreadystatechange = function () {
        if (httpreqForCountries.readyState == 4 && httpreqForCountries.status == 200) {
            allCountries = JSON.parse(httpreqForCountries.response);
            displayCountries()
        }

    }
}

function displayCountries() {
    var tempCountries = ` `;
    for (let index = 0; index < allCountries.length; index++) {
        tempCountries = tempCountries + `
        <h4 class="m-3">`+ allCountries[index].country + `</h4>
        <div class="row text-center">
          <div class="col-md-6">
            <p class="p-0 m-0">`+ allCountries[index].cases + ` : مجموع الحالات</p>
          </div>
          <div class="col-md-6">
            <p class="p-0 m-0">`+ allCountries[index].todayCases + ` : حالات اليوم</p>
          </div>
          <div class="col-md-6">
            <p class="p-0 m-0">`+ allCountries[index].deaths + ` : مجموع الوفيات</p>
          </div>
          <div class="col-md-6">
            <p class="p-0 m-0">`+ allCountries[index].todayDeaths + ` : وفيات اليوم</p>
          </div>
          <div class="col-md-6">
            <p class="p-0 m-0">`+ allCountries[index].recovered + ` : مجموع المعافين</p>
          </div>
          <div class="col-md-6">
            <p class="p-0 m-0">`+ allCountries[index].critical + ` : حالات خطره</p>
          </div>
        </div>
        `
    }
    document.getElementById("itemCountrie").innerHTML = tempCountries;
}



var egyptData = [];
var httpreqForEgypt = new XMLHttpRequest();
getdataEgypt();
function getdataEgypt() {
    httpreqForEgypt.open("GET", "https://coronavirus-19-api.herokuapp.com/countries/egypt");
    httpreqForEgypt.send();
    httpreqForEgypt.onreadystatechange = function () {
        if (httpreqForEgypt.readyState == 4 && httpreqForEgypt.status == 200) {
            egyptData = JSON.parse(httpreqForEgypt.response);
            console.log(egyptData);
            displayEgypt()
        }

    }
}

function displayEgypt() {
    var tempEgypt = `
    <div class="col-md-12">
    <p class=" m-1">مجموع الحالات</p>
    <p>`+egyptData.cases+`</p>
  </div>
  <div class="col-md-12">
    <p class=" m-1">حالات اليوم</p>
    <p>`+egyptData.todayCases+`</p>

  </div>
  <div class="col-md-12">
    <p class=" m-1">مجموع الوفيات</p>
    <p>`+egyptData.deaths+`</p>

  </div>
  <div class="col-md-12">
    <p class=" m-1">وفيات اليوم</p>
    <p>`+egyptData.todayDeaths+`</p>

  </div>
  <div class="col-md-12">
    <p class=" m-1">مجموع المعافين</p>
    <p>`+egyptData.recovered+`</p>

  </div>
  <div class="col-md-12">
    <p class=" m-1">حالات خطره</p>
    <p>`+egyptData.critical+`</p>

  </div>`;

    document.getElementById("egyptNum").innerHTML = tempEgypt;
}
