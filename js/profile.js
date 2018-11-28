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
        mainContentDiv.innerHTML =  toptekstenbragehemmeligvar + `

            <div class="ProfileBoks">  
                    <div id="Navn" class="profileNavn">` + pro.username + `</div>
                    <div class="profile1">Phone Number<br><div id="nummer" class="profileInfo">` + pro.phoneNumber + `</div></div>
                    <div class="profile2">Email <br><div id="mail" class="profileInfo">` + pro.email + `</div></div>
                    <div class="profile3">Pick up Point <br><div id="point" class="profileInfo">` + pro.pickPoint + `</div></div>
                    <div class="profile4">Driver Status<br><div id="status" class="profileInfo">` + pro.status + `</div></div>
                    <div class="profile5"> Passenger?: <div class="profileInfo"> `+ pro.role[1] +`</div></div>
                    <div class="profile6"> Driver?: <div class="profileInfo">`+ pro.role[0] +`</div></div>        
                    <div class="profile7" onclick="profileEdit()">Edit Profile</div>
            </div>`
        ;
    }
    else
    {
        mainContentDiv.innerHTML = toptekstenbragehemmeligvar + `

        <div class="ProfileBoks">  
            <div id="Navn" class="profileNavn">` + ny.username + `</div>
            <div class="profile1">Phone Number<br><div id="nummer" class="profileInfo">` + ny.phoneNumber + `</div></div>
            <div class="profile2">Email <br><div id="mail" class="profileInfo">` + ny.email + `</div></div>
            <div class="profile3">Pick up Point <br><div id="point" class="profileInfo">` + ny.pickPoint + `</div></div>
            <div class="profile4">Driver Status<br><div id="status" class="profileInfo">` + ny.status + `</div></div>
            <div class="profile5"> Passenger?: <div class="profileInfo"> `+ ny.role[1] +`</div></div>
            <div class="profile6"> Driver?: <div class="profileInfo">`+ ny.role[0] +`</div></div>
            <div class="profile7" onclick="profileEdit()">Edit Profile</div>
        </div>
           
           `;
         
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
function saveProfile()
{               
        var mainContentDiv = document.getElementById('mainContent');
        phoneNumberP = PhoneCP;
        EmailP = EmailCP;
        PickupP = PickupCP;
        statusP = statusCP;
        phoneT = document.getElementById('phoneT').value;
        emailT = document.getElementById('emailT').value;
        statusT = document.getElementById('statusT').value;
        passT = document.getElementById('passT').value;
        passTC = document.getElementById('passTC').value;
        if(passT == passTC && !passT == '')
        {
                if(nyProfile == false)
                {
                        pickupT = document.getElementById('pickupT').value;
                        if(!brukerNavnT == '')
                        { 
                            showProPage();
                        }
                        else 
                        {
                                mainContentDiv.innerHTML = `
  
   
                                <div class="backtop"></div>        
                                <div class="backheadpassreq">   Profile    </div>
                                <div onclick="showMenu()" class="backbuttonsymbol">&lt;&lt</div></a>
                                <div onclick="showMenu()" class="backbutton"></div></a>
                                       
                                   <div class="lele2"><h2></h2></div>    
                                   <div class="backgroundkaos"></div>      
                                   <div class="profileBilde"></div>
                                   <div class="ProfileBoks">  
                            
                                           <div id="Navn" class="profileNavn">Houng Dajin</div>
                                           <div class="profile1">Phone Number<br><div id="nummer" class="profileInfo">` + phoneT + `</div></div>
                                           <div class="profile2">Email <br><div id="mail" class="profileInfo">` + emailT + `</div></div>
                                           <div class="profile3">Pick up Point <br><div id="point" class="profileInfo">` + pickupT + `</div></div>
                                           <div class="profile4">Driver Status<br><div id="status" class="profileInfo">` + statusT + `</div></div>
                                           <div class="profile5" onclick="profileEdit()">Edit Profile</div>
                                   
                                   </div>`;
                        }
                }
                if(nyProfile == true)
                {
                        brukerNavnT = document.getElementById('brukerNavn').value;
                        if(!brukerNavnT == '')
                        {
                                showMenu();
                        }
                        else
                        {
                                document.getElementById('feilsokk').innerHTML = '<font color="red">Fyll ut brukernavnet også!</font>';    
                        }
        
                }
        }
        else if(passT == '')
        {
                document.getElementById('feilsokk').innerHTML = '<font color="red">Fyll ut passord-feltene!</font>';
        }
        else
        {
                document.getElementById('feilsokk').innerHTML = '<font color="red">Passordene er forskjellige!</font>'; 
        }

}