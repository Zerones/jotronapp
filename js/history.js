
function showTheHistory() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
<div id="historyWo">History</div>
   
    <div class="history">
        
    <svg id="icon" onclick="homePage()" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" fill="currentColor" />
    </svg>
    </div>
    <div id="History">History</div>
    <hr id="line" />
    <button class="driverHistory" onclick="driverHistory()">Driver</button>
    <button class="PassengerHistory" onclick="passengerHistory()">Passenger</button>
    <button class="ContributorsHistory" onclick="contributorsHistory()">Top Contributors</button>
`;
}