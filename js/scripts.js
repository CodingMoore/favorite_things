// $(document).ready(function() {
//   $(document).submit(function(event) {
//     const inputVal1 = $("#faveInput1").val();
//     const inputVal2 = $("#faveInput2").val();
//     const inputVal3 = $("#faveInput3").val();
//     let inputFinal = [inputVal1, inputVal2, inputVal3];
//     alert(inputFinal);
//     event.preventDefault();
//   });
// });

//Please undo this stuff if it is not making sense. What really helps me is to go with that works/makes sense then refactor (clean up) later. - Cathy 
//You're all doing awesome!

/*function listOfThings(inputVal){
  let thingsList = [];
  thingsList.push(inputVal);
  favThings(thingsList);
  return thingsList; 
}

function favThings(thingsList) {
  let newThingsList = thingsList.join(", ");
  return newThingsList;
}*/

$(document).ready(function() {
  let thingsList = []
  $(document).submit(function(event) {
    const inputVal = $("#faveInput").val();
    thingsList.push(inputVal)
    $("#thingsOutput").text(thingsList);
    event.preventDefault();  
  });
    $("#super").click(function() {   
      thingsList.pop();
      alert(thingsList);  
    });
});
