//global variables
let employeeData = [];

$(readyNow);

function appendToTable(employee) {
    console.log('in appendToTable');
    //target table body
    let el = $('#employeeTable').find('tbody');
    //append new row with td's for each key in employee object
    el.append(`<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.id}</td>
    <td>${employee.title}</td>
    <td>${employee.annualSalary}</td>
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
    
    //update table body with info (function)
    appendToTable(employee);
}

function readyNow() {
    console.log('js');
    setEventListeners();
}

function setEventListeners() {
    //submitEmployeeButton, on click
    $('#submitEmployeeButton').on('click', collectInfo);
}