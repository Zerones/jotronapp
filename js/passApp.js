function showPassengerAppointment() 
{
    pageID = ['Passenger','showMenu()'];
    mainContentDiv.innerHTML = headerCall() + `
    <div class="appointmentsh1">Your<br>appointments</div>

    <div class="appointmentbox1" onclick="checkAppointment()">Monday</div>
    <div class="appointmentbox2">Tuesday</div>
    <div class="appointmentbox3">Wednesday</div>
    <div class="appointmentbox4">Thursday</div>
    <div class="appointmentbox5">Friday</div>

    <div class="weekback">&lt&lt</div>
    <div class="weeknext">&gt&gt</div>
 `;
}
function checkAppointment() 
{
    pageID = ['Passenger','showPassengerAppointment()'];
    let date = new Date();
    let showDate = date;
    let html;
    let lisst = '';
    let toggy = false;
    let requestlist = passenger.passengers;
    for (var i = 0; i < requestlist.length; i++) 
    {
        if(requestlist[i].requests[0] = !null)
        {
            for(let k = 0; k < requestlist[i].requests.length; k++)
            {
                if (requestlist[i].requests[k] == userID && k == !0) 
                {
                    lisst += `<div class="nameListBox"><img class="pictureList" src="`+ requestlist[i].picture +`"/>
                    <div class="nameListStyle">` + requestlist[i].name + `</div></div><br/>`;
                    toggy = true;
                }
            }
        }
    }
    if(toggy == true)
    {
        html = '<h3 class="nameListStyle" style="color:white;margin-top:100px;">You have currently sent requests to:</h3>';
        html += lisst;
        html += `<h3 class="nameListStyle" style="color:white">but you can send multiple requests  ${showDate.toLocaleString()} </h3>
            <button class="proedit" style="background-color: #193759;" onmouseover="yesNoLightOn(this)" onmouseout="yesNoLightOff(this)" onclick="selectDriverForAppointment(new Date(2018, 11, 07))">Click here to make appointment</button>`;
        html += confirmedAppointments();        
    }
    else
    {
        html = `<h3 class="nameListStyle" style="color:white; margin-top: 100px;">You've currently no active requests, click on the button under to send a request to a driver</h3>`;
        html += `<button class="proedit" style="background-color: #193759;" onmouseover="yesNoLightOn(this)" onmouseout="yesNoLightOff(this)" onclick="selectDriverForAppointment(new Date(2018, 11, 07))">Click here to make appointment</button>`;
        html += confirmedAppointments();
    }
    mainContentDiv.innerHTML = headerCall() + html;
}
function confirmedAppointments()
{
    let requests = '';
    let toggle1 = false;
    let gave;
    for(i = 0; i < passenger.passengers.length; i++)
    {
        for(k = 0; k < passenger.passengers[i].listPassenger.length; k++)
        {
            if(userID == passenger.passengers[i].listPassenger[k])
            {
                requests +=`<div onmouseout="requestLightOff(this)" class="nameListBox"><img class="pictureList" src="`+ passenger.passengers[i].picture +`"/>
                <div class="nameListStyle">` + passenger.passengers[i].name + `</div></div><br/>`;
                toggle1 = true;
            }
        }
    }
    if(toggle1 == true)
    {
       gave = `<div class="nameListStyle" style="margin-top:150px;color:white;"><h3 style="color:white" class="nameListStyle">Current Appointments:</h>`;
       gave += requests;
       gave += `</div>`;
    }
    else
    {
        gave = '';
    }
    return gave;
}
function makeAppointment(dateNumber, driverId)
{
    const date = new Date(dateNumber);
    const request = {
        driver: driverId,
        date: date,
        passenger: ProfileInfo[0].username,
        pickupPoint: ProfileInfo[0].pickPoint
    };
    requests.push(request);
}

function selectDriverForAppointment(dateNumber) 
{
    pageID = ['Passenger','checkAppointment()'];
    const drivers = getDrivers();
    let date = new Date();
    let showDate = date;
    let html = '';
    for (let i = 0; i < drivers.length; i++) 
    {
        html += `<div onmouseout="requestLightOff(this)" onmouseover="requestLightOn(this)" onclick="showTransportRequest(`+ i +`)" class="nameListBox"><img class="pictureList" src="`+ drivers[i].picture +`"/>
        <div class="nameListStyle">` + drivers[i].name + `</div></div><br/>`;
    }
    mainContentDiv.innerHTML = headerCall() + `<h3 class="nameListStyle" style= "color:white">${showDate.toLocaleString()}</h3></br><h3 style="color:white">available drivers</h3>` + html;

}

function getDrivers() 
{
    const filteredUsers = [];
    const users = passenger.passengers;
    for (var i = 0; i < users.length; i++) {
        const user = users[i];
        if(i === userID) continue;
        if(user.isDriver) 
        {
            filteredUsers.push(user);
        }
    }
    return filteredUsers;
}
