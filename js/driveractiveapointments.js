function ShowDriverAppointments() 
{
    pageID = ['Passengers','showDriver()']
    let list = checkPassengers();
    if(list == ``)
    {
        mainContentDiv.innerHTML = headerCall() + `<div class="reqPageHead" style="margin-top: 100px;"><h3>You've no passengers scheduled for today</h3>`;
    } else
    {
        mainContentDiv.innerHTML = headerCall() + list;
    }
}
