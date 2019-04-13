//global variables
let employeeData = [];
let monthlyCost = 0;
let deleteButtonCount = 0;

$(readyNow);

function appendToTable() {
    console.log('in appendToTable');
    //define what data you are appending
    let newest = employeeData[employeeData.length-1];
    //target table body
    let el = $('#employeeTable').find('tbody');
    //append new row with td's for each key in employee object
    //add delete button with id matching index of newest in array
    deleteButtonCount ++;
    el.append(`<tr>
    <td>${newest.firstName}</td>
    <td>${newest.lastName}</td>
    <td>${newest.id}</td>
    <td>${newest.title}</td>
    <td>${newest.annualSalary}</td>
    <td><button id="deleteButton${deleteButtonCount}">Delete</button></td>
    </tr>`);

    //activate new delete button listener, on click
    $(`#deleteButton${deleteButtonCount}`).on('click', deleteRow);

} //end appendToTable

function calculateMonthlyCost() {
    console.log('in calculateMonthlyCost');
    
    //define variable for total annual cost
    let totalAnnualSalaries = 0;
    
    //loop through employeeData and sum annual salaries
    for (employee of employeeData) {
        totalAnnualSalaries += Number(employee.annualSalary);
    }
    
    //divide total number by 12 and assign to monthlyCost variable
    monthlyCost = totalAnnualSalaries / 12;
} //end calculateMonthlyCost

function collectInfo() {
    console.log('in collectInfo');

    //create new employee object
    let employee = {
        //set keys to input value fields
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    }
    
    //push object to employeeData array
    employeeData.push(employee);
    
    //clear input fields
    $('#firstNameIn').val(''),
    $('#lastNameIn').val(''),
    $('#idIn').val(''),
    $('#titleIn').val(''),
    $('#annualSalaryIn').val('')
} //end collectInfo

function deleteRow() {
    console.log('in deleteRow');

    
} //end deleteRow

function readyNow() {
    console.log('js');
    setEventListeners();
} //end readyNow

function setEventListeners() {
    console.log('in setEventListeners');

    //submitEmployeeButton, on click
    $('#submitEmployeeButton').on('click', function() {
        
        //make sure all input fields are filled in
        if (!$('#firstNameIn').val() ||
            !$('#lastNameIn').val() ||
            !$('#idIn').val() ||
            !$('#titleIn').val() ||
            !$('#annualSalaryIn').val()
        ) {
            alert('all fields must be completed');
            return false;
        }
        
        collectInfo();
        appendToTable();
        calculateMonthlyCost();
        updateMonthlyCost();
    }); //end submitEmployeeButton

} //end setEventListeners

function updateMonthlyCost() {
    console.log('in updateMonthlyCost');
    
    //empty span on DOM
    $('#monthlyCost').empty();
    
    //append new number to DOM (limited to 2 decimal places)
    $('#monthlyCost').append(monthlyCost.toFixed(2));
    
    //if over 20000, make span background red
    if (monthlyCost > 20000) {
        $('#costDisplayArea').find('h2').css('background-color', 'red');
    }
} //end updateMonthlyCost
