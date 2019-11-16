const employeeInfo = [];
let monthlyTotal = 0;

$(document).ready(init);

function init() {
    console.log('we ready to rock and roll');
    $('#employeeInfoForm').on('submit', submitEmployeeInfoForm);
    $('.js-employeeInfoDisplay').on('click', '.js-button-bye', removeEmployee);
}

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
        monthlyTotal += employeeInfoObject.annualSalary;
        render();
        

        console.log(employeeInfo);

    resetInputs();
}

function addEmployee(employeeInfoObject) {
    employeeInfo.push(employeeInfoObject);

}

function render() {
    $('.js-employeeInfoDisplay').empty();

    for (let i = 0; i < employeeInfo.length; i++) {
        const employee = employeeInfo[i];

    $('.js-employeeInfoDisplay').append(`
        <div data-id="${i}">
            <span>${employee.firstName} ${employee.lastName} ${employee.idNumber} ${employee.jobTitle} ${employee.annualSalary}</span>
            <button class ="js-button-bye">delete</button>
        </div>
    `);
}

    $('#monthly-total').text(`Monthly Salary Total : $${monthlyTotal}`);
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

