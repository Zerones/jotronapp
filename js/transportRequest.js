function showTransportRequest(elementid) {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ``;
    let driver = getDrivers();
    let date = new Date();
    let showDate = date;
    let driverName = driver[elementid]
    let requestPage = '';

    //let driver = driverName[elementid];
    requestPage = `
            <div class="request" style="color: white">
            Do you wish to send<br/>
            Name: ${driverName.name},<br/> ${showDate.toLocaleString()} <br/>
            Transport Request<br/>
            <button id="yesButton">Yes</button>
            <button id="NoButton">No</button>
        </div>`;
    mainContentDiv.innerHTML = requestPage;

}