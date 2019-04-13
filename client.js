//global variables
let employeeData = [];
let monthlyCost = 0;

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
        calculateMonthlyCost();
    });
}
