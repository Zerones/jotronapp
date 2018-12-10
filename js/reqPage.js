function showreqPage() {
    var mainContentDiv = document.getElementById('mainContent');
    pageID = ['Requests','showMenu()'];
    mainContentDiv.innerHTML = headerCall() + ` <div class="appointmentsh2">No current requests</div>`;
}
