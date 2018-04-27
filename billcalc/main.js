var salary = document.getElementById('salary');


function displaySalary(){
var calculateBtn = document.getElementById('calculateBtn');    
    calculateBtn.addEventListener('click', function(e){
        e.preventDefault();
        console.log(salary.value);
    });
}
displaySalary();