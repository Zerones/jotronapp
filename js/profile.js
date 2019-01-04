var profileAdressCombo;
var editingEnabled = false;
var profileFill = `
<div class="lele2"><h2></h2></div>    
<div class="backgroundkaos" id="backgroundkaos"></div>      
<div class="profileBilde" id="profilePic" onclick="editPicture()" onmouseover="pictureLightOn(this)" onmouseout="pictureLightOff(this)"></div>`;

function profileWho() 
{
    
    if(userID == null)
    {        
        profileAdressCombo = 'Logget in med admin bruker';
        return passenger.passengers[0];
    }
    else
    {
        profileAdressCombo = passenger.passengers[userID].gatenavn + ' ' +
        passenger.passengers[userID].husnr + ' ' + passenger.passengers[userID].city;        
        return passenger.passengers[userID];
    }
}
function pictureLightOn(element)
{
    if(editingEnabled == true)element.style.border = "solid blue 2px";
    else return;
}
function pictureLightOff(element)
{
    element.style.border = "solid 1px gray";
}
function showProPage() 
{
    editingEnabled = false;
    pageID = ['Profile', 'showMenu()'];
    let pro = profileWho();
    let lagrefill;
    lagrefill = `<div class="ProfileBoks">`;
    lagrefill += `<div class="profileNavn">` + pro.username + `</div>`;
    for (let i = 1; i < 7; i++) 
    {
        lagrefill += `<div class="profile` + i + `">`;
        if (i == 1) lagrefill += `Phone Number:<br><div id="nummer" class="profileInfo">` + pro.phoneNumber + `</div>`;
        if (i == 2) lagrefill += `Email: <br><div id="mail" class="profileInfo">` + pro.email + `</div>`;
        if (i == 3) lagrefill += `Pick up Point: <br><div id="point" class="profileInfo">` + pro.pickPoint + `</div>`;
        if (i == 4) lagrefill += `Home Adress:<br><div id="status" class="profileInfo">` + profileAdressCombo + `</div>`;
        if (i == 5) {
            if (pro.isPassenger == true) lagrefill += `<div>Passenger:<div class="profileGreen"></div></div>`;
            else if(pro.isPassenger == null || pro.isPassenger == false) lagrefill += `<div>Passenger:<div class="profileRed"></div></div>`;
        }
        if (i == 6) {
            if (pro.isDriver == true) {
                lagrefill += `<div>Driver:<div class="profileGreen"></div></div>`;
            }
            else if(pro.isDriver == null || pro.isDriver == false) {
                lagrefill += `<div>Driver:<div class="profileRed"></div></div>`;
            }
        }
        lagrefill += `</div>`;
    }
    lagrefill += `<button type="button" class="proedit" onclick="profileEdit()">Edit Profile</button>`;
    lagrefill += `</div>`;
    mainContentDiv.innerHTML = headerCall() + profileFill + lagrefill;
    if(pro.picture == null)
    {
        return; 
    }
    else
    {
        profilePic.style.backgroundImage = `url(`+ pro.picture + `)`;
    }
}

function profileEdit() 
{
    pageID[1] = 'showProPage()';
    var lagrefil = headerCall() + profileFill;
    let pro = profileWho();
    let toggle1 = '';
    let toggle2 = '';
    if(pro.isDriver == true) toggle1 = 'checked';
    if(pro.isPassenger == true) toggle2 = 'checked';
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
    editingEnabled = true;
    if(pro.picture == null)
    {
        return; 
    }
    else
    {
        profilePic.style.backgroundImage = `url(`+ pro.picture + `)`;
    }
}
function editPicture()
{
    if(editingEnabled == true)
    {
        document.getElementById("boksf").style.filter =  "blur(4px)";
        document.getElementById("profilePic").style.filter =  "blur(4px)";
        document.getElementById("backgroundkaos").style.filter =  "blur(4px)";
        let test = document.createElement("test");
        test.innerHTML += `<div class="profilePictureEdit" style="filter:none">New Picture(link):<br><input type="text"  value="`+ passenger.passengers[userID].picture +`" id="pictureValue"><br><button type="button" class="proedit" onclick="savePicture()">Save Picture</button></div>`;
        mainContentDiv.appendChild(test.firstChild);
    }
    else
    {
        return;
    }
}
function savePicture()
{
    let picture = document.getElementById("pictureValue")
    if(!picture == '')
    {
        document.getElementById("boksf").style.filter =  "blur(0)";
        document.getElementById("profilePic").style.filter =  "blur(0)";
        document.getElementById("backgroundkaos").style.filter =  "blur(0)";
        passenger.passengers[userID].picture = picture.value;
        profileEdit();
    }
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
        if(!pro.isPassenger == passenger.checked)pro.isPassenger = passenger.checked;
        if(!pro.isDriver == driver.checked)pro.isDriver = driver.checked;
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