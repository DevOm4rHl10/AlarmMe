function showTime(){  // for showing time in Alarm Class //
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

function DisplayOptions(){ 									  //When clicking The Add Alarm button
let input = document.createElement("input");                 // Create a <input> element
input.innerHTML = "";             
document.getElementById("Options").appendChild(input);
input.setAttribute("type", "text");
input.setAttribute("list", "input-field")

//Create Datalist
let Datalist = document.createElement("Datalist");
Datalist.innerHTML = "";
document.getElementById("Options").appendChild(Datalist);
Datalist.setAttribute("id", "input-field")

//Creates options for time until ringing

let label1= document.createElement("option");
label1.innerHTML = "";
document.getElementById("input").appendChild(label1);
label1.setAttribute("value", "1hr")

let label2= document.createElement("option");
label2.innerHTML = "";
document.getElementById("input").appendChild(label2);
label2.setAttribute("value", "20min")

let label3= document.createElement("option");
label3.innerHTML = "";
document.getElementById("input").appendChild(label3);
label3.setAttribute("value", "5min")



}