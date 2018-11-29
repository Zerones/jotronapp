function drivingWith () {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

    <div class="backtop"></div>
    <div class="backbutton">&lt;&lt</div>

    <div class="drive">You are driving for: <br /> Navn Navnesen </div>
    <div class="knapp">
        <button id="knapp" onclick="sendsomewhere()">OK!</button>
    </div>
`;
}
