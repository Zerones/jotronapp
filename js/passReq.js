function showpassReq() {
    pageID = ['Password Request', 'showfrontPage()'];
    mainContentDiv.innerHTML = headerCall() + ` 
    
    <div class="passreqfieldbox">
        <form action="#">
            Type inn your email address,<br>You will then get a password recovery link on email. <br />
            <input type="text" placeholder="Email" id="passreqfield" /><br />

            <button class="preqfiledsub" type="submit">Submit</button>
        </form>
    </div>

    `;

}
