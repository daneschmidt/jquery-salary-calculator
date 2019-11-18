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
            annualSalary: parseInt($('#annualSalary').val()),


            monthlySalary: parseInt($('#annualSalary').val()) /12



        }

        addEmployee(employeeInfoObject); 

        render();
        

        console.log(employeeInfo);

    resetInputs();

    bleedingCash();

}

//this function will check to see if the monthlyTotal is greater than or equal to 20000, if so it will turn the text color of the total at the bottom red.  I also have it set to console log "we are bleeding cash boss"
function bleedingCash() {
    if(monthlyTotal >= 20000) {
        $('.js-monthly-total-display').css("color", "red",);
        console.log ('we are bleeding cash boss');

    }else {

    }

}

//this function will push the newly entered and created employee object into the array and then run the render function
function addEmployee(employeeInfoObject) {
    employeeInfo.push(employeeInfoObject);
    render();

}

//this function is created to do the math needed to convert the annual salary total to a monthly value... basically divide by 12
function findTotal() {
    monthlyTotal = 0;
    for (let employee of employeeInfo) {
        monthlyTotal += employee.annualSalary /12;

    }

}

//this function is redrawing the portion of the screen that I have targeted which contains the information table I wish to update each time the submit button is clicked.  I need to dig further on this one... I know that its looping through the array here... but im not clear on the mechanics of exactly what is happening here entirely... I plan to rewatch the lecture videos this week surronding this topic.
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
            <td>${employee.monthlySalary.toFixed(2)}</td>
            <td><button class ="js-button-bye">delete</button></td>
        </tr>
    `);
}

    $('#monthly-total').text(`Monthly Salary Total : $${monthlyTotal.toFixed(2)}`);
}

//this function will remove the employee from the array... the 'id' portion of this and how exactly that is working is something I need to clear up FOR SURE.
function removeEmployee(){
    const id = $(this).parent().data('id');
    employeeInfo.splice(id, 1);
    render();

}

//this function just simply resets the input values of the corresponding input fields on the display back to the placeholders when the submit button is clicked
function resetInputs(){
    $('#firstName').val(``);
    $('#lastName').val(``);
    $('#idNumber').val(``);
    $('#jobTitle').val(``);
    $('#annualSalary').val(``);
    $('#monthlySalary').val(``);

}

// When I grow up, I'm gonna be a famous rock 'n' roll guitar player.
// And that is my whammy bar. And it's gonna be loud...
//https://www.youtube.com/watch?v=j8O3zC4E1NI

function testFunction() {
console.log('you passed the test');
}

