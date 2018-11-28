
function dologInCheck() {
    var username = document.getElementById('usernameTxt').value;
    var password = document.getElementById('passwordTxt').value;
    if (username == 'admin' && password == '12345') {
        showMenu();
    }
    if (username == '' && password == '') {
    }
    else {
        document.getElementById('wrongpass').innerHTML =
            'Wrong Username or password!';
        document.getElementById('usernameTxt').style.boxShadow =
            '0 0 20px red';
        document.getElementById('passwordTxt').style.boxShadow =
            '0 0 20px red';
    }
}