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
        localStorage.setItem( hourId, saveNote)


    })
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $("#hour-10 .description").val(localStorage.getItem("hour-10"))
    $("#hour-11 .description").val(localStorage.getItem("hour-11"))
    $("#hour-12 .description").val(localStorage.getItem("hour-12"))
    $("#hour-13 .description").val(localStorage.getItem("hour-13"))
    $("#hour-14 .description").val(localStorage.getItem("hour-14"))
    $("#hour-15 .description").val(localStorage.getItem("hour-15"))
    $("#hour-16 .description").val(localStorage.getItem("hour-16"))
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))


});

//If hourBlock is less than currentHour past use .this $(this).addClass("past")
//if hourBlock is more than currentHour future use
//if hourBlock is equal to currentHour Present

//localStorage.setItem("key", "value")