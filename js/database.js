var userID;
var loggedInUser;
var nomberTelUser;
var pageID = ['0','0'];
var mainContentDiv;

function headerCall()
{
    let headerTop = `
    <div class="backtop"></div>        
    <div class="backheadtext">` + pageID[0] + `</div>
    <div onclick="` + pageID[1] + `" class="backbutton">&lt;&lt</div>`;
    return headerTop;
}
var passenger = 
{

    passengers: [
        {
            name: 'Admin',
            city: 'Ukjent ',
            gatenavn: 'Hvor som helst',
            husnr: ' med wifi/nettilgang ;P',
            phoneNumber: '420',
            username: 'Admin',
            password: '123',
            email: 'meme@at.com',
            pickPoint: 'Server Room',
            isPassenger: false,
            isDriver: false,
            requests: [],
            listPassenger: []
        },

        {
            name: 'Magnus Viken',
            city: 'Tønsberg',
            gatenavn: 'Kjellenveien',
            husnr: '7',
            phoneNumber: '22 47 05 19',
            username: 'Magnus',
            password: '123',
            email: '124',
            pickPoint: '124',
            isPassenger: true,
            isDriver: true,
            requests: [],
            listPassenger: []
        },

        {
            name: 'Christian',
            city: 'Sande',
            gatenavn: 'kaiveien',
            husnr: '8',
            phoneNumber: '22 47 05 19',
            username: 'Christian',
            password: '123',
            email: '124',
            pickPoint: '124',
            isPassenger: true,
            isDriver: true,
            requests: [],
            listPassenger: []
        },

        {
            name: 'Sebastian',
            city: 'Sande',
            gatenavn: 'kaiveien',
            husnr: '8',
            phoneNumber: '22 47 05 19',
            username: 'Sebastian',
            password: '123',
            email: '124',
            pickPoint: '124',
            isPassenger: true,
            isDriver: true,
            requests: [],
            listPassenger: []
        },

        {
            name: 'Tom',
            city: 'Sande',
            gatenavn: 'kaiveien',
            husnr: '8',
            phoneNumber: '22 47 05 19',
            username: 'Tom',
            password: '123',
            email: '124',
            pickPoint: '124',
            isPassenger: true,
            isDriver: true,
            requests: [],
            listPassenger: []
        },

        {
            name: 'Brage',
            city: 'Sande',
            gatenavn: 'kaiveien',
            husnr: '8',
            phoneNumber: '22 47 05 19',
            username: 'Brage',
            password: '123',
            email: '124',
            pickPoint: '124',
            isPassenger: true,
            isDriver: true,
            requests: [],
            listPassenger: []
        },

        {
            name: 'Daniel',
            city: 'Sande',
            gatenavn: 'kaiveien',
            husnr: '8',
            phoneNumber: '22 47 05 19',
            username: 'Daniel',
            password: '123',
            email: '124',
            pickPoint: '124',
            isPassenger: true,
            isDriver: true,
            requests: [],
            listPassenger: []
        },

        {
            name: 'Shafique',
            city: 'Sande',
            gatenavn: 'kaiveien',
            husnr: '8',
            email: '124',
            pickPoint: '124',
            phoneNumber: '22 47 05 19',
            username: 'Shafique',
            password: '123',
            isPassenger: true,
            isDriver: true,
            requests: [],
            listPassenger: []
        },


        {
            name: 'Terje',
            city: 'Sande',
            gatenavn: 'kaiveien',
            husnr: '8',
            email: '124',
            pickPoint: '124',
            phoneNumber: '22 47 05 19',
            username: 'Terje',
            password: '123',
            isPassenger: true,
            isDriver: true,
            requests: [],
            listPassenger: []
        },

        {
            name: 'Geir',
            city: 'Sande',
            gatenavn: 'kaiveien',
            husnr: '8',
            email: '124',
            pickPoint: '124',
            phoneNumber: '22 47 05 19',
            username: 'Geir',
            password: '123',
            isPassenger: true,
            isDriver: true,
            requests: [],
            listPassenger: []
        },
    ],

};
