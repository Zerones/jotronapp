function showTransportRequest(elementid) {
    mainContentDiv.innerHTML = ``;
    let driver = getDrivers();
    let date = new Date();
    let showDate = date;
    let driverName = driver[elementid]
    let requestPage = `
            <div class="request" style="color: white">
            Do you wish to send<br/>
            Name: ${driverName.name},<br/> ${showDate.toLocaleString()} <br/>
            Transport Request<br/>
            <button id="yesButton" onclick="sendRequest(`+ userID +`, `+ elementid +`)">Yes</button>
            <button id="NoButton" onclick ="checkAppointment()">No</button>
        </div>`;
    mainContentDiv.innerHTML = requestPage;

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
