var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xpercent');


var number1 = 1;
var number2 = 2;

//numField1.value = "ray";
//alert(numField1.value);
//result.innerText = "test";

form.addEventListener('submit', function(event) {
    
    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the field")
    } else {
        
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);
    
        var result = x / y;
        var percent = result * 100;
        event.preventDefault();
        
    };
    
    
    resultField.innerText = "Answer: " + percent + "%";
    
//    alert( percent)
});



function calculate() {
    
    var result = numField1.value ;
    result1 = result.innerText ;
    alert(result1)
    

};

