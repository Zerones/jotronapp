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
            }
        );
    }
);

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

function fullUpdate()
{
    for(let i = 0; i < passenger.passengers.length; i++)
    {
        let dataID = passenger.passengers[i];
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
            picture: userID.picture,
            alert: dataID.alert  
        }).then(function()
        {
            return;
        });
    }
}
