function cancelTrip() { 
    mainContentDiv.innerHTML = `

<div class="backtop"></div>
    <a href="index.html"><div class="backbuttonsymbol">&lt;&lt</div></a>
    <a href="index.html"><div class="backbutton"></div></a>

    <link rel="stylesheet" type="text/css" href="css.css">
        <div class="backtop"></div>
        <a href="index.html"><div class="backbuttonsymbol">&lt;&lt</div></a>
        <a href="index.html"><div class="backbutton"></div></a>
        <div class="drive">You have cancelled your driving appointment</div>
        <div class="knapp">
            <button id="knapp" onclick="sendsomewhere()">OK!</button>
        </div>

`;
}
