

var pageID = ['',''];
var profileAdressCombo;
var headerProfile;
var profileFill = `
<div class="lele2"><h2></h2></div>    
<div class="backgroundkaos" id="backgroundkaos"></div>      
<div class="profileBilde"></div>`;

function profileWho() 
{
    if(userID == null)
    {        
        profileAdressCombo = 'server room';
        return ProfileInfo[0];
    }
    else
    {        
        profileAdressCombo = passenger.passengers[userID].gatenavn + ' ' +
        passenger.passengers[userID].husnr + ' ' + passenger.passengers[userID].city;
        return passenger.passengers[userID];
    }
}
function showProPage() {
    var mainContentDiv = document.getElementById('mainContent');
    pageID[0] = 'Profile';
    pageID[1] = 'showMenu()';
    headerProfile = `
        <div class="backtop"></div>        
        <div class="backheadtext">` + pageID[0] + `</div>
        <div onclick="` + pageID[1] + `" class="backbutton">&lt;&lt</div>       
    `;
    let pro = profileWho();
    let lagrefill;
    lagrefill = `<div class="ProfileBoks">`;
    lagrefill += `<div class="profileNavn">` + pro.username + `</div>`;
    for (let i = 1; i < 7; i++) {
        lagrefill += `<div class="profile` + i + `">`;
        if (i == 1) lagrefill += `Phone Number:<br><div id="nummer" class="profileInfo">` + pro.phoneNumber + `</div>`;
        if (i == 2) lagrefill += `Email: <br><div id="mail" class="profileInfo">` + pro.email + `</div>`;
        if (i == 3) lagrefill += `Pick up Point: <br><div id="point" class="profileInfo">` + pro.pickPoint + `</div>`;
        if (i == 4) lagrefill += `Home Adress:<br><div id="status" class="profileInfo">` + profileAdressCombo + `</div>`;
        if (i == 5) {
            if (pro.role[1] == true) lagrefill += `<div>Passenger:<div class="profileGreen"></div></div>`;
            else if(pro.role[1] == null || pro.role[1] == false) lagrefill += `<div>Passenger:<div class="profileRed"></div></div>`;
        }
        if (i == 6) {
            if (pro.role[0] == true) {
                lagrefill += `<div>Driver:<div class="profileGreen"></div></div>`;
            }
            else if(pro.role[0] == null || pro.role[0] == false) {
                lagrefill += `<div>Driver:<div class="profileRed"></div></div>`;
            }
        }
        lagrefill += `</div>`;
    }
    lagrefill += `<button type="button" class="proedit" onclick="profileEdit()">Edit Profile</button>`;
    lagrefill += `</div>`;
    mainContentDiv.innerHTML = headerProfile + profileFill + lagrefill;
}
function profileEdit() 
{
    pageID[1] = 'showProPage()';
    headerProfile = `
        <div class="backtop"></div>        
        <div class="backheadtext">` + pageID[0] + `</div>
        <div onclick="` + pageID[1] + `" class="backbutton">&lt;&lt</div>       
    `;
    var mainContentDiv = document.getElementById('mainContent');
    var lagrefil = headerProfile + profileFill;
    let pro = profileWho();
    let toggle1 = '';
    let toggle2 = '';
    if(pro.role[1] == true) toggle1 = 'checked';
    if(pro.role[0] == true) toggle2 = 'checked';
    lagrefil += '<div class="ProfileBoks" id="boksf">';
    for (let i = 1; i < 7; i++) {
        lagrefil += '<div class="profile' + i + '">';
        if (i == 1) lagrefil += `Phone Number:<br><input type="text"  value="" id="phoneValue">`;
        else if (i == 2) lagrefil += `Email: <br><input type="text"  value="" id="emailValue">`;
        else if (i == 3) lagrefil += `Pick up Point: <br><input type="text"  value="" id="pickPointValue">`;
        else if (i == 4) lagrefil += `Home Adress:<br><input type="text"  value="" placeholder="Road" id="statusValue">
        <input type="text"  value="" placeholder="Number" id="status2Value" maxlength="4" size="6"><input type="text"  value="" placeholder="City" id="status3Value" >`;
        else if (i == 5) lagrefil += `Passenger:<input type="checkbox" ` + toggle1 + ` id="passengerValue">`;
        else if (i == 6) lagrefil += `Driver:<input type="checkbox" ` + toggle2 + `  id="driverValue">`;
        lagrefil += `<div class="profileInfo"></div>
                        </div>`;
    }
    lagrefil += `<div class="profilePass1" style="border:none">Password<br><input type="password" name="password" id="passwordValue"></div>
                 <div class="profilePass2" style="border:none">Password again<br><input type="password" name="password" id="passwordValueConfirm"></div>`;
    lagrefil += `<button type="button" class="proedit" onclick="saveProfile(this)" onmouseleave="hoverman(this)">Save Edits</button>`;
    lagrefil += '</div>';
    mainContentDiv.innerHTML = lagrefil;
    document.getElementById('boksf').style.gridTemplateAreas = `
                                                                    'profile1 profile1'
                                                                    'profile2 profile2'
                                                                    'profile3 profile3'
                                                                    'profile4 profile4'
                                                                    'profile5 profile5'
                                                                    'profile6 profile6'
                                                                    'profilePass1 profilePass1'
                                                                    'profilePass2 profilePass2'
                                                                    'profile7 profile7'
        `;
    document.getElementById("backgroundkaos").style.height = '630px';

}
function saveProfile(element) 
{
    let pro = profileWho();
    let phone = document.getElementById("phoneValue");
    let email = document.getElementById("emailValue");
    let pickPoint = document.getElementById("pickPointValue");
    let gatenavn = document.getElementById("statusValue");
    let roadNumber = document.getElementById("status2Value");
    let city = document.getElementById("status3Value");
    let passenger = document.getElementById("passengerValue");
    let driver = document.getElementById("driverValue");
    let password = document.getElementById("passwordValue");
    let passwordConfirm = document.getElementById("passwordValueConfirm");
    if (password.value == passwordConfirm.value && !password.value == '' && password.value == pro.password) 
    {
        document.getElementById("backgroundkaos").style.height = '550px';
        document.getElementById('boksf').style.gridTemplateAreas = `
                                                                    'profileNavn profileNavn'
                                                                    'profile1 profile1'
                                                                    'profile2 profile2'
                                                                    'profile3 profile3'
                                                                    'profile4 profile4'
                                                                    'profile5 profile5'
                                                                    'profile6 profile6'
                                                                    'profile7 profile7'`;
        if(!phone.value == '')pro.phoneNumber = phone.value;
        if(!email.value == '')pro.email = email.value;
        if(!pickPoint.value == '')pro.pickPoint = pickPoint.value;
        if(!gatenavn.value == '')pro.gatenavn = gatenavn.value;
        if(!roadNumber.value == '')pro.husnr = roadNumber.value;
        if(!city.value == '')pro.city = city.value;
        if(!pro.role[1] == passenger.checked)pro.role[1] = passenger.checked;
        if(!pro.role[0] == driver.checked)pro.role[0] = driver.checked;
        showProPage();
    }
    else if(password.value == '' || passwordConfirm.value == '') element.innerHTML = `<div style="color:darkorange">One or more password field are empty!</div>`;
    else if(!password.value == passwordConfirm.value) element.innerHTML = `<div style="color:darkorange">Passwords do not match!</div>`;
    else element.innerHTML = `<div style="color:darkorange">Wrong password!</div>`;
}
function hoverman(element)
{
    element.innerHTML = 'Save Edits';
}