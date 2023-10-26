function myfunc()
{
    let x=document.getElementById("first name").value;
    let y=document.getElementById("last name").value;
    let z=document.getElementById("email").value;
    let a=document.getElementById("mobile").value;
    let b=document.getElementById("address").value;
    
    let exp1=/^[a-z,0-9]+[@][a-z]+[.]+[a-z]+$/;
    if(exp1.text(z))
    {
        alert("validation successful !")
    }
    else{
        alert("validation wrong")
    }
}