$(document).ready(function () {

    //Set Date using moment
    $("#currentDay").text(moment().format("MMM Do YY"));

    function timeClock() {
        var currentHour = moment().hours();
        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id")\

            //console.log(hourBlock)
        })
    }
}