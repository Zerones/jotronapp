
function showfrontPage() {
    mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = `

    <div class="frontpage">
        <div class="showInfo" onclick="showInfo()">i</div>

        <img class="jotronlogo" src="img/Jotron_logo.jpg"><br>
        <div id=wrongpass></div>
        <form class="loginbox" method="post">
            Username<br />
            <input type="text" placeholder="Username" id="usernameTxt" autocomplete="username"><br>
            Password<br />
            <input type="password" placeholder="Password" id="passwordTxt" autocomplete="current-password"><br>
        </form>
        <div class="passreq" onclick="showpassReq()">Forgott password?</div><br/>
        
        
            <div class="b1">
            <button class="login" onclick="dologInCheck()">Login</button><br>
              <button class="regi" onclick="showregPage()">Registrer</button>
                <button class="loginBypass" onclick="bypassLogin()">Bypass Login<br/><b class="cons">(Will be removed)</b></button>
        </div>
   
    <div class="userinfo" onclick="showInfoPage()">Privacy and Terms of Use</div>

        
        

    </div>

    `;
}
