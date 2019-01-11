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
firedata.collection('users').get().then(
    function(collectionSnapshot)
    {
        collectionSnapshot.forEach(
            function (testSnapshot)
            {
                console.log(testSnapshot.data());

            }
        );
    }
);
