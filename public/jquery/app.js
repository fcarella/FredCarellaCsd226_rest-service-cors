
async function f() {

    // https://www.tutorialsteacher.com/jquery/jquery-ajax-method
    $.ajax('http://localhost:8080/greeting',
        {
            dataType: 'json', // type of response data
            timeout: 500,     // timeout milliseconds
            success: function (data,status,xhr) {   // success callback function
                $('#p1').text(data.content);
            },
            error: function (jqXhr, textStatus, errorMessage) { // error callback
                $('#p1').append('Error: ' + errorMessage);
            }
        });

}
async function f2() {

    // https://www.tutorialsteacher.com/jquery/jquery-ajax-method
    $.ajax('http://localhost:8080/greeting',
        {
            dataType: 'json', // type of response data
            timeout: 500,     // timeout milliseconds
            data: { name: 'Fred Carella' },  // data to submit
            success: function (data,status,xhr) {   // success callback function
                $('#p1').text(data.content);
            },
            error: function (jqXhr, textStatus, errorMessage) { // error callback
                $('#p1').append('Error: ' + errorMessage);
            }
        });

}
function display(text){
    const elem = document.getElementById("p1");
    elem.innerText=text;
}