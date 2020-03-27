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
x = day.findIndex((item) => item.hour === firstHour);
y =  day.findIndex((item) => item.hour === lastHour);
SelectedHours= day.slice(x,y);


// write function to create and label box-containers acording to the settings variables
// labels include both he time of day shown and the button valu for the save process
$(document).ready(function(){ 
  generateRows();
 hText()})
function generateRows() {
i=SelectedHours
for (i=0;i + 2<= SelectedHours.length; i++) { 
  
  
  
  var elmnt = document.getElementsByClassName("row")[0];
var cln = elmnt.cloneNode(true);

document.body.appendChild(cln);
}};

function hText(){
  i=SelectedHours
  for (i=0;i<= SelectedHours.length; i++){
 var h = SelectedHours[i].hour

    document.getElementsByClassName("hour")[i].append(h)
}};

  




// creat way to convert militiary time or find better way to work out time array

// code save buttons to work with array and display




