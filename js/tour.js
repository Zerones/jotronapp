function startTour()
{
    pageID = ['Tour','showMenu()'];
    if(passenger.passengers[userID].listPassenger.length >= 1)
    {
        mainContentDiv.innerHTML = headerCall() + listTour();
        colorCorrector();
    }
    else
    {
        mainContentDiv.innerHTML = headerCall() + `<div class="reqPageHead" style="margin-top: 100px;">You're currently not driving any passengers.</div>`;
    }
}

function listTour()
{
    let list = '<div class="nameListStyle" style="margin-top:150px;color:white;"><h3 style="color:white" class="nameListStyle">Current Passengers:</h></div><br><div>';
    for(let i = 0; i < passenger.passengers[userID].listPassenger.length; i++)
    {
        for(let k = 0; k < passenger.passengers.length; k++)
        {
            if(k == passenger.passengers[userID].listPassenger[i])
            {
                list += `<div class="nameListBox" id="` + k + `" onmouseover="hoverList(this, ` + k + `)" onmouseout="colorCorrector()" onclick="sendAlert(` + k + `, this)"><img class="pictureList" src="`+ passenger.passengers[k].picture +`"/><div class="nameListStyle">`
                + passenger.passengers[k].name + `</div></div>`;
            }
        }
    }
    list += `</div>`;
    return list;
}

function sendAlert(pass, element)
{
    passenger.passengers[pass].alert = true;
    element.style.backgroundColor = 'green';
    fullUpdate();
    colorCorrector();
}

function hoverList(element, id)
{
    if(!passenger.passengers[id].alert == true)
    {
        element.style.backgroundColor = 'lightblue';
    }
}

function colorCorrector()
{
    for(let i = 0; i < passenger.passengers[userID].listPassenger.length; i++)
    {
        for(let k = 0; k < passenger.passengers.length; k++)
        {
            if(k == passenger.passengers[userID].listPassenger[i])
            {
                if(passenger.passengers[k].alert == true)
                {
                    document.getElementById(k).style.backgroundColor = 'green'; 
                }
                else
                {
                    document.getElementById(k).style.backgroundColor = 'white';
                }    
            }
        }
    }
}
