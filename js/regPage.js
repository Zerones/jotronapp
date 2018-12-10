function showregPage() 
{
    pageID = ['Registration','showfrontPage()'];
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = headerCall() + `
    
    <div class="appointmentsh1">Account creation</div>

    <div class="wrapacc">
        <div class="head1">Fill out the boxes below to register an account</div>
        <input type="text" placeholder="Username" id="usernameregTxt" /><br />
        <input type="text" placeholder="Email" id="emailTxt" /><br />
        <input type="text" placeholder="password" id="passwordregTxt" /><br />
        <input type="text" placeholder="repeate password" id="passwordrepreTxt" /><br />
        <input type="text" placeholder="Streetname" id="streetNameTxt" /><br />
        <input type="text" placeholder="House Number" id="homeadressTxt" /><br />
        <input type="text" placeholder="City" id="cityTxt" /><br />
        <input type="text" placeholder="Telephone number" id="mobilTxt" /><br />
    
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
function addNewUser() {



    var username = document.getElementById('usernameregTxt').value;
    var email = document.getElementById('emailTxt').value;
    var password = document.getElementById('passwordregTxt').value;
    var repeatePassword = document.getElementById('passwordrepreTxt').value;
    var phoneNumber = document.getElementById('mobilTxt').value;
    var streetName = document.getElementById('streetNameTxt').value;
    var houseNumber = document.getElementById('homeadressTxt').value;
    //var pickPoint = document.getElementById('pickupTxt').value;
    var city = document.getElementById('cityTxt').value;

    if (username == '' || email == '' || password == '' || repeatePassword == '' || phoneNumber == '' || city == '' || streetName == '' || houseNumber == '' ) {
        document.getElementById('checkAll').innerHTML = 'fill in everything';

    } else if (password !== repeatePassword) {
        document.getElementById('checkAll').innerHTML = 'The password is not the same';
    }
    else {

        var newItem = {};
        newItem.username = username;
        newItem.email = email;
        newItem.password = password;
        newItem.repeatePassword = repeatePassword;
        newItem.phoneNumber = phoneNumber;
        newItem.houseNumber = houseNumber;
        newItem.streetName = streetName;
        //newItem.pickPoint = pickPoint;
        newItem.role = [false, false];
        newItem.city = city;

        //newItem.pickPoint = pickPoint.value;
        passenger.passengers.push(newItem);

        var mainContentDiv = document.getElementById('mainContent');
        mainContentDiv.innerHTML = ` 


    <div class="sikker" style="color:white">You are now registered!</div>
   
      
        <button class="m22" onclick="showfrontPage()" style="background-color:white">ok</button>
    `;

    }

}



