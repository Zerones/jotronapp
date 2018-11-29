function showPassengerAppointment() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
    <div class="backtop"></div>
    <div onclick="showMenu()" class="backbuttonsymbol">&lt;&lt</div>
    <div onclick="showMenu()" class="backbutton"></div>

    <div class="backheaddriverapp">Passenger</div>

    <div class="appointmentsh1">Your active<br>appointments</div>

    <div class="appointmentbox1">Monday</div>
    <div class="appointmentbox2">Tuesday</div>
    <div class="appointmentbox3">Wednesday</div>
    <div class="appointmentbox4">Thursday</div>
    <div class="appointmentbox5">Friday</div>

    <div class="weekback">&lt&lt</div>
    <div class="weekback2"></div>
    <div class="weeknext">&gt&gt</div>
    <div class="weeknext2"></div>


 `;
}
