import React, {useState} from 'react';
import './Calendar.css'

function Calendar () {
    return(
        <div class="wrapper">
            <div class="container-calendar">
                <h3 id="monthAndYear"></h3>
                <div class="button-container-calendar">
                    <button id="previous" onClick="previous()">&#8249;</button>
                    <button id="next" onClick="next()">&#8250;</button>
                </div>
                <table class="table-calendar" id="calendar" data-lang="en">
                    <thead id="thead-month"></thead>
                    <tbody id="calendar-body"></tbody>
                </table>
                <div class="footer-container-calendar">
                    <label for="month">Jump To: </label>
                    <select id="month" onChange="jump()">
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
                 <select id="year" onChange="jump()"></select>       
            </div>
        </div>
    </div>
    );
    function year_range(from, until) {
        var years = "";
        for (var year = from; year <= until; year++) {
            years += "<option value =" + year + ">" + year + "</option";
        }
        return years;
    }  

let today = new Date();
let thisMonth = today.getMonth();
let thisYear = today.getFullYear();
let chooseYear = document.getElementById("year");
let chooseMonth = document.getElementById("month");

let createYear = year_range(2021, 2024);
document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var $dataHead = "<tr>";
for (let dhead in days) {
    $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

document.getElementById("thead-month").innerHTML = $dataHead;

let monthAndYear = document.getElementById("monthAndYear");
displayCalendar(thisMonth, thisYear);

function next() {
    thisYear = (thisMonth === 11) ? thisYear + 1 : thisYear;
    thisMonth = (thisMonth + 1) % 12;
    displayCalendar(thisMonth, thisYear);
}

function previous() {
    thisYear = (thisMonth === 0) ? thisYear - 1 : thisYear;
    thisMonth = (thisMonth === 0) ? 11 : thisMonth - 1;
    displayCalendar(thisMonth, thisYear);
}

function jump() {
    thisYear = parseInt(chooseYear.value);
    thisMonth = parseInt(chooseMonth.value);
    displayCalendar(thisMonth, thisYear);
}

function displayCalendar(month, year) {

    var firstDay = (new Date( year, month ) ).getDay();

    let table = document.getElementById("calendar-body");

    table.innerHTML = "";

    monthAndYear.innerHTML = months[month] + " " + year;
    chooseYear.value = year;
    chooseMonth.value = month;

    let date = 1; //formatting all date boxes in the calendar
    for (let i = 0; i < 6; i++ ) {
        
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++ ) {
            if ( i === 0 && j < firstDay ) {
                let box = document.createElement( "td" );
                let boxText = document.createTextNode("");
                box.appendChild(boxText);
                row.appendChild(box);
            } 
            else if (date > daysInMonth(month, year)) {
                break;
            } 
            else {
                let box = document.createElement("td");
                box.setAttribute("data-date", date);
                box.setAttribute("data-month", month + 1);
                box.setAttribute("data-year", year);
                box.setAttribute("data-month_name", months[month]);
                box.className = "date-picker";
                box.innerHTML = "<span>" + date + "</span>";

                if ( 
                    date === today.getDate() &&
                    year === today.getFullYear() && 
                    month === today.getMonth() 
                ) {
                    box.className = "date-picker selected";
                }
                row.appendChild(box);
                date++;
            }
        }
        table.appendChild(row);
    }
}
function daysInMonth(Month, Year) {
    return 32 - new Date(Year, Month, 32).getDate();
}
}
export default Calendar;