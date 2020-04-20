$(document).ready(function(){
    let name = $("#nameR")
    let email = $("#emailR")
    let password = $("#passwordR")

     $("#btnReg").click(function(){

  let regUserR =/^[\.\_\-\w\d\@]{3,20}$/;
    let emailReg = /^[\w]+[\.\_\-\w\d]*\@((gmail\.com)|(ict\.edu\.rs))$/;
    let  regPass =/^[A-z0-9\.\-\*\_\$\:\;\@\,]{6,60}$/;


    let errors = []
    if(!regUserR.test(name.val())){
           name.css("border-bottom" , "1px solid #ff0000")
           errors.push("Username is not valid!")
   } else {
       name.css("border-bottom" , "1px solid #cccccc")
          }
   if(!emailReg.test(email.val())){
       email.css("border-bottom" , "1px solid #ff0000")
       errors.push("Email is not valid!")
    } else {
       email.css("border-bottom" , "1px solid #cccccc")
         }
   if(!regPass.test(password.val())){
          password.css("border-bottom" , "1px solid #ff0000")
          errors.push("Password is not valid!")
   } else {
       password.css("border-bottom" , "1px solid #cccccc")
          }

        
        
        var resultc = ''

        if(errors.length != 0)
        {
            resultc += ' <ul>'
            for(var x in errors)
            {	
                resultc += ' <li style="color:#ff0000;"> ' + errors[x] + '</li> ';
               
            }
            resultc += ' </ul>'
            $('#errorMsgReg').html(resultc)
        }else{
            alert("Data is successfully send!")
        }
    })

     focusReg(name)
    focusReg(email)
    focusReg(password)
    blurReg(name)
    blurReg(email)
    blurReg(password)

    function focusReg(element){
        element.focus(function () {
            $(this).css("border-bottom","1px solid #007bff")
        })
    }

    function blurReg(element){
        element.blur(function () {
            $(this).css("border-bottom" , "1px solid #cccccc")
        })
    }


})