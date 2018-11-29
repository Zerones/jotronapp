
function showfrontPage() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

    <div class="frontpage">
        <div class="showInfo" onclick="showInfo()">i</div>

        <img class="jotronlogo" src="img/Jotron_logo.jpg"><br>
        <div id=wrongpass></div>
        <div class="loginbox">
            Username<br />
            <input type="text" placeholder="Username" id="usernameTxt" /><br />
            Password<br />
            <input type="password" placeholder="Password" id="passwordTxt" /><br />
        </div>
        <div class="passreq" onclick="showpassReq()">Forgott password?</div><br/>
        
        <button class="loginBypass" onclick="showMenu()">Bypass Login</button>
            <div class="b1">
            <button class="login" onclick="dologInCheck()">Login</button><br>
            <button class="regi" onclick="profileCreate()">Registrer</button>
        </div>
   
    <div class="userinfo" onclick="showInfoPage()">Privacy and Terms of Use</div>

        
        

    </div>

    `;
}
