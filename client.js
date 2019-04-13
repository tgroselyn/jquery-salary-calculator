//global variables
let employeeData = [];

$(readyNow);

function appendToTable() {
    console.log('in appendToTable');
    //define what data you are appending
    let newest = employeeData[employeeData.length-1];
    //target table body
    let el = $('#employeeTable').find('tbody');
    //append new row with td's for each key in employee object
    el.append(`<tr>
    <td>${newest.firstName}</td>
    <td>${newest.lastName}</td>
    <td>${newest.id}</td>
    <td>${newest.title}</td>
    <td>${newest.annualSalary}</td>
    </tr>`)
}

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
}

function readyNow() {
    console.log('js');
    setEventListeners();
}

function setEventListeners() {
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
        updateMonthlyCost();
    });
}

function updateMonthlyCost() {
    console.log('in updateMonthlyCost');
}