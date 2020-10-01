// document.ready is going o render the the html and css before going into the function
$(document).ready(function () {
    
   
   
    // trying to get the date to load in the jumbotron class of the header tag
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    // creating a on click event for when the user presses the save button in each time block.
    $(".saveBtn").on("click", function () {
        
        // get the values from the time blocks that the users. I worked with my tutor here to come up with these variables. 
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // sending the variables created above into local storage
        localStorage.setItem(time, text);
    })
    //figure out a way to load the local storage from each of the time blocks created (1 for every hour)
    //24 clock not 12!!!!
   
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    // function hourTracker() {
    //     //get current number of hours.
    //     var currentHour = moment().hour();

    //     // loop over time blocks
    //     $(".time-block").each(function () {
    //         var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    //         console.log( blockHour, currentHour)

    //         //check if we've moved past this time
    //         if (blockHour < currentHour) {
    //             $(this).addClass("past");
    //             $(this).removeClass("future");
    //             $(this).removeClass("present");
    //         }
    //         else if (blockHour === currentHour) {
    //             $(this).removeClass("past");
    //             $(this).addClass("present");
    //             $(this).removeClass("future");
    //         }
    //         else {
    //             $(this).removeClass("present");
    //             $(this).removeClass("past");
    //             $(this).addClass("future");
    //         }
    //     })
    // }
    // hourTracker();
})