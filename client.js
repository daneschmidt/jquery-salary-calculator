// const employeeInfo = [];

$(document).ready(init);

function init() {
    console.log('we ready to rock and roll');
    $('#employeeInfoForm').on('submit', submitEmployeeInfoForm);
}

function submitEmployeeInfoForm(event) {
    event.preventDefault();
    console.log (
        $('#firstName').val(),
        $('#lastName').val(),
        parseInt($('#idNumber').val()),
        $('#jobTitle').val(),
        parseInt($('#annualSalary').val())
    );

    

}

function testFunction() {
console.log('you passed the test');
}