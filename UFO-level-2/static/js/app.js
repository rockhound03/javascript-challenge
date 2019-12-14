// from data.js

var tableData = data;
var button = d3.select("#filter-btn");

var countries = tableData.map(country => country.country);



button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var dateToFilter = inputElement.property("value");

    var tbody = d3.select("tbody");
    tbody.html = "";

    

    var filterUFOs = tableData.filter((ufo) => {
        return ufo.datetime === dateToFilter;
    });
    
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
