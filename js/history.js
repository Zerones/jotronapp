
function showTheHistory() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

    <div class="backtop"></div>
    
    <div onclick="showMenu()" class="backbutton">&lt;&lt</div>

    <div class="backheadtext">History</div>

    <button class="m3" onclick="showTopcontributors()">Top Contributors</button>
    <button class="m2" onclick="driverHistory()">Driver</button>
    <button class="m3" onclick="passengerHistory()">Passenger</button>
    

`;
}
