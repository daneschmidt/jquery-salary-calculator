const employeeInfo = [];

$(document).ready(init);

function init() {
    console.log('we ready to rock and roll');
    $('#employeeInfoForm').on('submit', submitEmployeeInfoForm);
}

function submitEmployeeInfoForm(event) {
    event.preventDefault();
    
        // let firstName = $('#firstName').val();
        // let lastName = $('#lastName').val();
        // let idNumber =  parseInt($('#idNumber').val());
        // let jobTitle = $('#jobTitle').val();
        // let annualSalary = parseInt($('#annualSalary').val());

        // $('.js-employeeInfoDisplay').append(`
        //     <div>
        //         <p>${firstName} ${lastName} ${idNumber} ${jobTitle} ${annualSalary}</p>
        //     </div>
        
        // `);

        const employeeInfoObject = {
            firstName: $('#firstName').val(),
            lastName: $('#lastName').val(),
            idNumber: parseInt($('#idNumber').val()),
            jobTitle: $('#jobTitle').val(),
            annualSalary: parseInt($('#annualSalary').val())

        }

        employeeInfo.push(employeeInfoObject);

        console.log(employeeInfo);

    resetInputs();
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









