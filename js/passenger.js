function passengerHistory() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
<div class="backtop"></div>
    <div onclick="showTheHistory()" class="backbutton">&lt;&lt</div>

    <div class="backheadtext">History</div>

    <div id="passenger">Passenger</div>
    <div id="firstpassenger">
        <div id="dates">22.11.2018</div>
        Passenger: name <br /> cost: 12km <br /> Distnace:12km
        <div id="days">Monday</div>
    </div>
    <div id="firstpassenger">
        <div id="dates">22.11.2018</div>
        Passenger: name <br /> cost: 12km <br /> Distnace:12km
        <div id="days">Tuesday</div>
    </div>
    <div id="firstpassenger">
        <div id="dates">22.11.2018</div>
        Passenger: name <br /> cost: 12km <br /> Distnace:12km
        <div id="days">Wedneday</div>
    </div>
    <div id="firstpassenger">
        <div id="dates">22.11.2018</div>
        Passenger: name <br /> cost: 12km <br /> Distnace:12km
        <div id="days">Thursday</div>
    </div>
    <div id="firstpassenger">
        <div id="dates">22.11.2018</div>
        Passenger: name <br /> cost: 12km <br /> Distnace:12km
        <div id="days">Friday</div>
    </div>
 `;
}
