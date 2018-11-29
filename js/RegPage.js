function showRegPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
    
    
    <div class="backtop"></div>

    <a href="index.html"><div class="backbuttonsymbol">&lt;&lt</div></a>
    <a href="index.html"><div class="backbutton"></div></a>

    <div class="backheadaccmake">Account creation</div>
 


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
            As a condition of use, when you use the services provided by this application you agree to the following:
            When you are a passanger of another driver you will pay the driver 3,90 kr per km after each trip.
            This application is only for employees of Jotron all rights reserved.
            etc etc etc
        </div>
    </div>
    <div>
        <button type="submit" id="regsub">Submit</button>
    </div>

        `;
}
