// document.ready is going to render the the html and css before going into the function
$(document).ready(function () {
    
   
   
    // trying to get the date to load in the jumbotron class of the header tag//used momentjs
    $("#currentDay").text(moment().format("MMM Do YY"));

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
    //24 hr clock not 12!!!! from 9 - 5 so 9 to 17 
   
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


   
})



// another function to track hours and loop over the each time block??

 function trackingHours () {
       
    
    
    //find the current number of hours? I couldn't find anything on the moment documentation but referenced my tutor
        var currentTime = moment().hour();

        
        
        
        //function for the-time block class 
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            
            
            // console logging the variables
            console.log( blockHour, currentTime)
            //else if statement adjusting the styling of the time blocks based on the time of the day
            if (blockHour < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    trackingHours();
