function cancelYesNO() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

    <div class="backtop"></div>
    
<div onclick="showMenu()" class="backbutton">&lt;&lt</div>

    <div class="sikker">Sure you want to cancel?</div>
    <div class="knapp">
        <button id="knappA">Yes</button>
        <button id="knappB">No</button>
    </div>
`;
}
