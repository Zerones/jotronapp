function showreqPage() 
{
    let content;
    pageID = ['Requests','showMenu()'];
    if(passenger.passengers[userID].requests.length > 1)
    {
        content = checkRequests() + checkPassengers();
    }
    else
    {
        content = ' <div class="m11" style="font-size: 30px; margin-top: 100px;">You have no pending requests at the moment, check back later</div>'
        + checkPassengers();
    }    
    mainContentDiv.innerHTML = headerCall() + content;
}
function checkRequests()
{
    let requests = `<div style="margin-top: 100px; color:white;"><h3>Pending passenger requests:</h3>`;
    for(i = 1; i < passenger.passengers[userID].requests.length; i++)
    {
        for(k = 0; k < passenger.passengers.length; k++)
        {
            if(k == passenger.passengers[userID].requests[i])
            {
                requests += `<div onclick="selectRequest(`+ i +`, `+ k +`)">` + passenger.passengers[k].name + `</div>`;
            }
        }
    }
    requests += `</div>`;
    return requests;
}
function checkPassengers()
{
    let requests = '';
    let toggle1 = false;
    let gave;
    for(i = 0; i < passenger.passengers[userID].listPassenger.length; i++)
    {
        for(k = 0; k < passenger.passengers.length; k++)
        {
            if(k == passenger.passengers[userID].listPassenger[i])
            {
                requests += `<div>` + passenger.passengers[k].name + `</div>`;
                toggle1 = true;
            }
        }
    }
    if(toggle1 == true)
    {
       gave = `<div style="margin-top: 250px; color:white;"><h3>Current Passengers:</h>`;
       gave += requests;
       gave += `</div>`;
    }
    else
    {
        gave = '';
    }
    return gave;
}
function selectRequest(rqLength, pasLength)
{
    let content = `
    <div class="request" style="color: white; margin-top: 100px">
    Do you wish to accept<br/>
    Name: `+ passenger.passengers[pasLength].name +`
    <br/>
    Transport Request<br/>
    <button id="yesButton" onclick="acceptRequest(`+ rqLength +`, `+ pasLength + `); showreqPage()">Yes</button>
    <button id="NoButton" onclick =" cancelRequest(`+ rqLength +`);showreqPage()">No</button>
    </div>`;
    mainContentDiv.innerHTML = headerCall() + content;
}
function acceptRequest(rqLength, pasLength)
{
    passenger.passengers[userID].requests.splice(rqLength, 1)
    passenger.passengers[userID].listPassenger.push(pasLength);
}

function cancelRequest(rqLength)
{
    passenger.passengers[userID].requests.splice(rqLength, 1)
}