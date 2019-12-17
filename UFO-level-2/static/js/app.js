// from data.js

var tableData = data;
var button = d3.select("#filter-btn");

var countries = tableData.map(country => country.country);



button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var dateToFilter = inputElement.property("value");
    var filterUFOs = tableData;

    if(dateToFilter.length > 0){
        filterUFOs = filterUFOs.filter((ufo) => {
            return ufo.datetime === dateToFilter;
        });
    }
    
    var inputCity = d3.select("#city");
    var cityToFilter = inputCity.property("value");

    if (cityToFilter.length > 0){
        filterUFOs = filterUFOs.filter((ufo) => {
            return ufo.city === cityToFilter;
        })
    }

    var inputState = d3.select("#state");
    var stateToFilter = inputState.property("value");

    if(stateToFilter.length > 0){
        filterUFOs = filterUFOs.filter((ufo) => {
            return ufo.state === stateToFilter;
        })
    }

    var inputCountry = d3.select("#country");
    var countryToFilter = inputCountry.property("value");

    if(countryToFilter.length > 0){
        filterUFOs = filterUFOs.filter((ufo) => {
            return ufo.country === countryToFilter;
        })
    }

    var inputShape = d3.select("#shape");
    var shapeToFilter = inputShape.property("value");

    if(shapeToFilter.length > 0){
        filterUFOs = filterUFOs.filter((ufo) => {
            return ufo.shape === shapeToFilter;
        })
    }
    var tbody = d3.select("tbody");
    tbody.selectAll("*").remove();

    

    
    
    console.log(filterUFOs);
    var testList = []
    filterUFOs.forEach((ufoEvent) => {
        var row = tbody.append("tr");
        row.append("td").text(ufoEvent.datetime);
        row.append("td").text(ufoEvent.city);
        row.append("td").text(ufoEvent.state);
        row.append("td").text(ufoEvent.country);
        row.append("td").text(ufoEvent.shape);
        row.append("td").text(ufoEvent.durationMinutes);
        row.append("td").text(ufoEvent.comments);
        testList.push(ufoEvent);
      });
    //console.log(testList);
    

});
console.log(countries);
// YOUR CODE HERE!
