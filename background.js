let sessionStart = null;

chrome.runtime.onInstalled.addListener(() => {
    console.log("GitHub Session Tracker Installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) =>{
    if(message.type === "start");
    else if(message.type ==="end" && sessionStart){
        const end = new Date();
        const duration = (end-sessionstart)/1000; 
        const datekey = new Date().toISOString().split('T')[0];
        
        
        chrome.storage.local.get(["sessions"],(result) =>{
            const sessions = result.sessions || {};
            sessions[datekey] =(sessions[datekey] || 0) + duration;

             chrome.storage.local.set({ sessions });
        });
        sessionStart = null;
    }
});
