function myFunction()
{
    var un = document.forms["my Form"]["uname"].value;
    var pw = document.forms["my Form"]["Pass"].value;
    if(un=="shubham@gmail.com" && pw=="123456")
{
    window.location.href="C:\Users\KRISH\Desktop\web\images\samaj.html";
}
else
{
    alert("Invalid Username and Password");
}    
}

