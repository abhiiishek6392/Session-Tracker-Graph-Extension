chrome.storage.local.get("sessions",(result) =>{
    const sessions = result.sessions || {};
    const labels = Object.keys(sessions);
    const data = Object.values(sessions).map(sec => (sec / 60).toFixed(2));

    new 
    chart(document.getElementById("session chart"),{
        type : 'bar',
        data : {
            labels, 
            datasets : [{
                label : 'minutes spent on GitHub',
                data, 
                BackgroundColor : 'rgba(54, 163, 235, 0.6)'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

});