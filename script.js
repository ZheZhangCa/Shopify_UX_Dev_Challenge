function validateForm(form) {


    var input_username = form.username.value;
    var username_id = 'username';
    var username_error_id = 'form_usernameError';
    var input_password = form.password.value;
    var password_id = 'password';
    var password_error_id = 'form_passwordError';


    var error = 0;
    var error1 = 0;
    error = input_validtaion(input_username, username_id, username_error_id, error);
    error1 = input_validtaion(input_password, password_id, password_error_id, error1);
    console.log("error" + error);
    console.log("error" + error1);
    error = error + error1;


    if (error == 0) {
        document.getElementById('login').style.display = "none";
        document.getElementById('loader').style.display = "block";

        setTimeout(function () {
            document.getElementById('login-col').style.display = "none";
            document.getElementById('logedin').style.display = "table-cell";
        }, 3000);
    }

    return false;
}


document.getElementById("signout").addEventListener("click", signoutFunction);

function signoutFunction() {
    document.getElementById('login-col').style.display = "table-cell";
    document.getElementById('logedin').style.display = "none";
    document.getElementById('loader').style.display = "none";
    document.getElementById('login').style.display = "table-cell";
    document.getElementById("login-form").reset();
    document.getElementById("checkbox-1").checked = false;

}

function input_validtaion(input_value, input_field, error_message, count) {

    if (input_value.length < 8) {
        document.getElementById(input_field).style.borderColor = "red";
        document.getElementById(error_message).style.display = "block";
        //console.log(input_username.length);
        count++;
        //console.log("error"+count);


    } else if (input_value.length > 25) {
        document.getElementById(input_field).style.borderColor = "red";
        document.getElementById(error_message).style.display = "block";
        count++;
        //console.log(input_username.length);
        //console.log("error"+error);


    } else {
        document.getElementById(input_field).style.borderColor = "transparent";
        document.getElementById(error_message).style.display = "none";
        //console.log(input_username.length);
        //console.log("error"+error);
        count = 0;


    }
    return count;

}