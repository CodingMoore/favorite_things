
$(document).ready(function() {
  let thingsList = []
  let superThingsList = []
  $(document).submit(function(event) {
    const inputVal = $("#faveInput").val();
    thingsList.push(inputVal)
    $("#thingsOutput").text(thingsList);
    //$("#superThingsOutput").text(superThingsList);
    event.preventDefault();  
  });
  $("#super").click(function() {   
    const spliceVal1 = thingsList.splice(0,1);
    superThingsList.push(spliceVal1);
    $("#thingsOutput").text(thingsList);
    $("#superThingsOutput").text(superThingsList);
    alert(thingsList);
    alert(superThingsList);
  });
  $("#favorite").click(function() {   
    const spliceVal2 = superThingsList.splice(0,1);
    thingsList.push(spliceVal2);
    $("#thingsOutput").text(thingsList);
    $("#superThingsOutput").text(superThingsList);
    alert(thingsList);
    alert(superThingsList);
  });

});
