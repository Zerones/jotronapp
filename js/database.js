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

var pasanger = {

    pasangers: [
        { name: 'Sophia Gibson', address: 'Jonas Lies Vei 10C', city: 'Larvik', mobile: '22470519'},
        { name: 'Gunnvor Espenson', address: 'Nanset Gata 32', city: 'Sande', mobile: '79416663' },
        { name: 'Elias Jacobsen', address: 'Hagalia 32', city: 'Larvik', mobile: '52212504'  },
        { name: 'Monika Isaksen', address: 'Torget 10', city: 'Larvik', mobile: '90967881'  },
        { name: 'Tom .J. Bain', address: 'Haslegaten 21', city: 'Sandefjord', mobile: '39318340'  },
        { name: 'Tommy Johnson', address: 'Øvre Ohlssons Gate 23', city: 'Brevik', mobile: '54329199'  },
        { name: 'Lorens Lund', address: 'Gate Mc. Gataface', city: 'Sande', mobile: '94716228'  },
        { name: 'Jessica Johnsen', address: 'Drammen 10', city: 'Drammen', mobile: '73689189'  }
    ],

};
