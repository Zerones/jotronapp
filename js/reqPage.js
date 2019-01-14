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
        content = '<div class="reqPageHead" style="margin-top: 100px;">You have no pending requests at the moment, check back later</div>'
        + checkPassengers();
    }    
    mainContentDiv.innerHTML = headerCall() + content;
}
function checkRequests()
{
    let requests = `<div class="reqPageHead" style="margin-top: 100px;"><h3>Pending passenger requests:</h3>`;
    for(i = 1; i < passenger.passengers[userID].requests.length; i++)
    {
        for(k = 0; k < passenger.passengers.length; k++)
        {
            if(k == passenger.passengers[userID].requests[i])
            {
                requests += `<div onmouseout="requestLightOff(this)" onmouseover="requestLightOn(this)" onclick="selectRequest(`+ i +`, `+ k +`)" class="nameListBox">
                <img class="pictureList" src="`+ passenger.passengers[k].picture +`"/>
                <div class="nameListStyle">` + passenger.passengers[k].name + `</div></div>`;
            }
        }
    }
    requests += `</div>`;
    return requests;
}
function requestLightOn(element)
{
    element.style.backgroundColor = `lightblue`;
}
function requestLightOff(element)
{
    element.style.backgroundColor = `white`;
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
                requests += `<div class="nameListBox"><img class="pictureList" src="`+ passenger.passengers[k].picture +`"/><div class="nameListStyle">`
                + passenger.passengers[k].name + `</div></div>`;
                toggle1 = true;
            }
        }
    }
    if(toggle1 == true)
    {
       gave = `<div class="reqPageHead" style="margin-top: 100px;"><h3>Current Passengers:</h>`;
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
    pageID = ['Requests','showreqPage()'];
    let content = `
    <div class="nameListStyle" style="margin-top: 100px; color: white;">
    Do you wish to accept<br/>
    Name: `+ passenger.passengers[pasLength].name +`
    <br/>
    Transport Request<br/>
    <button id="yesButton" class="proedit" style="background-color: #193759;" onmouseover="yesNoLightOn(this)" onmouseout="yesNoLightOff(this)" onclick="acceptRequest(`+ rqLength +`, `+ pasLength + `); showreqPage()">Yes</button>
    <button id="NoButton" class="proedit" style="background-color: #193759;" onmouseover="yesNoLightOn(this)" onmouseout="yesNoLightOff(this)"onclick ="cancelRequest(`+ rqLength +`);showreqPage()">No</button>
    </div>`;
    mainContentDiv.innerHTML = headerCall() + content;
}
function yesNoLightOn(element)
{
    element.style.backgroundColor = `#abb7c3`;   
}
function yesNoLightOff(element)
{
    element.style.backgroundColor = `#193759`;   

}
function acceptRequest(rqLength, pasLength)
{
    passenger.passengers[userID].requests.splice(rqLength, 1)
    passenger.passengers[userID].listPassenger.push(pasLength);
    fullUpdate();
}

function cancelRequest(rqLength)
{
    passenger.passengers[userID].requests.splice(rqLength, 1)
    fullUpdate();
}