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
    });
  }

  // Grabs item from local storage
  $("#9am .description").val(localStorage.getItem("9am"));
  $("#10am .description").val(localStorage.getItem("10am"));
  $("#11am .description").val(localStorage.getItem("11am"));
  $("#12pm .description").val(localStorage.getItem("12pm"));
  $("#13pm .description").val(localStorage.getItem("13pm"));
  $("#14pm .description").val(localStorage.getItem("14pm"));
  $("#15pm .description").val(localStorage.getItem("15pm"));
  $("#16pm .description").val(localStorage.getItem("16pm"));
  $("#17pm .description").val(localStorage.getItem("17pm"));

  timeExpression();
});
