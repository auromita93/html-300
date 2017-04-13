var numbers = [];

function enterNumber() {
    var entNumber = Number(document.numberForm.number.value);
    if(isNaN(entNumber)){
        alert("Please enter a number.")
    }
    else{
        numbers.push(entNumber);
        numberValues();
    }
    event.preventDefault();
}

function numberValues() {
    var count = 0;
    document.getElementById("count").innerHTML = "Count: " + numbers.length;

    
    var sum = 0;
    for (var i = 0; i <numbers.length; i++){
        sum = sum + numbers[i];
    } 
    
    document.getElementById("sum").innerHTML = "Sum: " + sum;

    
    var mean = 0;
    var allNumbers = numbers.length;
    mean = (sum/allNumbers);
    document.getElementById("mean").innerHTML = "Mean(Avg): " + mean;
  
  
}

    
function resetForm() {
    location.reload();
    event.preventDefault();
 
}