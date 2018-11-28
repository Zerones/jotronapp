
function doLoginCheck() {
    var username = document.getElementById('usernameTxt').value;
    var password = document.getElementById('passwordTxt').value;
    var loginSuccess = false;
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.username == username && user.password == password) {
            loginSuccess = true;
        }
    }
    if (loginSuccess) {
        showMenu();
    } else {
        document.getElementById('wrongpass').innerHTML = 'Wrong Username or password!';
        document.getElementById('usernameTxt').style.boxShadow = '0 0 20px red';
        document.getElementById('passwordTxt').style.boxShadow = '0 0 20px red';
    }
}

var users =
    [
        {
            username: 'Christian',
            password: '123',
            phoneNumber: '',
            email: '',
            pickPoint: '',
            status: '',
            role: [false, false]
        },
        {
            username: 'Magnus',
            password: '123',
            phoneNumber: '',
            email: '',
            pickPoint: '',
            status: '',
            role: [false, false]
        },
        {
            username: 'Sebastian',
            password: '123',
            phoneNumber: '',
            email: '',
            pickPoint: '',
            status: '',
            role: [false, false]
        },
        {
            username: 'Tom',
            password: '123',
            phoneNumber: '',
            email: '',
            pickPoint: '',
            status: '',
            role: [false, false]
        },
        {
            username: 'Brage',
            password: '123',
            phoneNumber: '',
            email: '',
            pickPoint: '',
            status: '',
            role: [false, false]
        },
        {
            username: 'Daniel',
            password: '123',
            phoneNumber: '',
            email: '',
            pickPoint: '',
            status: '',
            role: [false, false]
        },
        {
            username: 'Rawad',
            password: '123',
            phoneNumber: '',
            email: '',
            pickPoint: '',
            status: '',
            role: [false, false]
        },
        {
            username: 'Shafique',
            password: '123',
            phoneNumber: '',
            email: '',
            pickPoint: '',
            status: '',
            role: [false, false]
        },
        {
            username: 'Terje',
            password: '123',
            phoneNumber: '',
            email: '',
            pickPoint: '',
            status: '',
            role: [false, false]
        },
        {
            username: 'Geir',
            password: '123',
            phoneNumber: '',
            email: '',
            pickPoint: '',
            status: '',
            role: [false, false]
        },

    ];

