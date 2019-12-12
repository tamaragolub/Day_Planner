$(".save-btn").on("click", function(){
// retrieving the ID of the input box
    var inputID = $(this).attr("data-inputID");

    // got the value of the input box, using the ID we retrieved
    var inputValue = $(inputID).val();

    console.log(inputValue);

    // localStorage.setItem(key, value)
    localStorage.setItem(inputID, inputValue);
})


var textIDs = ["#9am-text", "#10am-text", "#11am-text", "#12pm-text", "#1pm-text", "#2pm-text", "#3pm-text", "#4pm-text", "#5pm-text"]

// for loop to get the texts for various IDs

for (var i = 0; i < textIDs.length; i++){
    
   var result = localStorage.getItem(textIDs[i])

    $(textIDs[i]).val(result);
}

