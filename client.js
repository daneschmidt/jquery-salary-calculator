//create array to store employee info objects 
const employeeInfo = [];
//create a variable that will hold the total of the inputed salary values
let monthlyTotal = 0;


//get the page ready to run and listen for events
$(document).ready(init);

//create the listeners that will trigger the other functions that will run our form and display
function init() {
    console.log('we ready to rock and roll');
    $('#employeeInfoForm').on('submit', submitEmployeeInfoForm);
    $('.js-employeeInfoDisplay').on('click', '.js-button-bye', removeEmployee);
}

//this function will take the values of the input fields on the forms and make them objects as well as push them to the array. Also calls the render function to redraw the form
function submitEmployeeInfoForm(event) {
    event.preventDefault();
    
        const employeeInfoObject = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            idNumber: parseInt($('#idNumber').val()),
            jobTitle: $('#jobTitle').val(),
            annualSalary: parseInt($('#annualSalary').val())

        }

        addEmployee(employeeInfoObject); 

        render();
        

        console.log(employeeInfo);

    resetInputs();

    bleedingCash();

}

function bleedingCash() {
    if(monthlyTotal >= 20000) {
        $('.js-monthly-total-display').css("color", "red",);
        console.log ('we are bleeding cash boss');

    }else {

    }

}

function addEmployee(employeeInfoObject) {
    employeeInfo.push(employeeInfoObject);
    render();

}

function findTotal() {
    monthlyTotal = 0;
    for (let employee of employeeInfo) {
        monthlyTotal += employee.annualSalary /12;

    }

}

function render() {
    $('.js-employeeInfoDisplay').empty();
    findTotal();

    for (let i = 0; i < employeeInfo.length; i++) {
        const employee = employeeInfo[i];

    $('.js-employeeInfoDisplay').append(`
        
        <tr data-id="${i}">
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.idNumber}</td>
            <td>${employee.jobTitle}</td>
            <td>${employee.annualSalary}</td>
            <td><button class ="js-button-bye">delete</button></td>
        </tr>
    `);
}

    $('#monthly-total').text(`Monthly Salary Total : $${monthlyTotal.toFixed(2)}`);
}

function removeEmployee(){
    const id = $(this).parent().data('id');
    employeeInfo.splice(id, 1);
    // $(this).parent().remove();
    render();

}

function resetInputs(){
    $('#firstName').val(``);
    $('#lastName').val(``);
    $('#idNumber').val(``);
    $('#jobTitle').val(``);
    $('#annualSalary').val(``);

}

function testFunction() {
console.log('you passed the test');
}

