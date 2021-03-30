function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal==0 || principal<0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {

        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        var interest = principal * years * rate/100;
        var total_amount = principal + interest;
    
        var date = new Date();
        var years_in_future = parseInt(date.getFullYear()) + parseInt(years);

        document.getElementById("results").innerHTML = "</br>If you deposited " + principal + "</br>" + "at an intest rate of " + rate + "%" + "</br>" + "You will receive an amount of " + interest + "</br>" + "in the year " + years_in_future;

    }    
}

function show_value(x)
{
    document.getElementById("slider_value").innerHTML=x+"%";
}
        