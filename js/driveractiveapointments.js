console.log    
function ShowDriverAppointments() {
    var trip = {
        passengers: [0, 1, 2, 4]
    };

    var mainContentDiv = document.getElementById('mainContent');

    mainContentDiv.innerHTML = `
            <div class="backtop"></div>
            
            <div onclick="showDriver()" class="backbutton">&lt;&lt</div>
            <div class="backheadtext">Passangers</div>
            <div class="sjaforforcontainer">
            <div class="sjaforformaindiv">
                `;

    var apps = passenger.passengers;

    for (var i = 0; i < apps.length; i++) {
        var name = apps[i].name;
        var phoneNumber = apps[i].phoneNumber;
        var city = apps[i].city;
        var gatenavn = apps[i].gatenavn;
        var husnr = apps[i].husnr;

        if (!trip.passengers.includes(i)) continue;
        mainContentDiv.innerHTML += `
                    <div id="sjaforfor1">
                        <h1 class="sjaforfortest123">${name}</h1>
                        <p class="sjaforfortlfnumber1">${phoneNumber}</p>
                        <p id="sjaforforavstand1">Distance: </p>
                      <a href="https://www.google.no/maps?q=${city}+${gatenavn}+${husnr}&um=1&ie=UTF-8&sa=X&ved=0ahUKEwjc5duKmPfeAhWxmIsKHTYrBJsQ_AUIDigB/"
                         target="_blank"><div class="googlelink">Google Maps</div></a>
                      
                         <button class="sjaforforAvlys1">Cancel</button>
                    </div>
            `;
    }
    mainContentDiv.innerHTML += '</div></div>';
    }
