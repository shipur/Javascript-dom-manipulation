// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateTimeInput = document.querySelector("#dateTime");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);


// Set filteredData to dataSet initially
var filteredData = dataSet;

// createTable renders the filteredData to the tbody
function createTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current dataSet object and its fields
    var data = filteredData[i];
    var fields = Object.keys(data);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the data object, create a new cell at set its inner text to be the current value at the current data's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = data[field];
    }
  }
  $('#myTableBody').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:4});

}

function handleSearchButtonClick() {
    
    // Format the user's search by removing leading and trailing whitespace
    var filterdateTime = $dateTimeInput.value.trim(); 
  
    // Set filteredDatas to an array of all data whose "dateTime" matches the filter
    filteredData = dataSet.filter(function(data) {
      var dateTimeData = data.datetime; //.toLowerCase();
      var newDate = new Date(dateTimeData);
      var inputDate = new Date(filterdateTime)
      // If true, add the data to the filteredDatas, otherwise don't add it to filteredDatas
      return (newDate.getTime() === inputDate.getTime())
    });
    createTable();
  }

  function filterDateTime() {
    var dTinput;
    
    dTinput =  $dateTimeInput.value.trim(); 
  
    // Set filteredDatas to an array of all data whose "dateTime" matches the filter
    filteredData = dataSet.filter(function(data) {
      var dateTimeData = data.datetime; //.toLowerCase();
      var newDate = new Date(dateTimeData);
      var inputDate = new Date(filterdateTime)
      // If true, add the data to the filteredDatas, otherwise don't add it to filteredDatas
      return (newDate.getTime() === inputDate.getTime())
    });
    createTable();
}

  function filterAllInputs() {
    var dTinput,ctyInput, stInput, ctryInput, shpInput, durInput;
    var dataCity, dataDur, dataShp, dataCtry;
    durInput = document.querySelector("#durationInput").value.trim();
    shpInput = document.querySelector("#shapeInput").value.trim().toLowerCase();
    ctryInput = document.querySelector("#countryInput").value.trim().toLowerCase();
    ctyInput = document.querySelector("#cityInput").value.trim().toLowerCase();
    //alert("country: " + ctryInput)
    // Set filteredAddresses to an array of all addresses whose "city" matches the filter
    filteredData = dataSet.filter(function(data) {
    ctryInput = document.querySelector("#countryInput").value.trim().toLowerCase();
        if(ctyInput.length > 0  && durInput.length == 0  && shpInput.length == 0  &&  ctryInput.length == 0 ){
            dataCity = data.city.toLowerCase();
            return dataCity === ctyInput;
        }
        if(ctyInput.length == 0  && durInput.length > 0  && shpInput.length == 0  &&  ctryInput.length == 0 ){
            dataDur = data.durationMinutes;
            return dataDur === durInput;
        }
        if(shpInput.length > 0  && ctyInput.length == 0  && durInput.length == 0   &&  ctryInput.length == 0 ){
            dataShp = data.shape.toLowerCase();
            return dataShp === shpInput;
        }
        if(shpInput.length == 0 && ctyInput.length == 0  && durInput.length == 0   &&  ctryInput.length > 0 ){
            dataCtry = data.country.toLowerCase();
            return dataCtry === ctryInput;
        }
        if(ctyInput.length > 0  && durInput.length > 0  && shpInput.length == 0  &&  ctryInput.length == 0 ){
            dataCity = data.city.toLowerCase();
            dataDur = data.durationMinutes;
            return (dataCity === ctyInput && dataDur === durInput);
        }
        if(ctyInput.length > 0  && durInput.length == 0  && shpInput.length == 0  &&  ctryInput.length > 0 ){
            dataCity = data.city.toLowerCase();
            dataCtry = data.country.toLowerCase();
            return (dataCity === ctyInput && dataCtry === ctryInput);
        }
        if(ctyInput.length > 0  && durInput.length == 0  && shpInput.length > 0  &&  ctryInput.length == 0 ){
            dataCity = data.city.toLowerCase();
            dataShp = data.shape.toLowerCase();
            return (dataCity === ctyInput && dataShp === shpInput);
        }
        if(ctyInput.length > 0  && durInput.length > 0  && shpInput.length > 0  &&  ctryInput.length == 0 ){
            dataCity = data.city.toLowerCase();
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            return (dataCity === ctyInput && dataDur === durInput && dataShp === shpInput);
        }
        if(ctyInput.length == 0  && durInput.length > 0  && shpInput.length > 0  &&  ctryInput.length > 0 ){
            dataCtry = data.country.toLowerCase();
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            return (dataCtry === ctryInput && dataDur === durInput && dataShp === shpInput);
        }
        if(ctyInput.length == 0  && durInput.length > 0  && shpInput.length > 0  &&  ctryInput.length == 0 ){
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            return (dataDur === durInput && dataShp === shpInput);
        }
        if(ctyInput.length == 0  && durInput.length == 0  && shpInput.length > 0  &&  ctryInput.length > 0 ){
            dataCtry = data.country.toLowerCase();
            dataShp = data.shape.toLowerCase();
            return (dataCtry === ctryInput && dataShp === shpInput);
        }
        if(ctyInput.length == 0  && durInput.length > 0  && shpInput.length == 0  &&  ctryInput.length > 0 ){
            dataCtry = data.country.toLowerCase();
            dataDur = data.durationMinutes;
            return (dataCtry === ctryInput && dataDur === durInput);
        }
        if(shpInput.length > 0 && ctyInput.length > 0 && durInput.length > 0  &&  ctryInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            dataCtry = data.country.toLowerCase();
            return (dataCity === ctyInput &&
                dataDur === durInput &&
                dataShp === shpInput &&
                dataCtry === ctryInput);
        }
    });

    createTable();
  }
  function paginate_me(){
      alert("clicked!")

  }
//   $('#pagination-demo').twbsPagination({
//     totalPages: 35,
//     visiblePages: 7,
//     onPageClick: function (event, page) {
//         $('#page-content').text('Page ' + page);
//     }
// });

  // Pagination:
//   $('ul.pagination li a').on('click',function(e){
//     //alert("clicked!")
//     e.preventDefault();
//     alert("clicked!")
//     var tag = $(this);
//     alert(" click on "+tag.text());
// });
// Render the table for the first time on page load
createTable();