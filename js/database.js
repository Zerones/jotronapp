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

var passenger = {

    passengers: [
        {name: 'Magnus Viken',
        city: 'Tønsberg',
        gatenavn: 'Kjellenveien',
        husnr: '7',
        mobile: '22 47 05 19',
        username: 'Magnus',
        password: '123'},

        {name: 'Christian',
        city: 'Sande',
        gatenavn: 'kaiveien',
        husnr: '8',
        mobile: '22 47 05 19',
        username: 'Christian',
        password: '123'},

        {name: 'Sebastian',
        city: 'Sande',
        gatenavn: 'kaiveien',
        husnr: '8',
        mobile: '22 47 05 19',
        username: 'Sebastian',
        password: '123'},

        {name: 'Tom',
        city: 'Sande',
        gatenavn: 'kaiveien',
        husnr: '8',
        mobile: '22 47 05 19',
        username: 'Tom',
        password: '123'},

        {name: 'Brage',
        city: 'Sande',
        gatenavn: 'kaiveien',
        husnr: '8',
        mobile: '22 47 05 19',
        username: 'Brage',
        password: '123'},

        {name: 'Daniel',
        city: 'Sande',
        gatenavn: 'kaiveien',
        husnr: '8',
        mobile: '22 47 05 19',
        username: 'Daniel',
        password: '123'},

        {name: 'Shafique',
        city: 'Sande',
        gatenavn: 'kaiveien',
        husnr: '8',
        mobile: '22 47 05 19',
        username: 'Shafique',
        password: '123'},

        {name: 'Terje',
        city: 'Sande',
        gatenavn: 'kaiveien',
        husnr: '8',
        mobile: '22 47 05 19',
        username: 'Terje',
        password: '123'},

        {name: 'Geir',
        city: 'Sande',
        gatenavn: 'kaiveien',
        husnr: '8',
        mobile: '22 47 05 19',
        username: 'Geir',
        password: '123'},
    ],

};
