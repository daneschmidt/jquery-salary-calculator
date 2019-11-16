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

        employeeInfo.push(employeeInfoObject);

        $('.js-employeeInfoDisplay').append(`
            <div>
                <span>${employeeInfoObject.firstName} ${employeeInfoObject.lastName} ${employeeInfoObject.idNumber} ${employeeInfoObject.jobTitle} ${employeeInfoObject.annualSalary}</span>
                <button class ="js-button-bye">delete</button>
            </div>
        
        `);

        monthlyTotal += employeeInfoObject.annualSalary;
        $('#monthly-total').text(`Monthly Salary Total : $${monthlyTotal}`);

        console.log(employeeInfo);

    resetInputs();
}

function removeEmployee(){
    $(this).parent().remove();

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

