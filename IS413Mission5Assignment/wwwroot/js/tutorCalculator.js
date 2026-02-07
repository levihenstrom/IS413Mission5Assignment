// Calculator logic lives in jQuery to match the assignment requirements.
$(function () {
    // Pull the hourly rate from the selected service.
    var hourlyRate = parseFloat($("#serviceSelect").val());

    function updateRateDisplay() {
        // Keep the rate card in sync with the selected service.
        hourlyRate = parseFloat($("#serviceSelect").val());
        $("#rateAmount").text("$" + hourlyRate.toFixed(2));
        $("#rateCard").data("rate", hourlyRate);
    }

    $("#serviceSelect").on("change", function () {
        updateRateDisplay();
        $("#totalOutput").text("$0.00");
        $("#hoursError").text("");
    });

    // Calculate total when the user clicks the button.
    $("#calculateBtn").on("click", function () {
        var hoursValue = $("#hoursInput").val();
        var hours = parseFloat(hoursValue);

        if (isNaN(hours) || hours <= 0) {
            // Simple validation for positive numbers only.
            $("#hoursError").text("Please enter a positive number of hours.");
            $("#totalOutput").text("$0.00");
            return;
        }

        $("#hoursError").text("");
        var total = hours * hourlyRate;
        $("#totalOutput").text("$" + total.toFixed(2));
    });

    updateRateDisplay();
});
