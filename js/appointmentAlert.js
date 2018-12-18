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
}
