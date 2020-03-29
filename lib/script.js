// create varibles which can be easily set peremeters which can be easily changes allowing for easy customization
//  these are the settings variables
// create array for storing information for different boxes.
let day = [
{
  hour:'12:00 am',
  apointment: "",
},{
  hour: '1:00 am',
  b: 'am',
  apointment: "",
},{
  hour: '2:00 am',
  apointment: "",
},{
  hour: '3:00 am',
  apointment: "",
},{
  hour: '4:00 am',
  apointment: "",
},{
  hour: '5:00 am',
  apointment: "",
},{
  hour: '6:00 am',
  apointment: "",
},{
  hour: '7:00 am',
  apointment: "",
},{
  hour: '8:00 am',
  apointment: "",
},{
  hour: '9:00 am',
  apointment: "",
},{
  hour: '10:00 am',
  apointment: "",
},{
  hour: '11:00 am',
  apointment: "",
},{
  hour: '12:00 pm',
  apointment:""
},{
  hour: '1:00 pm',
  apointment:""
},{
  hour: '2:00 pm',
  apointment:""
},{
  hour: '3:00 pm',
  apointment:""
},{
  hour: '4:00 pm',
  apointment:""
},{
  hour: '5:00 pm',
  apointment:""
},{
  hour: '6:00 pm',
  apointment:""
},{
  hour: '7:00 pm',
  apointment:""
},{
  hour: '8:00 pm',
  apointment:""
},{
  hour: '9:00 pm',
  apointment:""
},{
  hour: '10:00 pm',
  apointment:""
},{
  hour: '11:00 pm',
  apointment:""
},
]
let firstHour = "8:00 am";
lastHour = '5:00 pm';
startTime = day.findIndex((item) => item.hour === firstHour);
endTime =  day.findIndex((item) => item.hour === lastHour);
SelectedHours= "";
currentTime = "12:00 pm" 
// moment().format('h:00 a')
indexCT =  day.findIndex((item) => item.hour === currentTime)
newDay="false"

 


//  document.ready () chain of functions
$(document).ready(start())
  
  function start(){ 

// add today's date
currentDate();

retrieveData();
generateRows();
 hText();
}
// sets any data in localStorage to the view
function retrieveData() {
//   var retrievedData = localStorage.getItem("daily");
//    newDay= JSON.parse(retrievedData);
    console.log(newDay);
 if (newDay === "false") {
    SelectedHours= day.slice(startTime,endTime+1);
 }else{
    SelectedHours= newDay.slice(startTime,endTime+1);
 }
}; 


// write function to create and label box-containers acording to the settings variables
// labels include both he time of day shown and the button valu for the save process
 function generateRows() {
i=SelectedHours
for (i=0;i + 2<= SelectedHours.length; i++) { 
    var elmnt = document.getElementsByClassName("row")[0];
    var cln = elmnt.cloneNode(true);
      document.body.appendChild(cln);
     
}};
// $(".hour").forEach(element => {
 // creates schedule data
function hText(){
    for (i = 0; i < SelectedHours.length; i++){
   var H = SelectedHours[i]["hour"]

   apoint = SelectedHours[i]["apointment"]
   indexH = day.findIndex((item) => item.hour === H)
   document.getElementsByClassName("hour")[i].append(H)

   document.getElementsByClassName("description")[i].value=indexH
   $("textarea")[i].append(apoint)
   
   
   classDump = document.getElementsByTagName("textarea")[i]
    if  (H === currentTime){ 
    classDump.classList.add("present");
 
   }else if ( indexH <= indexCT)  {
    classDump.classList.add("past");
     
   } else {
    classDump.classList.add("future");
     
   }
    
   
};}


// get current date for #currentDay header
function currentDate(){
let cd= moment().format('dddd, MMMM Do')
  $("#currentDay").text(cd);
  
}


 
 
 

// code save buttons to work with array and display

// saves data to be used in localStorage
$(document).on('click', ".saveBtn", function () {
  event.preventDefault();
  var textValue = $(this).parent('span').siblings('span.description').children('textarea.future').val()
  var textIndex = $(this).parent('span').siblings('span.description').val()
  console.log(textIndex)
  
  day[textIndex].apointment = textValue

  saveapointments();
})
// saves data to localStorage
function saveapointments() {
  localStorage.setItem("daily", JSON.stringify(day));
  
  console.log("saved")
  start()
}



// // sets any existing localStorage data to the view if it exists
// function init() {
//   var storedday = JSON.parse(localStorage.getItem("day"));
//   console.log(storedday)
//   // if (storedday) {
//   //     day = storedday;
//   // }

//   saveapointments();
//   displayapointments();
// }