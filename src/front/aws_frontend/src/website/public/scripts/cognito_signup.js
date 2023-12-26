let loginForm = document.getElementById('registration');

//REGISTRATION LINK TO HTML
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');

    if (username.value == "" || password.value== "" || email == "") {
        alert("Please fill out all fields");
    }else{
       registerUser(username.value,"bob","smith",email.value,password.value);
    }

});

//Call API Endpoint 
async function registerUser(username,firstname,lastname,email,password) {

    bodyRequest = {
        "username": username,
        "name":{
            "first_name": firstname,
            "last_name": lastname},
        "email": email,
        "password": password
    }

    const response = await fetch("https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v1/api_2/user_management/create_user",{
        method: "POST",
        body: JSON.stringify(bodyRequest),
        // headers: {
        //     "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        //     "Access-Control-Allow-Origin": "http://localhost:3000"
        // }
    });
    //get body of response
    const data = await response.json();
    console.log(data);

}
