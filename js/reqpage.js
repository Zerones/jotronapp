function showreqPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `
    
   
    <div class="backtop"></div>
        <div class="backbutton" onclick="showMenu()">&lt;&lt</div>

        <div class="backheadtext">Requests</div>

<div class="appointmentsh2">No current requests</div>

`
}