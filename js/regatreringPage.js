// JavaScript source code
function showRegestrirngPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
    
   
    <div class="backtop"></div>
    <div class="backbutton" onclick="showfrontPage()">&lt;&lt</div>

    <div class="backheadtext">Registration</div>

    <div class="appointmentsh1">Account creation</div>

    <div class="wrapacc">
        <div class="head1">Fill out the boxes below to register an account</div>
        <input type="text" placeholder="Username" id="usernameregTxt" /><br />
        <input type="text" placeholder="Email" id="emailTxt" /><br />
        <input type="text" placeholder="password" id="passwordregTxt" /><br />
        <input type="text" placeholder="repeate password" id="passwordrepreTxt" /><br />
        <input type="text" placeholder="Home address" id="homeadressTxt" /><br />
        <input type="text" placeholder="Telephone number" id="mobilTxt" /><br />
        <input type="text" placeholder="Wanted pick-up location" id="pickupTxt" /><br />

        <a href="https://www.google.com/maps" id="googelmapreg"><div>Use google maps to get coordinates</div></a>

        <div>Terms and conditions:</div>

        <div class="terms">
            As a condition of use, when you use the services provided by this application you agree to the following:<br/>
            When you are a passanger of another driver you will pay the driver 3,90 kr per km after each trip.<br/>
            This application is only for employees of Jotron all rights reserved.<br/>
            etc etc etc
        </div>
    </div>
   <div id="checkAll" style="color:red"></div>
    <div>
        <button onclick="addNewUser()" class="login" type="submit" id="regsub">Submit</button>
    </div>

        `;
}
var regInfo =
    [

        {
            username: '',
            email: '',
            password: '',
            repeatePassword: '',
            phoneNumber: '',
            homeAdress: '',
            pickPoint: '',

            role: [false, false]
        }
    ];

function addNewUser() {
    var newItem = {};
    newItem.username = document.getElementById('usernameregTxt').value;
    newItem.email = document.getElementById('emailTxt').value;
    newItem.password = document.getElementById('passwordregTxt').value;
    newItem.repeatePassword = document.getElementById('passwordrepreTxt').value;
    newItem.phoneNumber = document.getElementById('mobilTxt').value;
    newItem.homeAdress = document.getElementById('homeadressTxt').value;

    newItem.pickPoint = document.getElementById('pickupTxt').value;
    regInfo.push(newItem);


    var username = document.getElementById('usernameregTxt').value;
    var email = document.getElementById('emailTxt').value;
    var password = document.getElementById('passwordregTxt').value;
    var repeatePassword = document.getElementById('passwordrepreTxt').value;
    var phoneNumber = document.getElementById('mobilTxt').value;
    var homeAdress = document.getElementById('homeadressTxt').value;
    var pickPoint = document.getElementById('pickupTxt').value;
    
    if (username == '' || email == '' || password == '' || repeatePassword == '' || phoneNumber == '' || homeAdress == '' || pickPoint == '') {
        document.getElementById('checkAll').innerHTML = 'fill in everything';
     
    } else if (password !== repeatePassword) {
        document.getElementById('checkAll').innerHTML = 'The password is not the same';
    }
    else {
        var mainContentDiv = document.getElementById('mainContent');
        mainContentDiv.innerHTML = ` 


    <div class="sikker" style="color:white">you are register now</div>
    <div class="knapp">
      
        <button id="knappB" onclick="showfrontPage()" style="background-color:white">ok</button>
    </div>`;
       
    }
    
    }




