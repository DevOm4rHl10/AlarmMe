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

function DisplayOptions() { 
//When clicking The Add Alarm button for Pre-determined options

let button1 = document.createElement("button");                 // Create <button>(s) element 
button1.innerHTML = "1hr";             
document.getElementById("Options").appendChild(button1);

let button2 = document.createElement("button");                  
button2.innerHTML = "20min";             
document.getElementById("Options").appendChild(button2);

let button3 = document.createElement("button");                  
button3.innerHTML = "5min";             
document.getElementById("Options").appendChild(button3); 

//for customizable time options area on the page

let input = document.createElement("input");
input.innerHTML="";
document.getElementById("Options").appendChild(input);
input.setAttribute("type", "number");

//for choosing time unit of chosen time put into input field 

let input1 = document.createElement("input");
input1.innerHTML = "";
input1.setAttribute("list", "unit-list");
document.getElementById("Options").appendChild(input1);

let database = document.createElement("datalist");  
database.innerHTML = "";
database.setAttribute("id", "unit-list");
document.getElementById("Options").appendChild(database);
let unit1 = document.createElement("option");
unit1.innerHTML = "";
unit1.setAttribute("value", "hours");
document.getElementById("unit-list").appendChild(unit1);
let unit2 = document.createElement("option");
unit2.innerHTML = "";
unit2.setAttribute("value", "minutes");
document.getElementById("unit-list").appendChild(unit2);
let unit3 = document.createElement("option");
unit3.innerHTML = "";
unit3.setAttribute("value", "seconds");
document.getElementById("unit-list").appendChild(unit3);


let submit = document.createElement("button");					//for submitting typed time with its unit
submit.innerHTML = "submit";
document.getElementById("Options").appendChild(submit);

//Creates options for time until ringing
}