var PhoneCP;
var EmailCP;
var PickupCP;
var statusCP;
var phoneNumberP;
var EmailP;
var PickupP;
var statusP;
var phoneT;
var emailT;
var pickupT;
var statusT;
var passT;
var passTC;
var brukerNavn;
var nyProfile;
var brukerNavnT;



function showProPage() 
{
    var mainContentDiv = document.getElementById('mainContent');
    var pro = ProfileInfo[0];
    var ny = ProfileInfo[1];

    if(ny = !undefined)
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
                    <div id="Navn" class="profileNavn">` + pro.username + `</div>
                    <div class="profile1">Phone Number<br><div id="nummer" class="profileInfo">` + pro.phoneNumber + `</div></div>
                    <div class="profile2">Email <br><div id="mail" class="profileInfo">` + pro.email + `</div></div>
                    <div class="profile3">Pick up Point <br><div id="point" class="profileInfo">` + pro.pickPoint + `</div></div>
                    <div class="profile4">Driver Status<br><div id="status" class="profileInfo">` + pro.status + `</div></div>
                    <div class="profile6"> Passenger?: <div class="profileInfo"> `+ pro.role[1] +`</div></div>
                    <div class="profile7"> Driver?: <div class="profileInfo">`+ pro.role[0] +`</div></div>        
                    <div class="profile5" onclick="profileEdit()">Edit Profile</div>
            </div>`
        ;
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
            <div id="Navn" class="profileNavn">` + ny.username + `</div>
            <div class="profile1">Phone Number<br><div id="nummer" class="profileInfo">` + ny.phoneNumber + `</div></div>
            <div class="profile2">Email <br><div id="mail" class="profileInfo">` + ny.email + `</div></div>
            <div class="profile3">Pick up Point <br><div id="point" class="profileInfo">` + ny.pickPoint + `</div></div>
            <div class="profile4">Driver Status<br><div id="status" class="profileInfo">` + ny.status + `</div></div>
            <div class="profile6"> Passenger?: <div class="profileInfo"> `+ ny.role[1] +`</div></div>
            <div class="profile7"> Driver?: <div class="profileInfo">`+ ny.role[0] +`</div></div>
            <div class="profile5" onclick="profileEdit()">Edit Profile</div>
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
        mainContentDiv.innerHTML = `
    
        <div class="backtop"></div>        
        <div class="backheadpassreq">   Profile    </div>
        <div onclick="showProPage()" class="backbuttonsymbol">&lt;&lt</div></a>
        <div onclick="showProPage()" class="backbutton"></div></a>       
        <div class="lele2"><h2></h2></div>    
        <div class="backgroundkaos"></div>      
        <div class="profileBilde"></div>
        <div class="ProfileEdit">       
                <div class="profilePhone"><input type="text" id="phoneT" name="Number" placeholder="Phone Number" style="border: none; text-align: center;"></div>
                <div class="profileEmail"><input type="text" id="emailT"  name="Mail" placeholder="Email Adress"  style="border: none; text-align: center;"></div>
                <div class="profilePickup"><input type="text" id="pickupT" name="Point" placeholder="Pick up Point" style="border: none; text-align: center;"></div>
                <div class="profileStatus"><input type="text" id="statusT" name="Status" placeholder="Driver Status" style="border: none; text-align: center;"></div>
                <div class="profilePassword"><input type="password" id="passT" name="Password" placeholder="New Password" style="border: none; text-align: center;"></div>
                <div class="profileConfirm"><input type="password" id="passTC" name="PassAgain" placeholder="New Password Again" style="border: none; text-align: center;"></div>
                <div class="profileSave" id="feilsokk" onclick="saveP()">Save Changes</div>
        </div>
        `;
}
function saveP()
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