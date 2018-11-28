var ProfileInfo = 
[
    
    {
        username: '',
        password: '',
        phoneNumber: '',
        email: '',
        pickPoint: '',
        status: '',
        role: [false, false]
    }
];

function addProfile() 
{
    var newItem = {};
    newItem.username = document.getElementById('usernameValue').value;
    newItem.password = document.getElementById('passwordValue').value;
    newItem.phoneNumber = document.getElementById('phoneValue').value;
    newItem.email = document.getElementById('emailValue').value;
    newItem.pickPoint = document.getElementById('pickPointValue').value;
    newItem.status = document.getElementById('statusValue').value;
    newItem.role[1] = document.getElementById('driverValue').toggle;
    newItem.role[2] = document.getElementById('passengerValue').toggle;
    allItems.push(newItem);
}