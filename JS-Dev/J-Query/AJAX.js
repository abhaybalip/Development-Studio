// J-Query - AJAX
// Acronym for java-script and xml


$(document).ready(function () {
    $('.b1').click(function () {
        $('.data').load("Test.html", function (data, status, jqXHR) {
            $('.data').html(status)
            $('.data').html(data)
        })
        console.log('data loaded')
    })

    // load specific content
    $("#target").load("content.html #paragraph2");

    // send data to server
    $("#target").load("content.php", {name: "John", age: 30});
})