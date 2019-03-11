// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Table population using arrow functions
data.forEach((sightingEvents) => {
    // console.log(sightingEvents);
    var row = tbody.append("tr");

    Object.entries(sightingEvents).forEach(function([key, value]) {
        console.log(key, value);

        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Select the filter table button
var userInput = d3.select("#datetime");
var submit = d3.select("#filter-btn");

// Filter the data by user input
submit.on("click", function (){
    // Prevent page refresh
    d3.event.preventDefault();

    // console.log the input value
    console.log(userInput.property("value"));
    
    // Create a new table with filtered data
    var filteredData = tableData.filter(sighting => sighting.datetime === userInput.property("value"))
    console.log(filteredData);

        // Clear existing table
        d3.selectAll("tbody tr").remove();
        d3.selectAll("tbody td").remove();
        
        // Table population using arrow functions
        filteredData.forEach((sightingEvents) => {
    
        // console.log(sightingEvents);
        var row = tbody.append("tr");

        Object.entries(sightingEvents).forEach(function([key, value]) {
            console.log(key, value);

            var cell = tbody.append("td");
            cell.text(value);
        })
    }) 
})
