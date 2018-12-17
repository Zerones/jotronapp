
function bypassLogin() {
    loggedInUser = 'Testbruker';
    nomberTelUser = 'nomber';
    userID = '0';
    showMenu();
}
function dologInCheck() {

    var username = document.getElementById('usernameTxt').value;
    var password = document.getElementById('passwordTxt').value;
    var loginSuccess = false;

    var users = passenger.passengers;

    for (var i = 0; i < users.length; i++) {

        if (users[i].username == username && users[i].password == password) {
            loginSuccess = true;
            userID = i;
        }
    }
    if (loginSuccess) 
    {
        showMenu();
        loggedInUser = username;
    } else {
        document.getElementById('wrongpass').innerHTML = 'Wrong Username or password!';
        document.getElementById('usernameTxt').style.boxShadow = '0 0 20px red';
        document.getElementById('passwordTxt').style.boxShadow = '0 0 20px red';
    }
}
