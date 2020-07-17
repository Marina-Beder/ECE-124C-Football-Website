//java script for images website page(4)
 
      //------------------------------------------------------------------------------------
 //java script for register website page(5)
 //this function to check first name,last name,address and e-mail
function validate()
		{
	         var fname=document.getElementById('fname').value;
	         var lname=document.getElementById('lname').value;
	   	     var address=document.getElementById('address').value;
             var email=document.getElementById('email').value;
			 var female=document.getElementById('female');
			 var male=document.getElementById('male');
			 var expression = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	         if(fname.length>2)
			   {document.getElementById("errorfname").innerHTML='';}
	           else{ 
                    document.getElementById("errorfname").innerHTML=' *You should enter your First name at  least  3 characters';
	                document.getElementById("errorfname").style.color='red';}
	 
             if(lname.length>2)
			    {
					document.getElementById("errorlname").innerHTML='';
	            }
	          else{
                   document.getElementById("errorlname").innerHTML=' *You should enter your Last name at  least  3 characters';
                   document.getElementById("errorlname").style.color='red';
				  }
	  
             if(address.length>2)
		       {
				document.getElementById("erroraddress").innerHTML='';
	           }
	         else {
                   document.getElementById("erroraddress").innerHTML=' *You should enter your Address at least  3 characters';
		           document.getElementById("erroraddress").style.color='red';
				   }
	  
            if(email.match(expression))
		      {
	            document.getElementById("erroremail").innerHTML='';
                
	          }
	        else{ 
			     document.getElementById("erroremail").innerHTML='*You should enter your email in correct form '; 
			     document.getElementById("erroremail").style.color='red';
				}
			
           if (female.checked == true||male.checked ==true)
		        {document.getElementById("errorchoose").innerHTML=''} 
	       if (female.checked ==false &&male.checked == false)
		       {
				 document.getElementById("errorchoose").innerHTML=' *You should choose from this menu';
                 document.getElementById("errorchoose").style.color='red';
			   }
  
	    }
	 //---------------------------------------------------------------------------------------------
	  //this function to password which contain must 8 only characters start with uppercase,one dgit at least and one only special character and no space
function PasswordTest()
	     {
	        var pass=document.getElementById("checkpassword").value;
		    var special = pass.match(/\W/g);
		    if(special!=null)
		    {var count= special.length;}
	        var res = pass.charAt(0)
	        if(pass.match(/^\S+$/)&&res.match(/[A-Z]/g)&&pass.match(/[0-9]/ )&&pass.match(/[^a-zA-Z\d]/g )&&pass.length==8&&count==1)
	            {
				   document.getElementById("errorpass").innerHTML='';
	            return true;
				}
	           else
	               {
	                 document.getElementById("errorpass").innerHTML='*This password must only 8 characters start with uppercase,one dgit at least and one special character and no space ';
                     document.getElementById("errorpass").style.color='red';
					  
	                 return false;
				   }
		  } 
		  //--------------------------------------------------------------------------------
				//this function to phone contain numbers
function PhoneTest()
                  {
    		        var phone=document.getElementById("checkphone").value;
                    if(phone.match(/^\d{11}$/ ))
	                {
				     document.getElementById("errorphone").innerHTML='';
	                 return true;
				    }
	                else
	                {
	                document.getElementById("errorphone").innerHTML=' *Your phone must contain 11 numbers';
                    document.getElementById("errorphone").style.color='red';
	                return false;
		     		  }
	               }
//this function to make message at the end of form if user enter any thing error or user enter all inforation in correct form  				     
function checkall()
             { 
			  var fname=document.getElementById('fname').value;
	          var lname=document.getElementById('lname').value;
	   	      var address=document.getElementById('address').value;
              var email=document.getElementById('email').value;
			  var female=document.getElementById('female');
			  var male=document.getElementById('male');
			  var phone=document.getElementById("checkphone").value;
			  var pass=document.getElementById("checkpassword").value;
			  var expression = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		      var special = pass.match(/\W/g);
		      if(special!=null)
			  { var count= special.length;}
	            var res = pass.charAt(0);
		   
		      if(fname.length>2&&lname.length>2&&address.length>2&&email.match(expression)&&phone.length == 11&&pass.match(/^\S+$/)&& res.match(/[A-Z]/g)&&pass.match(/[0-9]/ )&&pass.match(/[^a-zA-Z\d]/g )&&pass.length==8&&count==1&&(female.checked == true||male.checked ==true))
	            { 
			       if(lname.length>2)
			          {
						  document.getElementById("message").innerHTML='*Thank You for registration';
	                      document.getElementById("message").style.color='#006400';
					      setTimeout(function(){ alert("Welcome in our Website"); }, 10);
					      window.location.reload();
			          }
			  
                 }
	          else
			      { 
                   document.getElementById("message").innerHTML=' *Please follow these instructions';
	               document.getElementById("message").style.color='Tomato'; 
				  } 
	      }
