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
 // for (var i = 0; i < 10; i++) {
     
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
  //$('#myTableBody').pageMe({pagerSelector:'#myPager',showPrevNext:true,hidePageNumbers:false,perPage:4});

}
function reset(){
    filteredData = dataSet;

}

function handleSearchButtonClick() {
    
    // Format the user's search by removing leading and trailing whitespace
    var filterdateTime = $dateTimeInput.value.trim(); 
  
    // Set filteredDatas to an array of all data whose "dateTime" matches the filter
    filteredData = dataSet.filter(function(data) {
      var dateTimeData = data.datetime; 
      var newDate = new Date(dateTimeData);
      var inputDate = new Date(filterdateTime)
      // If true, add the data to the filteredDatas, otherwise don't add it to filteredDatas
      return (newDate.getTime() === inputDate.getTime())
    });
    createTable();
  }

  function filterAllInputs() {
    var dTinput,ctyInput, stInput, ctryInput, shpInput, durInput;
    var dataCity, dataDur, dataShp, dataCtry, dataSt;
    durInput = document.querySelector("#durationInput").value.trim();
    shpInput = document.querySelector("#shapeInput").value.trim().toLowerCase();
    ctryInput = document.querySelector("#countryInput").value.trim().toLowerCase();
    ctyInput = document.querySelector("#cityInput").value.trim().toLowerCase();
    stInput = document.querySelector("#stateInput").value.trim().toLowerCase();
    dtInput = document.querySelector("#dateTimeInput").value.trim();

    var dateTimeData;
    var tempDate;
    var inputFormatDate;
    //alert("state: " + stInput)

    // Set filteredAddresses to an array of all addresses whose "city" matches the filter
    filteredData = dataSet.filter(function(data) {
        
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length == 0 
            && stInput.length == 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            return dataCity === ctyInput;
        }
        if(ctyInput.length == 0  && durInput.length > 0  && shpInput.length == 0  
            &&  ctryInput.length == 0 && stInput.length == 0 && dtInput.length == 0){
            dataDur = data.durationMinutes;
            return dataDur === durInput;
        }
        if(shpInput.length > 0  && ctyInput.length == 0  && durInput.length == 0   
            &&  ctryInput.length == 0 && stInput.length == 0 && dtInput.length == 0){
            dataShp = data.shape.toLowerCase();
            return dataShp === shpInput;
        }
        if(shpInput.length == 0 && ctyInput.length == 0  && durInput.length == 0   
            &&  ctryInput.length > 0 && stInput.length == 0 && dtInput.length == 0){
            dataCtry = data.country.toLowerCase();
            return dataCtry === ctryInput;
        }
        if(ctyInput.length > 0  && durInput.length > 0  && shpInput.length == 0  
            &&  ctryInput.length == 0 && stInput.length == 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            dataDur = data.durationMinutes;
            return (dataCity === ctyInput && dataDur === durInput);
        }
        if(ctyInput.length > 0  && durInput.length == 0  && shpInput.length == 0  
            &&  ctryInput.length > 0 && stInput.length == 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            dataCtry = data.country.toLowerCase();
            return (dataCity === ctyInput && dataCtry === ctryInput);
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length > 0  &&  ctryInput.length == 0 
            && stInput.length == 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            dataShp = data.shape.toLowerCase();
            return (dataCity === ctyInput && dataShp === shpInput);
        }
        if(ctyInput.length > 0  && durInput.length > 0  && shpInput.length > 0  
            &&  ctryInput.length == 0 && stInput.length == 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            return (dataCity === ctyInput && dataDur === durInput && dataShp === shpInput);
        }
        if(ctyInput.length == 0  && durInput.length > 0  && shpInput.length > 0  
            &&  ctryInput.length > 0 && stInput.length == 0 && dtInput.length == 0){
            dataCtry = data.country.toLowerCase();
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            return (dataCtry === ctryInput && dataDur === durInput && dataShp === shpInput);
        }
        if(ctyInput.length == 0  && durInput.length > 0  && shpInput.length > 0  
            &&  ctryInput.length == 0 && stInput.length == 0 && dtInput.length == 0){
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            return (dataDur === durInput && dataShp === shpInput);
        }
        if(ctyInput.length == 0  && durInput.length == 0  && shpInput.length > 0  
            &&  ctryInput.length > 0 && stInput.length == 0 && dtInput.length == 0){
            dataCtry = data.country.toLowerCase();
            dataShp = data.shape.toLowerCase();
            return (dataCtry === ctryInput && dataShp === shpInput);
        }
        if(ctyInput.length == 0  && durInput.length > 0  && shpInput.length == 0  
            &&  ctryInput.length > 0 && stInput.length == 0 && dtInput.length == 0){
            dataCtry = data.country.toLowerCase();
            dataDur = data.durationMinutes;
            return (dataCtry === ctryInput && dataDur === durInput);
        }
        if(ctyInput.length == 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length == 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataSt = data.state.toLowerCase();
            return dataSt === stInput;
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length == 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            return (dataCity === ctyInput && dataSt === stInput);
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length > 0  &&  ctryInput.length == 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            dataShp = data.shape.toLowerCase();
            return (dataCity === ctyInput && dataSt === stInput && dataShp === shpInput);
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length > 0  &&  ctryInput.length > 0 
            && stInput.length == 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            dataCtry = data.country.toLowerCase();
            dataShp = data.shape.toLowerCase();
            return (dataCity === ctyInput && dataCtry === ctryInput && dataShp === shpInput);
        }
        if(ctyInput.length > 0  && durInput.length > 0  
            && shpInput.length == 0  &&  ctryInput.length == 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            dataDur = data.durationMinutes;
            return (dataCity === ctyInput && dataSt === stInput && dataDur === durInput);
        }
        
        if(ctyInput.length > 0  && durInput.length > 0  
            && shpInput.length > 0  &&  ctryInput.length == 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            return (dataCity === ctyInput && dataSt === stInput && dataDur === durInput && dataShp === shpInput);
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length > 0  &&  ctryInput.length > 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            dataCtry = data.country.toLowerCase();
            dataShp = data.shape.toLowerCase();
            return (dataCity === ctyInput && dataSt === stInput && dataCtry === ctryInput && dataShp === shpInput);
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length > 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            dataCtry = data.country.toLowerCase();
            return (dataCity === ctyInput && dataSt === stInput && dataCtry === ctryInput);
        }
        if(ctyInput.length == 0  && durInput.length > 0  
            && shpInput.length == 0  &&  ctryInput.length == 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataSt = data.state.toLowerCase();
            dataDur = data.durationMinutes;
            return (dataSt === stInput && dataDur === durInput);
        }
        if(ctyInput.length == 0  && durInput.length > 0  
            && shpInput.length > 0  &&  ctryInput.length == 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataSt = data.state.toLowerCase();
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            return (dataSt === stInput && dataDur === durInput && dataShp === shpInput);
        }
        if(ctyInput.length == 0  && durInput.length > 0  
            && shpInput.length > 0  &&  ctryInput.length > 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataCtry = data.country.toLowerCase();
            dataSt = data.state.toLowerCase();
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            return (dataSt === stInput && dataDur === durInput && dataShp === shpInput && dataCtry === ctryInput);
        }
        if(ctyInput.length == 0  && durInput.length == 0  
            && shpInput.length > 0  &&  ctryInput.length == 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataSt = data.state.toLowerCase();
            dataShp = data.shape.toLowerCase();
            return (dataSt === stInput && dataShp === shpInput);
        }
        if(ctyInput.length == 0  && durInput.length == 0  
            && shpInput.length > 0  &&  ctryInput.length > 0 
            && stInput.length > 0 &&  dtInput.length == 0){
            dataSt = data.state.toLowerCase();
            dataShp = data.shape.toLowerCase();
            dataCtry = data.country.toLowerCase();
            return (dataSt === stInput && dataShp === shpInput && dataCtry === ctryInput);
        }
        if(ctyInput.length == 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length > 0 
            && stInput.length > 0 && dtInput.length == 0){
            dataCtry = data.country.toLowerCase();
            dataSt = data.state.toLowerCase();
            return (dataSt === stInput && dataCtry === ctryInput);
        }
        //-------
        if(ctyInput.length == 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length == 0 
            && stInput.length == 0 && dtInput.length > 0){
            
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)
            //alert("Date");

            return (tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length > 0 
            && stInput.length > 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            
            dataCtry = data.country.toLowerCase();
           
            //date:
            
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput && dataSt === stInput 
                && dataCtry === ctryInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length > 0  &&  ctryInput.length > 0 
            && stInput.length > 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            dataShp = data.shape.toLowerCase();
            dataCtry = data.country.toLowerCase();
           
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput && dataSt === stInput 
                && dataCtry === ctryInput && dataShp === shpInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length > 0 
            && stInput.length == 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataCtry = data.country.toLowerCase();
           
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput 
                && dataCtry === ctryInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length == 0 
            && stInput.length > 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            //date:
            
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput && dataSt === stInput 
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length > 0  &&  ctryInput.length > 0 
            && stInput.length > 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            dataShp = data.shape.toLowerCase();
            dataCtry = data.country.toLowerCase();
           
            //date:
            
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput && dataSt === stInput 
                && dataDur === durInput && dataShp === shpInput
                && dataCtry === ctryInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length > 0  && durInput.length > 0  
            && shpInput.length > 0  &&  ctryInput.length > 0 
            && stInput.length > 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            dataCtry = data.country.toLowerCase();
           
            //date:
            
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput && dataSt === stInput 
                && dataDur === durInput && dataShp === shpInput
                && dataCtry === ctryInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length == 0 
            && stInput.length == 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length > 0  && durInput.length > 0  
            && shpInput.length == 0  &&  ctryInput.length == 0 
            && stInput.length == 0 && dTinput.length > 0){
            dataCity = data.city.toLowerCase();
            
            dataDur = data.durationMinutes;
            
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput 
                && dataDur === durInput 
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length > 0  && durInput.length > 0  
            && shpInput.length > 0  &&  ctryInput.length == 0 
            && stInput.length == 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput  
                && dataDur === durInput && dataShp === shpInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length > 0  && durInput.length > 0  
            && shpInput.length > 0  &&  ctryInput.length > 0 
            && stInput.length == 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            dataCtry = data.country.toLowerCase();
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput 
                && dataDur === durInput && dataShp === shpInput
                && dataCtry === ctryInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length == 0 
            && stInput.length > 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            dataCtry = data.country.toLowerCase();
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput && dataSt === stInput 
                && dataCtry === ctryInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length > 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length > 0 
            && stInput.length > 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataSt = data.state.toLowerCase();
            dataCtry = data.country.toLowerCase();
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataCity === ctyInput && dataSt === stInput 
                && dataCtry === ctryInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length == 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length > 0 
            && stInput.length > 0 && dtInput.length > 0){
            dataSt = data.state.toLowerCase();
            dataCtry = data.country.toLowerCase();
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataSt === stInput 
                && dataCtry === ctryInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        if(ctyInput.length == 0  && durInput.length == 0  
            && shpInput.length > 0  &&  ctryInput.length == 0 
            && stInput.length > 0 && dtInput.length > 0){
            dataSt = data.state.toLowerCase();
            dataShp = data.shape.toLowerCase();
            dataCtry = data.country.toLowerCase();
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataSt === stInput 
                && dataShp === shpInput
                && dataCtry === ctryInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }

        //-------
        if(ctyInput.length >= 0  && durInput.length == 0  
            && shpInput.length > 0  &&  ctryInput.length == 0 
            && stInput.length == 0 && dtInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataShp = data.shape.toLowerCase();
            
            //date:
            dateTimeData = data.datetime; 
            tempDate = new Date(dateTimeData);
            inputFormatDate = new Date(dtInput)

            return (dataShp === shpInput
                && dataCity === ctyInput
                && tempDate.getTime() === inputFormatDate.getTime());
        }
        //-------
        if(shpInput.length > 0 && ctyInput.length > 0 && durInput.length > 0  
            &&  ctryInput.length > 0 && stInput.length > 0){
            dataCity = data.city.toLowerCase();
            dataDur = data.durationMinutes;
            dataShp = data.shape.toLowerCase();
            dataCtry = data.country.toLowerCase();
            dataSt = data.state.toLowerCase();
            return (dataCity === ctyInput &&
                dataDur === durInput &&
                dataShp === shpInput &&
                dataCtry === ctryInput &&
                dataSt == stInput);
        }
        if(ctyInput.length == 0  && durInput.length == 0  
            && shpInput.length == 0  &&  ctryInput.length == 0 
            && stInput.length == 0){
                reset();
                return true;
        }
    });

    createTable();
  }
  function paginate_me(){
    alert("clicked!")
    var rowsShown = 100;
    var rowsTotal = $('tbody tr').length;
    alert("Total Rows: " + rowsTotal)
    var numPages = rowsTotal/rowsShown;
    //----------
    // for(i = 0;i < numPages;i++) {
    //     var pageNum = i + 1;
    //     $('ul .pagination li').append('<a href="#" rel="'+i+'">'+pageNum+'</a> ');
    // }
    //----------
    $('tbody tr').hide();
    $('tbody tr').slice(0, rowsShown).show();
    //----------------------------------------
    // $('#nav a:first').addClass('active');
    // $('#nav a').bind('click', function(){

        // $('#nav a').removeClass('active');
        // $(this).addClass('active');
        // var currPage = $(this).attr('rel');
        // var startItem = currPage * rowsShown;
        // var endItem = startItem + rowsShown;
        // $('#data tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
        // css('display','table-row').animate({opacity:1}, 300);
    // });

  }

// Render the table for the first time on page load
createTable();