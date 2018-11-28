
    function ShowDriverAppointments() {
    var trip = {
        passengers: [0, 3, 4]
    };

    var mainContentDiv = document.getElementById('mainContent');

    mainContentDiv.innerHTML = `
            <div class="backtop"></div>
            <a href="index.html"><div class="backbuttonsymbol">&lt;&lt</div></a>
            <a href="index.html"><div class="backbutton"></div></a>
            <div id="sjaforforheader">Active Passangers</div>
            <div class="sjaforforcontainer">
            <div class="sjaforformaindiv">
                `;

    var apps = pasanger.pasangers;

    for (var i = 0; i < apps.length; i++) {
        var name = apps[i].name;
        var mobile = apps[i].mobile;
        var city = apps[i].city;

        if (!trip.passengers.includes(i)) continue;
        mainContentDiv.innerHTML += `
                    <div id="sjaforfor1">
                        <h1 class="sjaforfortest123">${name}</h1>
                        <p class="sjaforfortlfnumber1">${mobile}</p>
                        <p id="sjaforforavstand1">Distance: </p>
                        <div id="sjaforforgooglemaps1"><a href="https://www.google.no/maps?q=${city}+${gatenavn}+${husnr}&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjc5duKmPfeAhWxmIsKHTYrBJsQ_AUIDigB">Google Maps</a></div>
                        <div class="sjaforforAvlys1">Cancel</div>
                    </div>
            `;
    }
    mainContentDiv.innerHTML += '</div></div>';
    }
