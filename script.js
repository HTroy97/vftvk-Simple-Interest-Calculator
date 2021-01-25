function compute()//function to compute result and display results
{
    principal = document.getElementById("principal").value;
    if(validate_number(parseInt(principal))){
        rate=document.getElementById("rate").value;
        var years=parseInt(document.getElementById("years").value);
        interest=principal*years*rate/100;
        var current_date=new Date();
        var future_year=current_date.getFullYear()+years;
        document.getElementById('result').innerHTML="If you deposit "+ "<span style='background-color:#FFFF00'>"+
                                                +principal+ "</span>"+"<br>"+
                                                " at an interest rate of "+"<span style='background-color:#FFFF00'>"+
                                                rate+"%"+"</span>"+"<br>"+
                                                " you will receive an amount of "+"<span style='background-color:#FFFF00'>"+
                                                interest+"</span>"+"<br>"+
                                                " in the year "+"<span style='background-color:#FFFF00'>"+future_year+"</span>";
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