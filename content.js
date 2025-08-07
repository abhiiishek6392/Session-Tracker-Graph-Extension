let timer = null;

function startTracking(){
    chrome.runtime.sendMessage({ type: "start"});
}

function stopTracking(){
    chrome.runtime.sendMessage({ type: "end"});
}

window.addEventListener("focus",startTracking);
window.addEventListener("blur",stopTracking);