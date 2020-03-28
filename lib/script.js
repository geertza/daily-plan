// create varibles which can be easily set peremeters which can be easily changes allowing for easy customization
//  these are the settings variables
// create array for storing information for different boxes.
const day = [
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
let firstHour = "9:00 am";
lastHour = '5:00 pm';
startTime = day.findIndex((item) => item.hour === firstHour);
endTime =  day.findIndex((item) => item.hour === lastHour);
SelectedHours= day.slice(startTime,endTime+1);


 


//  document.ready () chain of functions
$(document).ready(function(){ 
  //  create rows
  generateRows();    
//  add 'hour'.text
  hText()
// add today's date
currentDate()

chronoPostion()
})


// write function to create and label box-containers acording to the settings variables
// labels include both he time of day shown and the button valu for the save process
 function generateRows() {
i=SelectedHours
for (i=0;i + 2<= SelectedHours.length; i++) { 
    var elmnt = document.getElementsByClassName("row")[0];
    var cln = elmnt.cloneNode(true);
      document.body.appendChild(cln);
      
}};

function hText(){
  i=SelectedHours
  for (i=0;i-1<= SelectedHours.length; i++){
 var h = SelectedHours[i].hour
    document.getElementsByClassName("hour")[i].append(h)
}
};


// get current date for #currentDay header
function currentDate(){
let cd= moment().format('dddd, MMMM Do')
  $("#currentDay").text(cd);
}

 // creates schdeduler data
 function chronoPostion(){
  $("textarea").addClass("present");

return (x)}
// hourPlan.append(timeFactor);
// timeFactor.attr("class", thisHour.id);
// if (thisHour.time < moment().format("HH")) {
//  timeFactor.attr ({
//      "class": "past", 
//  }) 
// } else if (thisHour.time === moment().format("HH")) {
//  timeFactor.attr({
//      "class": "present"
//  })
// } else if (thisHour.time > moment().format("HH")) {
//  timeFactor.attr({
//      "class": "future"
//  })
// }

// code save buttons to work with array and display

// saves data to be used in localStorage
$(".saveBtn").on("click", function(event) {
  event.preventDefault();
  var saveIndex = $(this).siblings(".description").children(".future").attr("id");
  myDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
  console.log(saveIndex);
  saveReminders();
  displayReminders();
})


