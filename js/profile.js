var toptekstenbragehemmeligvar = `
    
<div class="backtop"></div>        
<div class="backheadpassreq">   Profile    </div>
<div onclick="showProPage()" class="backbuttonsymbol">&lt;&lt</div></a>
<div onclick="showProPage()" class="backbutton"></div></a>       
<div class="lele2"><h2></h2></div>    
<div class="backgroundkaos"></div>      
<div class="profileBilde"></div>`;



function showProPage() 
{
    var mainContentDiv = document.getElementById('mainContent');
    var pro = ProfileInfo[0];
    var ny = ProfileInfo[1];
    if(ny = !undefined)
    {
        let lagrefill;
        lagrefill += `<div class="ProfileBoks">`;
        lagrefill += `<div class="profileNavn">` + pro.username + `</div>`;
        for(let i = 1; i < 8; i++)
        {
            lagrefill += `<div class="profile` + i + `">`;
            if(i == 1) lagrefill += `Phone Number<br><div id="nummer" class="profileInfo">` + pro.phoneNumber + `</div>`;
            if(i == 2) lagrefill += `Email <br><div id="mail" class="profileInfo">` + pro.email + `</div>`;
            if(i == 3) lagrefill += `Pick up Point <br><div id="point" class="profileInfo">` + pro.pickPoint + `</div>`;
            if(i == 4) lagrefill += `Driver Status<br><div id="status" class="profileInfo">` + pro.status + `</div>`;
            if(i == 5) lagrefill += `Passenger?: <div class="profileInfo"> `+ pro.role[1] +`</div>`;
            if(i == 6) lagrefill += `Driver?: <div class="profileInfo">`+ pro.role[0] +`</div>`;
            if(i == 7) lagrefill += `<div onclick="profileEdit()">Edit Profile</div>`;
            lagrefill += `</div>`;
        }
        lagrefill += `</div>`;
        mainContentDiv.innerHTML = toptekstenbragehemmeligvar + lagrefill;
    }
    else
    {
        let lagrefill;
        lagrefill += `<div class="ProfileBoks">`;        
        lagrefill += `<div class="profileNavn">` + ny.username + `</div>`;
        for(let i = 1; i < 8; i++)
        {
            lagrefill += `<div class="profile` + i + `">`;
            if(i == 1) lagrefill += `Phone Number<br><div id="nummer" class="profileInfo">` + ny.phoneNumber + `</div>`;
            if(i == 2) lagrefill += `Email <br><div id="mail" class="profileInfo">` + ny.email + `</div>`;
            if(i == 3) lagrefill += `Pick up Point <br><div id="point" class="profileInfo">` + ny.pickPoint + `</div>`;
            if(i == 4) lagrefill += `Driver Status<br><div id="status" class="profileInfo">` + ny.status + `</div>`;
            if(i == 5) lagrefill += `Passenger?: <div class="profileInfo"> `+ ny.role[1] +`</div>`;
            if(i == 6) lagrefill += `Driver?: <div class="profileInfo">`+ ny.role[0] +`</div>`;
            if(i == 7) lagrefill += `<div onclick="profileEdit()">Edit Profile</div>`;
            lagrefill += `</div>`;
        }
        lagrefill += `</div>`;
        mainContentDiv.innerHTML = toptekstenbragehemmeligvar + lagrefill;
    }
}
function profileCreate() 
{
    return;
}
function profileEdit() 
{
        var mainContentDiv = document.getElementById('mainContent');
        var lagrefil = toptekstenbragehemmeligvar;
        lagrefil += '<div class="ProfileBoks" id="boksf">';
        for(let i = 1; i < 7; i++)
        {
            lagrefil += '<div class="profile' + i + '">';
            if(i == 1) lagrefil += `Phone Number<br><input type="text"  value="">`;
            else if(i == 2) lagrefil += `Email <br><input type="text"  value="">`;
            else if(i == 3) lagrefil += `Pick up Point <br><input type="text"  value="">`;
            else if(i == 4) lagrefil += `Driver Status<br><input type="text"  value="">`;
            else if(i == 5) lagrefil +=  `Passenger?:<input type="checkbox">`;
            else if(i == 6) lagrefil += `Driver?:<input type="checkbox">`;
            lagrefil += `<div class="profileInfo"></div>
                        </div>`;
        }
        lagrefil += `<div class="profilePass1" style="border:none">Password: <input type="password" name="password" id="password"></div>
                                     <div class="profilePass2" style="border:none">Password again: <input type="password" name="password" id="password"></div>`;
        lagrefil += `<div class="profile7" onclick="saveProfile()">Save Edits</div>`;
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
}
