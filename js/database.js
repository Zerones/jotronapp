var userID;
var ProfileInfo = 
[
    
    {
        username: 'Kappa',
        password: 'bla',
        phoneNumberNumber: '1341',
        email: '124',
        pickPoint: '124',
        homeAdress: 'LARVIK',
        role: [false, false]
    }
];

function addProfile() 
{
    var newItem = {};
    newItem.username = document.getElementById('usernameValue').value;
    newItem.password = document.getElementById('passwordValue').value;
    newItem.phoneNumberNumber = document.getElementById('phoneNumberValue').value;
    newItem.email = document.getElementById('emailValue').value;
    newItem.pickPoint = document.getElementById('pickPointValue').value;
    newItem.role[1] = document.getElementById('driverValue').toggle;
    newItem.role[2] = document.getElementById('passengerValue').toggle;
    allItems.push(newItem);
}

var passenger = {

    passengers: [
        {name: 'Magnus Viken',
        city: 'Tønsberg',
        homeAdress: 'Kjellenveien',
        husnr: '7',
        phoneNumber: '22 47 05 19',
        username: 'Magnus',
        password: '123',
        email: '124',
        pickPoint: '124',
        role: [false, false]},

        {name: 'Christian',
        city: 'Sande',
        homeAdress: 'kaiveien',
        husnr: '8',
        phoneNumber: '22 47 05 19',
        username: 'Christian',
        password: '123',
        email: '124',
        pickPoint: '124',
        role: [false, false]},

        {name: 'Sebastian',
        city: 'Sande',
        homeAdress: 'kaiveien',
        husnr: '8',
        phoneNumber: '22 47 05 19',
        username: 'Sebastian',
        password: '123',
        email: '124',
        pickPoint: '124',
        role: [false, false]},

        {name: 'Tom',
        city: 'Sande',
        homeAdress: 'kaiveien',
        husnr: '8',
        phoneNumber: '22 47 05 19',
        username: 'Tom',
        password: '123',
        email: '124',
        pickPoint: '124',
        role: [false, false]},

        {name: 'Brage',
        city: 'Sande',
        homeAdress: 'kaiveien',
        husnr: '8',
        phoneNumber: '22 47 05 19',
        username: 'Brage',
        password: '123',
        email: '124',
        pickPoint: '124',
        role: [false, false]},

        {name: 'Daniel',
        city: 'Sande',
        homeAdress: 'kaiveien',
        husnr: '8',
        phoneNumber: '22 47 05 19',
        username: 'Daniel',
        password: '123',
        email: '124',
        pickPoint: '124',
        role: [false, false]},

        {name: 'Shafique',
        city: 'Sande',
        homeAdress: 'kaiveien',
        husnr: '8',
        email: '124',
        pickPoint: '124',
        phoneNumber: '22 47 05 19',
        username: 'Shafique',
        password: '123',
        role: [false, false]},

        {name: 'Terje',
        city: 'Sande',
        homeAdress: 'kaiveien',
        husnr: '8',
        email: '124',
        pickPoint: '124',
        phoneNumber: '22 47 05 19',
        username: 'Terje',
        password: '123',
        role: [false, false]},

        {name: 'Geir',
        city: 'Sande',
        homeAdress: 'kaiveien',
        husnr: '8',
        email: '124',
        pickPoint: '124',
        phoneNumber: '22 47 05 19',
        username: 'Geir',
        password: '123',
        role: [false, false]},
    ],

};
