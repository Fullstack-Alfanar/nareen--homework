// note:
// i did try to solve it by this way:
// 1. build object that contain arrays of charecters, letters and numbers 
// 2. conver mail(string) to Array
// 3.chick if this array has atleast one time the charecter "@"
// 4. chick if the array contain charecter from the object
// but it didnt work so i used RegExp




///    email addres general rules:
///
///    local part @ domain
///
///       local part
///
///*up to 64 charecters
///*caputal/small leters
///*digits 0-9
///*charecters
///*dot not at beggining
///
///
///       local part:
///*up to 225  charecters
///*caputal/small leters
///  "_" not in middle or the end of domain
/// comment between ()



function validat(mail)
 {
    var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+.[a-z]+)?$/
    
    if(regx.test(mail))
     {
        alert("valid email");
        return (true);
    }
    else 
    {
        alert("unvalid email");
        return (false);
    }
}


var mail=prompt("please enter your mail");
console.log(validat(mail));



