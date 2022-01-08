$(document).ready(function () {
    //Set Date using moment
    $("#currentDay").text(moment().format("MMM Do YY"));

    function timeClock() {
        var currentHour = moment().hours();
        $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);

            console.log(hourBlock)
            if (hourBlock < currentHour) {
                $(this).addClass("past")
            }
            else if (hourBlock === currentHour) {
                $(this).addClass("present")
            }
            else { $(this).addClass("future") }
        });
    }
    timeClock()

    $(".saveBtn").on("click", function () {
        var saveNote = $(this).prev().val()
        var hourId = $(this).parent().attr("id")
        var update = JSON.parse(localStorage.getItem("description"))
        var timeSlot = {

        }

    })


    
});

//If hourBlock is less than currentHour past use .this $(this).addClass("past")
//if hourBlock is more than currentHour future use
//if hourBlock is equal to currentHour Present