$(document).ready(function() {
    // When the form is submitted
    $("#registrationForm").submit(function(event) {
        event.preventDefault(); // Prevent page reload

        // Get values from the form fields
        var fullName = $("#fullName").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var address = $("#address").val();

        // Display the information on the page
        $("#outputName").text(fullName);
        $("#outputEmail").text(email);
        $("#outputPhone").text(phone);
        $("#outputAddress").text(address);

        // Hide the form and show the output
        $(".form-container").hide();
        $(".output-container").show();
    });
});
