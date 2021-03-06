
function updateTime() {
    let getInfo = new Date();
    let hour = getInfo.getHours();
    let minute = getInfo.getMinutes();
    let second = getInfo.getSeconds();
    
    if (hour < 10) {
        hour = "0" + hour;
    };
    
    if (minute < 10) {
       minute = "0" + minute;
    };

    if (second < 10) {
       second = "0" + second;
    };

    let time = hour + ":" + minute + ":" + second;

    if (hour > 12) {
        hour = hour - 12;
        time = time + "PM";

    } else if(hour < 12) {
        time = time + " AM";

    } else if(hour = 12) {
        time = time + " PM";
    };

    document.getElementById("p1").innerHTML = time;
 };
setInterval(updateTime, 1000);

    
function updateDay() {
    let getInfo = new Date();
    let yyyy = getInfo.getFullYear();
    let mm = getInfo.getMonth() + 1; // Months start at 0!
    let dd = getInfo.getDate();
    
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    
    let today = mm + '/' + dd + '/' + yyyy;
    
    document.getElementById("p2").innerHTML = today;
        
};
setInterval(updateDay, 1000);


let alarmTime = null;
let alarmTimeout = null;

function setAlarmTime(value) {
    alarmTime = value;
};

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => alert("WAKE UP!"), timeout);

        }

    }
}

function clearAlarm() {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);

    }
}

function alarmCheckBox() {
    var alarmCheck = document.getElementById("alarmCheck");
    var text = document.getElementById("text");
    var alarmAppearence = document.getElementById("alarmAppearence");
    var othertext = document.getElementById("othertext");

    if (alarmCheck.checked == true) {
        text.style.display = "block";
        othertext.style.display = "none";
        alarmAppearence.style.opacity = 1;
    } else {
        text.style.display = "none";
        othertext.style.display = "block";
        alarmAppearence.style.opacity = 0;
    }
};


// function checkAlarm() {
//     let alarm = ('11 Feb 2022 12:07:40 GMT-05:00');

//     let alarmTimeInSeconds = Math.floor(Date.parse(alarm) / 1000); 
//     let nowTimeInSeconds = Math.floor(Date.now() / 1000);
//     let diff = alarmTimeInSeconds - nowTimeInSeconds; // total diff
//     document.getElementById("Countdown").innerHTML = diff;
//        if (diff == 0) {
//            alert('WAKE UP!');      
//    };
    
// };
// setInterval(checkAlarm, 1000);
