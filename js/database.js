var userID;
var loggedInUser;
var nomberTelUser;
var pageID = ['0','0'];
var mainContentDiv;
var reminderlock = false; 
var currentPage = '';

function headerCall()
{
    let headerTop = `
    <div class="backtop"></div>        
    <div class="backheadtext">` + pageID[0] + `</div>
    <div onclick="` + pageID[1] + `" class="backbutton">&lt;&lt</div>`;
    return headerTop;
}
var passenger = 
{
    passengers: []
};
