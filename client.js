//global variables
let employeeData = [];

$(readyNow);

function appendToTable() {
    console.log('in appendToTable');
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
    appendToTable();
}

function readyNow() {
    console.log('js');
    setEventListeners();
}

function setEventListeners() {
    //submitEmployeeButton, on click
    $('#submitEmployeeButton').on('click', collectInfo);
}