var toptekstenbragehemmeligvar = `
    
<div class="backtop"></div>        
<div class="backheadtext">   Profile    </div>
<div onclick="showMenu()" class="backbutton">&lt;&lt</div>       
<div class="lele2"><h2></h2></div>    
<div class="backgroundkaos" id="backgroundkaos"></div>      
<div class="profileBilde"></div>`;

var toptekstenbragehemmeligvar2 = `
    
<div class="backtop"></div>        
<div class="backheadtext">   Profile    </div>
<div onclick="showProPage()" class="backbutton">&lt;&lt</div>       
<div class="lele2"><h2></h2></div>    
<div class="backgroundkaos" id="backgroundkaos"></div>      
<div class="profileBilde"></div>`;


function profileWho() 
{
    if(userID == null)
    {
        return ProfileInfo[0];
    }
    else
    {
        return passenger.passengers[userID];
    }
}
function showProPage() {
    var mainContentDiv = document.getElementById('mainContent');
    let pro = profileWho();
    let lagrefill;
    lagrefill = `<div class="ProfileBoks">`;
    lagrefill += `<div class="profileNavn">` + pro.username + `</div>`;
    for (let i = 1; i < 7; i++) {
        lagrefill += `<div class="profile` + i + `">`;
        if (i == 1) lagrefill += `Phone Number:<br><div id="nummer" class="profileInfo">` + pro.phoneNumber + `</div>`;
        if (i == 2) lagrefill += `Email: <br><div id="mail" class="profileInfo">` + pro.email + `</div>`;
        if (i == 3) lagrefill += `Pick up Point: <br><div id="point" class="profileInfo">` + pro.pickPoint + `</div>`;
        if (i == 4) lagrefill += `Home Adress:<br><div id="status" class="profileInfo">` + pro.homeAdress + `</div>`;
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
    mainContentDiv.innerHTML = toptekstenbragehemmeligvar + lagrefill;
}
function profileEdit() {
    var mainContentDiv = document.getElementById('mainContent');
    var lagrefil = toptekstenbragehemmeligvar2;
    lagrefil += '<div class="ProfileBoks" id="boksf">';
    for (let i = 1; i < 7; i++) {
        lagrefil += '<div class="profile' + i + '">';
        if (i == 1) lagrefil += `Phone Number:<br><input type="text"  value="" id="phoneValue">`;
        else if (i == 2) lagrefil += `Email: <br><input type="text"  value="" id="emailValue">`;
        else if (i == 3) lagrefil += `Pick up Point: <br><input type="text"  value="" id="pickPointValue">`;
        else if (i == 4) lagrefil += `Home Adress:<br><input type="text"  value="" id="statusValue">`;
        else if (i == 5) lagrefil += `Passenger:<input type="checkbox" id="passengerValue">`;
        else if (i == 6) lagrefil += `Driver:<input type="checkbox" id="driverValue">`;
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
    let homeAdress = document.getElementById("statusValue");
    let passenger = document.getElementById("passengerValue");
    let driver = document.getElementById("driverValue");
    let password = document.getElementById("passwordValue");
    let passwordConfirm = document.getElementById("passwordValue");
    if (password.value == passwordConfirm.value && !password.value == '' && !!passwordConfirm.value == '') 
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
        if(!phone.value == null)pro.phoneNumber = phone.value;
        if(!email.value == null)pro.email = email.value;
        if(!pickPoint.value == null)pro.pickPoint = pickPoint.value;
        if(!homeAdress.value == null)pro.homeAdress = homeAdress.value;
        pro.role[1] = passenger.checked;
        pro.role[0] = driver.checked;
        showProPage();
    }
    else if(password.value == '') 
    {
        element.innerHTML = `<div style="color:darkorange">Password field is empty!</div>`;
    }
    else
    {
        element.innerHTML = `<div style="color:darkorange">Passwords do not match!</div>`;
    }
}
function hoverman(element)
{
    element.innerHTML = 'Save Edits';
}