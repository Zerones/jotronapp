function showreqPage() 
{
    let content;
    pageID = ['Requests','showMenu()'];
    if(passenger.passengers[userID].requests.length > 1)
    {
        content = checkRequests();
    }
    else
    {
        content = ' <div class="m11" style="font-size: 30px; margin-top: 100px;">You have no pending requests at the moment, check back later</div>';
    }    
    mainContentDiv.innerHTML = headerCall() + content;
}
function checkRequests()
{
    let requests = `<div style="margin-top: 100px">`;
    for(i = 1; i < passenger.passengers[userID].requests.length; i++)
    {
        for(k = 0; k < passenger.passengers.length; k++)
        {
            if(k == passenger.passengers[userID].requests[i])
            {
                requests += `<div onclick="acceptRequest(`+ k +`)">` + passenger.passengers[k].name + `</div>`;
            }
        }
    }
    requests += `</div>`;
    return requests;

}
function acceptRequest()
{}