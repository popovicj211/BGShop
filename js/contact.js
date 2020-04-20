$(document).ready(function(){
 const baseUrl = "http://localhost:8080/bgshop"
    let name = $("#name")
    let email = $("#email")
    let subject = $("#subject")
    let message = $("#message")

    $('#btnCont').click(function(){

           let nameReg = /^[A-ZČĆŠĐŽ][a-zčćšđž]{3,30}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{3,30})+$/ 
           let emailReg = /^[\w]+[\.\_\-\w\d]*\@((gmail\.com)|(ict\.edu\.rs))$/;
           let subjectReg = /^[A-ZČĆŠĐŽa-zčćšđž\d\s]+$/
           let messageReg = /^[A-ZČĆŠĐŽa-zčćšđž\d\s\.\,\*\+\?\!\-\_\/\'\:\;]{5,}$/
         
         let errors = []
             if(!nameReg.test(name.val())){
                    name.css("border" , "1px solid #ff0000")
                    errors.push("Name is not valid!")
            } else {
                name.css("border" , "1px solid #ced4da")
                   }
            if(!emailReg.test(email.val())){
                email.css("border" , "1px solid #ff0000")
                errors.push("Email is not valid!")
             } else {
                email.css("border" , "1px solid #ced4da")
                  }
            if(!subjectReg.test(subject.val())){
                   subject.css("border" , "1px solid #ff0000")
                   errors.push("Subject is not valid!")
            } else {
                subject.css("border" , "1px solid #ced4da")
                   }
             if(!messageReg.test(message.val())){
                          message.css("border" , "1px solid #ff0000")
                          errors.push("Message is not valid!")
            } else {
                       message.css("border" , "1px solid #ced4da")
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
                     $('#errorMsgCont').html(resultc)
                 }else{
                     alert("Data is successfully send!")
                 }

    })

       focusContact(name)
       blurContact(name)
       focusContact(email)
       blurContact(email)
       focusContact(subject)
       blurContact(subject)
       focusContact(message)
       blurContact(message)

    function focusContact(element){
        element.focus(function () {
            $(this).css("border","1px solid #007bff")
        })
    }

  function blurContact(element){
      element.blur(function () {
          $(this).css("border-color" , "transparent")
      })
  }


})

