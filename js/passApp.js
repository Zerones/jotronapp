function showPassengerAppointment() {
    mainContentDiv.innerHTML = `
    <div class="backtop"></div>
    <div onclick="showMenu()" class="backbutton">&lt;&lt</div>

    <div class="backheadtext">Passenger</div>

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
                    lisst += `<div style="color:white">` + requestlist[i].name + `<div>`;
                    toggy = true;
                }
            }
        }
    }
    if(toggy == true)
    {
        html = '<h3 style= "color:white">You have currently sent requests to:</h3>';
        html += lisst;
        html += `<h3 style= "color:white">but you can send multiple requests  ${showDate.toLocaleString()} </h3>
            <button onclick="selectDriverForAppointment(new Date(2018, 11, 07))">Click here to make appointment</button>`;    
    }
    else
    {
        html = `<h3 style= "color:white">You've currently no active requests, click on the button under to send a request to a driver</h3>`;
        html += `<button onclick="selectDriverForAppointment(new Date(2018, 11, 07))">Click here to make appointment</button>`;
    }
    mainContentDiv.innerHTML = html;
}
function makeAppointment(dateNumber, driverId) {
    const date = new Date(dateNumber);
    const request = {
        driver: driverId,
        date: date,
        passenger: ProfileInfo[0].username,
        pickupPoint: ProfileInfo[0].pickPoint
    };
    requests.push(request);
}

function selectDriverForAppointment(dateNumber) {
    const drivers = getDrivers();
    let date = new Date();
    let showDate = date;
    let html = '';
    for (let i = 0; i < drivers.length; i++) {
        const driver = drivers[i];
        html += `</br>
        <a onclick="showTransportRequest(` + i + `)" style="color:white" href="javascript:makeAppointment(${dateNumber}, '${driver.username}')">${driver.name}</a><br/>`;
    }
    mainContentDiv.innerHTML = `<h3 style= "color:white">${showDate.toLocaleString()}</h3></br><h3 style="color:white">available drivers</h3>` + html;

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
