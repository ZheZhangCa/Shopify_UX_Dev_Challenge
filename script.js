function validateForm(form){


      var input_username =form.username.value;
      var input_password=document.getElementById('password').value;
      var error=0;
      //console.log(input_username.length);
    
  
 if (input_username.length < 8 ) {
        document.getElementById('username').style.borderColor ="red";
        document.getElementById('form_usernameError').style.display="block";
        console.log(input_username.length);
        error++;
        console.log("error"+error);
       
 }
 else if (input_username.length > 25) {
        document.getElementById('username').style.borderColor ="red";
        document.getElementById('form_usernameError').style.display="block";
        error++;
        console.log(input_username.length);
        console.log("error"+error);
        
 }
else{
    document.getElementById('username').style.borderColor ="transparent";
    document.getElementById('form_usernameError').style.display="none";
    console.log(input_username.length);

    console.log("error"+error);

}

 if(input_password.length < 8){
      document.getElementById('password').style.borderColor ="red";
      document.getElementById('form_passwordError').style.display="block";
      error++;
      console.log(input_password.length);
      console.log("error1"+error);
     
 }
else if(input_password.length > 25 ){
    document.getElementById('password').style.borderColor ="red";
    document.getElementById('form_passwordError').style.display="block";
    error++;
    console.log(input_password.length);
    console.log("error1"+error);
    
}
else{
    document.getElementById('password').style.borderColor ="transparent";
    document.getElementById('form_passwordError').style.display="none";
    console.log(input_password.length);

    console.log("error1"+error);

}

if (error == 0){
    document.getElementById('login').style.display="none";
    document.getElementById('loader').style.display="block";

    setTimeout(function(){    
        document.getElementById('login-col').style.display="none";
        document.getElementById('logedin').style.display="table-cell"; 
    }, 3000);
}

 /*
 else{
     var submit_button = document.getElementById('login');
     var loader=document.getElementById('loader');
      $("#loader").show();
      $("#login").replaceWith(loader);
      return true;
 }
   */
  return false;
}

$( "#signout" ).click(function() {
    document.getElementById('login-col').style.display="table-cell"; 
    $( "#logedin" ).hide();
    $( "#loader" ).hide();
    $( "#login" ).show();
    $("#login-form").trigger("reset");
    $( "#checkbox-1" ).prop( "checked", false );
  });

