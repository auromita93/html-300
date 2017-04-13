var numbers = [];
//stores numbers

function enterNumber() {
    //if entered number is not a number then alerts user to enter a correct number
    //if entered number is a number then it proceeds to count, sum, and average
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
    //counts the numbers enetered from array
    var count = numbers.length;
    document.getElementById("count").innerHTML = "Count: " + count;

    //summation of the array of numbers
    var sum = 0;
    for (var i = 0; i <numbers.length; i++){
        sum = sum + numbers[i];
    } 
    
    document.getElementById("sum").innerHTML = "Sum: " + sum;

    //the mean/average of the numbers
    var mean = 0;
    mean = (sum/count);
    document.getElementById("mean").innerHTML = "Mean(Avg): " + mean;
  
  
}

    
function resetForm() {
    //refreshes the page to start a new array
   location.reload();
}