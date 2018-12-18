
function showTheHistory() {
    pageID = ['History','showMenu()'];
    mainContentDiv.innerHTML = headerCall() + `

    <button class="m2" onclick="showTopcontributors()">Top Contributors</button>
    <button class="m3" onclick="driverHistory()">Driver</button>
    <button class="m3" onclick="passengerHistory()">Passenger</button>
`;
}
