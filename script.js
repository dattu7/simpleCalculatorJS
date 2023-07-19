//for addition
function add()
{
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("answer1").innerHTML="Addition is "+c;
}
function sub()
{
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c=a-b;
    document.getElementById("answer1").innerHTML="Subtraction is "+c;
}
function mult()
{
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c=a*b;
    document.getElementById("answer1").innerHTML="Multiplication is :"+c;
}
function div()
{
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
    let c=a/b;
    document.getElementById("answer1").innerHTML="Division is "+c;
}