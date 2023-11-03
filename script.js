var currentDate = dayjs().format("MMMM D, YYYY");
$("#currentDay").text(currentDate);

$(".saveBtn").on("click", function () {
  var timeBlockId = $(this).closest(".time-block").attr("id");
  var userInput = $(this).siblings(".description").val();
  console.log("Saving event for " + timeBlockId + ": " + userInput);
  localStorage.setItem(timeBlockId, userInput);
});

var currentHour = dayjs().hour();

$(".time-block").each(function () {
  var timeBlockId = $(this).attr("id");
  var blockHour = parseInt(timeBlockId.split("-")[1]);

  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

function loadEventsFromLocalStorage() {
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var savedEvent = localStorage.getItem(timeBlockId);

    if (savedEvent) {
      $(this).find(".description").val(savedEvent);
    }
  });
}
loadEventsFromLocalStorage();