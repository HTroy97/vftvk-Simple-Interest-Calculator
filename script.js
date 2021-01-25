function compute()//function to compute result and display results
{
    principal = document.getElementById("principal").value;
    if(validate_number(parseInt(principal))){
        rate=document.getElementById("rate").value;
        var years=parseInt(document.getElementById("years").value);
        interest=principal*years*rate/100;
        var current_date=new Date();
        var future_year=current_date.getFullYear()+years;
        document.getElementById('result').innerHTML="If you deposit "+ "<strong>"
                                                +principal+ "</strong>"+"<br>"+
                                                " at an interest rate of "+"<strong>"+
                                                rate+"%"+"</strong>"+"<br>"+
                                                " you will receive an amount of "+"<strong>"+
                                                interest+"</strong>"+"<br>"+
                                                " in the year "+"<strong>"+future_year+"</strong>";
    }
}

function range_value(){//function to get the value from the range input and display when it changes
    var val = document.getElementById('rate').value;
    document.getElementById('range_output').innerHTML=val+"%";
}

function validate_number(number){//function we call after submitting to validate if the amount input is a positive number
    var principal = document.getElementById("principal");
    if (number>0){
        return true;      
    }
    else{
        window.alert("Enter a positive number");
        principal.focus();
        return false;

    }
}