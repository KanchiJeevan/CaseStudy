var username = $(`input[name="username"]`).get(0);
var password = $(`input[name="password"]`).get(0);
$("form").submit(inputValidationAndRedirection);

function inputValidationAndRedirection(event){
    event.preventDefault();
    if(username.value=="admin" && password.value==12345){
        $(location).attr("href" , "index.html");
    }
    else{
        alert("Incorrect username or password");
    }

}