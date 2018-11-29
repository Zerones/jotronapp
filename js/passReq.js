function showpassReq() {
    var mainContentDiv = document.getElementById('mainContent');
    mainContentDiv.innerHTML = ` 

    
    <div class="backtop"></div>
    <div class="backbutton" onclick="showfrontPage()">&lt;&lt</div>

    <div class="backheadtext">PassReq</div>
    


    <div class="passreqfieldbox">
        <form action="#">
            Type inn your email address,<br>You will then get a password recovery link on email. <br />
            <input type="text" placeholder="Email" id="passreqfield" /><br />

            <button class="preqfiledsub" type="submit">Submit</button>
        </form>
    </div>

    `;

}
