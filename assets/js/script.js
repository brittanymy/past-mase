// Current date format
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

$(document).ready(function () {
  // Save button function
  $(".saveBtn").on("click", function () {
    // Collects sibling and child elements from HTML
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");

    // Saves to local storage
    localStorage.setItem(time, text);
  });

  // Color code function
  function timeExpression() {

    let currentTime = moment().hour();

    $(".time-block").each(function () {
      let timeBlock = parseInt($(this).attr("id").split("hour")[1]);

      if (timeBlock < currentTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (timeBlock === currentTime) {
        $(this).removeClass("past")
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    })
  }

  // Grabs item from local storage
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour16 .description").val(localStorage.getItem("hour16"));
  $("#hour17 .description").val(localStorage.getItem("hour17"));

  timeExpression();
});
