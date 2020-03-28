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
    
    })
    
    
    // write function to create and label box-containers acording to the settings variables
    // labels include both he time of day shown and the button valu for the save process
     function generateRows() {
    
        SelectedHours.forEach(element => {
         var elmnt = $(".row")[0];
        var cln = elmnt.cloneNode(true);
          document.body.appendChild(cln)
    })}
    function hText(){
        for (i = 0; i < SelectedHours.length; i++){
       var h = SelectedHours[i]["hour"]
       document.getElementsByClassName("hour")[i].append(h)
        //   document.getElementsByClassName("hour").append(h)
          console.log(h)
          
      }
      };
    
