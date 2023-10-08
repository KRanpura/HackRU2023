import React, {useState} from 'react';


function Calendar () {
    return(
        <div class="wrapper">
            <div class="container-calendar">
                <h3 id="monthAndYear"></h3>
                <div class="button-container-calendar">
                    <button id="previous" onclick="previous()">&#8249;</button>
                    <button id="next" onclick="next()">&#8250;</button>
                </div>
                <table class="table-calendar" id="calendar" data-lang="en">
                    <thead id="thead-month"></thead>
                    <tbody id="calendar-body"></tbody>
                </table>
                <div class="footer-container-calendar">
                    <label for="month">Jump To: </label>
                    <select id="month" onchange="jump()">
                        <option value = "0">Jan</option>
                        <option value = "1">Feb</option>
                        <option value = "2">Mar</option>
                        <option value = "3">Apr</option>
                        <option value = "4">May</option>
                        <option value = "5">Jun</option>
                        <option value = "6">Jul</option>
                        <option value = "7">Aug</option>
                        <option value = "8">Sep</option>
                        <option value = "9">Oct</option>
                        <option value = "10">Nov</option>
                        <option value = "11">Dec</option>
                    </select>
                 <select id="year" onchange="jump()"></select>       
            </div>
        </div>
    </div>
    );
}
function year_range(from, until) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value =" + year + ">" + year + "</option";
    }
    return years;
}  

today = new Date();
thisMonth = today.getMonth();
thisYear = today.getFullYear();
chooseYear = document.getElementById("year");
chooseMonth = document.getElementById("month");

createYear = generate_year_range(2021, 2024);

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");

months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var $dataHead = "<tr>";
for (dhead in days) {
    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

document.getElementById("thead-month").innerHTML = $dataHead;

monthAndYear = document.getElementById("monthAndYear");
showCalendar(thisMonth, thisYear);

function next() {
    thisYear = (thisMonth === 11) ? thisYear + 1 : thisYear;
    thisMonth = (thisMonth + 1) % 12;
    showCalendar(thisMonth, thisYear);
}

function previous() {
    thisYear = (thisMonth === 0) ? thisYear - 1 : thisYear;
    thisMonth = (thisMonth === 0) ? 11 : thisMonth - 1;
    showCalendar(thisMonth, thisYear);
}

function jump() {
    thisYear = parseInt(chooseYear.value);
    thisMonth = parseInt(chooseMonth.value);
    showCalendar(thisMonth, thisYear);
}

function displayCalendar(month, year) {

    var firstDay = (new Date( year, month ) ).getDay();

    table = document.getElementById("calendar-body");

    table.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;
    chooseYear.value = year;
    chooseMonth.value = month;

    date = 1; //formatting all date boxes in the calendar
    for (i = 0; i < 6; i++ ) {
        
        row = document.createElement("tr");
        for (j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                box = document.createElement( "td" );
                boxText = document.createTextNode("");
                box.appendChild(boxText);
                row.appendChild(box);
            } 
            else if (date > daysInMonth(month, year)) {
                break;
            } 
            else {
                box = document.createElement("td");
                box.setAttribute("data-date", date);
                box.setAttribute("data-month", month + 1);
                box.setAttribute("data-year", year);
                box.setAttribute("data-month_name", months[month]);
                box.className = "date-picker";
                box.innerHTML = "<span>" + date + "</span>";

                if ( date === today.getDate() && year === today.getFullYear() && month === today.getMonth() ) {
                    cell.className = "date-picker selected";
                }
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row);
    }
}
export default Calendar;