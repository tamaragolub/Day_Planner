$(".save-btn").on("click", function(){

    var inputID = $(this).attr("data-inputID");

    var inputValue = $(inputID).val();

    console.log(inputValue);

    // localStorage.setItem(key, value)
    localStorage.setItem(inputID, inputValue);
})


console.log(localStorage.getItem("#9am-text"))

// for loop to get the texts for various IDs

