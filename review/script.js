$(document).ready(function () {
    // Click on Add Review
    $("#btn_add").click(function () {
        console.log("Clicked on Add Review");
        $(this).after("<div id='review_add' class='c_box'>Name</div>");
        $("#review_add").append("<input type='text' class='textbox'></input>");
    })
});