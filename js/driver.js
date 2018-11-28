function showDriver() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
    <div class="backtop17"></div>
    <div onclick="showMenu()" class="backbuttonsymbol16"> &lt;&lt</div>
    <div onclick="showMenu()" class="backbutton15"></div>

    <div class="backheaddriverapp14"> Driver</div>
    <div class="d1"> Your active appointments</div>

    <div onclick="ShowDriverAppointments()" class="d2"> Monday</div>
    <div class="d3"> Tuesday</div>
    <div class="d4"> Wednesday</div>
    <div class="d5"> Thursday</div>
    <div class="d6"> Friday</div>

    <div class="weekback"> &lt&lt</div>
    <div class="weeknext"> &gt&gt</div>
    <div class="weekback2"></div>
    <div class="weeknext2"></div>


 `;
}
