
function validateCorrectLength(id) {
    const minLength = 7;
    if($('#' + id).prop('value').length < minLength) {
        $('#' + id + 'Err').html((minLength + ' character minimum').trim());
    }
    else {
        $('#' + id + 'Err').html('');
    }

}
function validateSignUpForm() {
    let validLength = false;
    let validPassword = false;
    let passwordMatch = false;
    const minLength = 7;
    const USER_EXISTS = 'exists';
    const SUCCESS = 'success';

    let user = $('#username').prop('value');
    let password = $('#userPassword').prop('value');
    let confirm = $('#confirmPassword').prop('value');

    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;

    if(user.length >= minLength && password.length >= minLength && confirm.length >= minLength) {
        validLength = true;
    }
    if(passwordCheck.test(password) === true) {
        validPassword = true;
    }
    if(password === confirm) {
        passwordMatch = true;
    }
    $('#signUpError').empty();
    if(!validLength) {
        $('#signUpError').append('<p class="my-0">Username and password must be at least ' + minLength + ' characters.</p>');
    }
    if(!validPassword) {
        $('#signUpError').append('<p class="my-0">Password must contain at least one lower case, upper case and number character.</p>');
    }
    if(!passwordMatch) {
        $('#signUpError').append('<p class="my-0">The passwords do not match.</p>');
    }

    if(validLength && validPassword && passwordMatch) {
        let form = $('#signUpForm');
        $.ajax({
            type: "POST",
            url: 'server/addcredentials.php',
            data: form.serialize(),
            success: function(data)
            {
               let response = data.trim();
               console.log(response);
                if(response == USER_EXISTS) {
                    alert("This username is already taken!");
                    // location.reload(true);
                }
                else if(response == SUCCESS) {
                    alert("Successfully Added!");
                    window.location ='login.html';
                }
                else {
                    alert("Server Error");
                }
            }
        });
    }
}

