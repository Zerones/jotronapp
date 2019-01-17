var config = 
{
    apiKey: "AIzaSyA7m_UGRomma__kK70jWA2O3_Xtm8SgUxQ",
    authDomain: "jodrive-8fd21.firebaseapp.com",
    databaseURL: "https://jodrive-8fd21.firebaseio.com",
    projectId: "jodrive-8fd21",
    storageBucket: "jodrive-8fd21.appspot.com",
    messagingSenderId: "781632029567"
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
var firedata = firebase.firestore();
firedata.collection('users').onSnapshot(
    function(collectionSnapshot)
    {
        let counter = 0;
        collectionSnapshot.forEach(
            function (testSnapshot)
            {
                passenger.passengers[counter] = testSnapshot.data();
                counter++;
                dataBaseUpdate();
            }
        );
    }
);

function dataBaseUpdate()
{
    if(currentPage == 'profile') showProPage();
    if(currentPage == 'driverappointments') ShowDriverAppointments();
    if(currentPage == 'meny') showMenu();
    if(currentPage == 'passangerappointmentlist') checkAppointment();
    if(currentPage == 'passangerorderappointment') selectDriverForAppointment();
    if(currentPage == 'driverrequests') showreqPage();
    if(currentPage == 'tour') startTour();
}

function userUpdate()
{
    let dataID = passenger.passengers[userID];
    firedata.collection("users").doc(dataID.username).set(
        {
            name: dataID.name,
            city: dataID.city, 
            gatenavn: dataID.gatenavn,
            husnr: dataID.husnr,
            phoneNumber: dataID.phoneNumber,
            username: dataID.username,
            password: dataID.password,
            email: dataID.email,
            pickPoint: dataID.pickPoint,
            isPassenger: dataID.isPassenger,
            isDriver: dataID.isDriver,
            requests: dataID.requests,
            listPassenger: dataID.listPassenger,
            picture: dataID.picture,
            alert: dataID.alert  
        }).then(function()
        {
            return; 
        });
}
function getUserData()
{
    for(let i = 0; i < passenger.passengers.length; i++)
    {
        let dataID = passenger.passengers[i];
        let name = dataID.name;
        let city = dataID.city;
        let gatenavn = dataID.gatenavn;
        let husnr = dataID.husnr;
        let phoneNumber = dataID.phoneNumber;
        let username = dataID.username;
        let password = dataID.password;
        let email = dataID.email;
        let pickPoint = dataID.pickPoint;
        let isPassenger = dataID.isPassenger;
        let isDriver = dataID.isDriver;
        let requests = dataID.requests;
        let listPassenger = dataID.listPassenger;
        let picture = dataID.picture;
        let alert = dataID.alert; 
        fullUpdate( name, city, gatenavn, husnr, phoneNumber, username, password, email, pickPoint, isPassenger, isDriver, picture, alert, requests, listPassenger)
    }
}
function fullUpdate(name, city, gatenavn, husnr, phoneNumber, username, password, email, pickPoint, isPassenger, isDriver, picture, alert, requests, listPassenger)
{
        firedata.collection("users").doc(username).set(
        {
            name: name,
            city: city, 
            gatenavn: gatenavn,
            husnr: husnr,
            phoneNumber: phoneNumber,
            username: username,
            password: password,
            email: email,
            pickPoint: pickPoint,
            isPassenger: isPassenger,
            isDriver: isDriver,
            picture: picture,
            alert: alert,
            requests: requests,
            listPassenger: listPassenger,
        }).then(function()
        {
            return;
        });
}

