// JavaScript source code
function passangerRequest() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `



<div class="driver-request">

        <div id="driverModal" class="driver-modal">

            <div class="driver-modal-content">
                <span onclick="hideModal()" class="close" style="font-size:200%;">&times;</span>
                <p style="text-align: center; font-size: 200%;">Please confirm.</p>
                <div class="modal-driver-accept" onclick="hideModal()">Confirm</div>
                <div class="modal-driver-decline" onclick="hideModal()">Abort</div>
            </div>
        </div>

        <div class="driver-container">
            <div class="backtop"></div>
            <div class="backheadtext">Driver</div>
            <div onclick="show" class="backbutton">&lt;&lt;</div>
            <div class="driver-center-container">
                <p style="font-size:250%;">Ola Nordmann</p>
                <p style="font-size:150%;">33 13 97 00</p>
                <p style="font-size:200%">Distance: 2.2km</p>
                <div id="mapslink" class="driver-mapslink">
                    <p>Google Maps link</p>
                </div>
                <div class="driver-wants-a-ride">
                    <p>Ola Nordmann</p>
                    <p>wants a ride to work.</p>
                    <br />
                    <p>Do you wish to</p>
                    <p>accept?</p>
                </div>
                <div onclick="showModal()" class="driver-accept">
                    <p>Accept</p>
                </div>
                <div onclick="showModal()" class="driver-decline">
                    <p>Decline</p>
                </div>
            </div>
        </div>
    </div>
` ;

}


    function showModal() {
                    var modal = document.getElementById('driverModal');
    modal.style.display = "block";
}
                function hideModal() {
                    var modal = document.getElementById('driverModal');
    modal.style.display = "none";
}
