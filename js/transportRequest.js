function showTransportRequest(elementid) 
{
    pageID = ['Passenger','checkAppointment()'];
    mainContentDiv.innerHTML = ``;
    let driver = getDrivers();
    let date = new Date();
    let showDate = date;
    let driverName = driver[elementid]
    let requestPage = `
            <div class="nameListStyle" style="color: white; margin-top: 100px;">
            Do you wish to send<br/>
            Name: ${driverName.name},<br/> ${showDate.toLocaleString()} <br/>
            Transport Request<br/>
            <button id="yesButton" class="proedit" style="background-color: #193759;" onmouseover="yesNoLightOn(this)" onmouseout="yesNoLightOff(this)" onclick="sendRequest(`+ userID +`, `+ elementid +`)">Yes</button>
            <button id="NoButton" class="proedit" style="background-color: #193759;" onmouseover="yesNoLightOn(this)" onmouseout="yesNoLightOff(this)" onclick ="checkAppointment()">No</button>
        </div>`;
    mainContentDiv.innerHTML = headerCall() + requestPage;

}
function sendRequest(sender, elementid)
{
    let name = getDrivers();
    let driver = name[elementid].name;
    for(let i = 0; i < passenger.passengers.length; i++)
    {
        if(driver == passenger.passengers[i].name)
        {
            passenger.passengers[i].requests[passenger.passengers[i].requests.length] = sender;
            showMenu();
        } 
    }
}
