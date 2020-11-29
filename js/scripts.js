
$(document).ready(function() {
  let thingsList = []
  let superThingsList = []
  $(document).submit(function(event) {
    const inputVal = $("#faveInput").val();
    thingsList.push(inputVal)
    $("#thingsOutput").text(thingsList);
    event.preventDefault();  
  });


  // $("#super").click(function() {   
  //   const spliceVal1 = thingsList.splice(0,1);
  //   superThingsList.push(spliceVal1);
  //   $("#thingsOutput").text(thingsList);
  //   $("#superThingsOutput").text(superThingsList);;
  // });


  $("#super").click(function() {   
    const spliceVal1 = thingsList.splice(0,1);
    superThingsList.push(spliceVal1);
    const entry = superThingsList[superThingsList.length-1];
    const entryString = entry.join();  //converts to string
    $("#ulList").append("<li>"+ entryString +"</li>");
  });
  
  $("#super").click(function() {   
    
  });
  
  
  // $("#favorite").click(function() {   
  //   const spliceVal2 = superThingsList.splice(0,1);
  //   thingsList.push(spliceVal2);
  //   $("#thingsOutput").text(thingsList);
  //   $("#superThingsOutput").text(superThingsList);
  // });
});
