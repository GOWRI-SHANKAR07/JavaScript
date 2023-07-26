// setInterval
function showDate(){
    let date = new Date();

    // return date
    let todayDate = date.toLocaleDateString();
    console.log(todayDate);
}

setInterval(showDate, 1000);

// setTimeout

function showTime(){
    let time = new Date();

    // return time
    let todayTime = time.toLocaleTimeString();
    console.log(todayTime);
}

let id = setTimeout(showTime, 1000);

clearTimeout(id);
console.log("setTimout stopped");


