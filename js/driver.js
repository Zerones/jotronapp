function showDriver() 
{
    pageID = ['Driver','showMenu()'];
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = headerCall() + `

    <div class="appointmentsh1">Your<br>appointments</div>

    <div onclick="ShowDriverAppointments()" class="appointmentbox1">Monday</div>
    <div class="appointmentbox2">Tuesday</div>
    <div class="appointmentbox3">Wednesday</div>
    <div class="appointmentbox4">Thursday</div>
    <div class="appointmentbox5">Friday</div>

    <div class="weekback">&lt&lt</div>
    <div class="weeknext">&gt&gt</div>

 `;
}
