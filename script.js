function student_mark(){
    var tamil=Number(document.getElementById("tamil").value);
    var english=Number(document.getElementById("english").value);
    var maths=Number(document.getElementById("maths").value);
    var science=Number(document.getElementById("science").value);
    var social=Number(document.getElementById("social").value);
    var tot=tamil+english+maths+science+social;
    var avg=tot/5;
    if(tamil>=35 && english>=35 && maths>=35 && science>=35 && social>=35){
        document.getElementById("res").innerHTML="Result:PASS"
        if(avg>=90 && avg<=100){
            document.getElementById("tot").innerHTML="Total:"+tot;
            document.getElementById("avg").innerHTML="Percentage:"+avg;
            document.getElementById("grade").innerHTML="Grade:A"
        }
        else if(avg>=80 && avg<=90){
            document.getElementById("tot").innerHTML="Total:"+tot;
            document.getElementById("avg").innerHTML="Percentage:"+avg;
            document.getElementById("grade").innerHTML="Grade:B"
        }
        else if(avg>=70 && avg<=80){
            document.getElementById("tot").innerHTML="Total:"+tot;
            document.getElementById("avg").innerHTML="Percentage:"+avg;
            document.getElementById("grade").innerHTML="Grade:C"
        }
        else{
            document.getElementById("tot").innerHTML="Total:"+tot;
            document.getElementById("avg").innerHTML="Percentage:"+avg;
            document.getElementById("grade").innerHTML="Grade:No Grade"
        }
    }
    else{
        document.getElementById("res").innerHTML="Result:Fail"
    }
}