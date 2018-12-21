function appAlert()
{
    let requestAlert = false; 
    if(passenger.passengers[userID].requests.length > 1)
    {
        requestAlert = true;
    }
    if(requestAlert == true)
    {
        mainContentDiv.innerHTML += `<div class="alertbox">You've pending driving requests</div>`;    
    }
    for(i = 0; i < passenger.passengers.length; i++)
    {
        for(k = 0; k < passenger.passengers[i].listPassenger.length; k++)
        {
            if(userID == passenger.passengers[i].listPassenger[k] && reminderlock == false)
            {
                mainContentDiv.innerHTML += `<div class="alertbox" style="background-color: green;">You've recieved a driver!</div>`; 
                reminderlock = true; 
            }
        }
    }
}
