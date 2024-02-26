// $(document).ready(function() {


  


//  $('#transsort').hide();
//  $('#country').hide();
//  $('#swiftlb').hide();
//  $('#countrylb').hide();
//  $('#address').hide();
//  $('#bankadlb').hide();


//   $("#tranfertype").change(function(){
    
//    if ($(this).val() == 2) {
//  $('#transsort').show();
//  $('#country').show();
//  $('#swiftlb').show();
//  $('#countrylb').show();
//  $('#address').show();
//  $('#bankadlb').show();
//    } 
// else if ($(this).val() == 1) {
//  $('#transsort').hide();
//  $('#country').hide();
//  $('#swiftlb').hide();
//  $('#countrylb').hide();
//  $('#address').hide();
//  $('#bankadlb').hide();
//    }    

//   }); 


// });


$(document).ready(function() {


    $("#trans_button").click(function(){    
    $('#image_load').show();
    $('#form_fill').hide(); 


transacctname =  $("#transacctname").val();
bank_name =  $("#bank_name").val(); 
transacctno =  $("#transacctno").val();  
transsort = $("#transsort").val(); 
transdescript  =  $("#transdescript").val() 
transamount = $("#transamount").val();
address = $("#address").val();
country = $("#country").val();

 $.post("transfer/process1.php", {country:country, address:address, transsort:transsort, bank_name:bank_name, transacctname:transacctname, transacctno:transacctno, transdescript:transdescript, transamount:transamount } ,function(data){
 


 
 if (data == "success") {

     $('#image_load').show();


     $('#myProgress').hide();
     $('#msg').hide();

     $('#alert_error').hide();
     $('#sufficient').hide();
     $('#alert_danger').hide();
     $('#form_fill').hide();




var gif = 10;
var idd = setInterval(frame, 70);
  function frame() {
    if (gif >= 49) {



 $('#transfering').show();
 $('#carddddi').hide();
     $('#myProgress').show();
var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 1000);
  function frame() {
    if (width >= 49) {
       $('#myProgress').hide();

     window.location = "offshore.php";
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = 'Transfering'+' ' + width * 1  + '%';
    }
  }




      clearInterval(idd);
    } else {
      gif++;
    }





}



} 









else if (data == "fourth") {
     $('#image_load').show();
     $('#myProgress').hide();
     $('#msg').hide();
     $('#alert_error').hide();
     $('#sufficient').hide();
     $('#alert_danger').hide();
     $('#form_fill').hide();

var gif = 1;
var idd = setInterval(frame, 70);
  function frame() {
    if (gif >= 19) {


 $('#image_load').hide();

     $('#myProgress').show();
var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 1000);
  function frame() {
    if (width >= 19) {
       $('#myProgress').hide();

     window.location = "checkprocess.php";
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = 'Transfering'+' ' + width * 1  + '%';
    }
  }




      clearInterval(idd);
    } else {
      gif++;
    }

}

} 








else if (data == "second"){
  $("#myyModal").modal();
  $('#image_load').hide();
 $('#form_fill').show();
  $('#alert_error').hide();
 $('#alert_danger').hide();
 $('#sufficient').hide();
}



else if (data == "third"){

     $('#image_load').show();
     $('#myProgress').hide();
     $('#msg').hide();
     $('#alert_error').hide();
     $('#sufficient').hide();
     $('#alert_danger').hide();
     $('#form_fill').hide();


var gif = 10;
var idd = setInterval(frame, 70);
  function frame() {
    if (gif >= 99) {


 $('#image_load').hide();

     $('#myProgress').show();
var elem = document.getElementById("myBar");   
  var width = 10;
  var id = setInterval(frame, 400);
  function frame() {
    if (width >= 98) {
       $('#myProgress').hide();
       
    $("#myyModal").modal();

      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = 'Transfering'+' ' + width * 1  + '%';
    }
  }




      clearInterval(idd);
    } else {
      gif++;
    }





}




}














else if (data == "sufficient"){
  $('#image_load').hide();
 $('#form_fill').show();
  $('#alert_error').hide();
 $('#alert_danger').hide();
 $('#sufficient').show();
} 

else if (data == "empty"){
 $('#image_load').hide();
 $('#form_fill').show();
 $('#sufficient').hide();
  $('#alert_error').hide();
 $('#alert_danger').show();
} 


 else {
$('#image_load').hide();
 $('#form_fill').show();
 $('#sufficient').hide();
  $('#alert_danger').hide();
  $('#alert_error').show();
  $("#myyModal").modal();
}






   });

  }); 












    $("#otp_button").click(function(){
    

  $('#image_load').show();
     $('#show_form').hide();
otp =  $("#otp").val(); 

 $.post("transfer/process2.php", {otp:otp} ,function(data){
 
 if (data == "success") {
  $('#image_load').show();
     $('#invalid').hide();
     $('#alert_error').hide();
     $('#msg').hide();
     $('#alert_danger').hide();
     $('#show_form').hide();

var gif = 10;
var idd = setInterval(frame, 50);
  function frame() {
    if (gif >= 49) {


 $('#image_load').hide();
     $('#transfering').show();
     $('#myProgress').show();
var elem = document.getElementById("myBar");   
  var width = 49;
  var id = setInterval(frame, 1200);
  function frame() {
    if (width >= 67) {
       $('#myProgress').hide();

     window.location = "checkprocess.php";
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = 'Transfering'+' ' + width * 1  + '%';
    }
  }


      clearInterval(idd);
    } else {
      gif++;
    }


}

} 

else if (data == "fourth") {

  $('#image_load').show();
     $('#invalid').hide();
     $('#alert_error').hide();
     $('#msg').hide();
     $('#alert_danger').hide();
     $('#show_form').hide();


var gif = 1;
var idd = setInterval(frame, 50);
  function frame() {
    if (gif >= 40) {


 $('#image_load').hide();
     $('#myProgress').show();
var elem = document.getElementById("myBar");   
  var width = 40;
  var id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
          $('#myProgress').hide();
     window.location = "invoice.php";
             clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = 'Transfering'+' ' + width * 1  + '%';
    }
  }


      clearInterval(idd);
    } else {
      gif++;
    }


}

} 





else if (data == "invalid"){

     $('#show_form').show();
  $('#image_load').hide();
  $('#alert_error').hide();
 $('#alert_danger').hide();
 $('#invalid').show();
} 

else if (data == "empty"){

     $('#show_form').show();
  $('#image_load').hide();
 $('#invalid').hide();
  $('#alert_error').hide();
 $('#alert_danger').show();
} 


 else {

     $('#show_form').show();
  $('#image_load').hide();
 $('#invalid').hide();
  $('#alert_danger').hide();
  $('#alert_error').show();
}






   });

  }); 









    $("#transcode_button").click(function(){
    

     $('#image_load').show();
     $('#sho_form').hide();
transfercode =  $("#transfercode").val(); 

 $.post("transfer/process3.php", {transfercode:transfercode} ,function(data){
 if (data == "success") {


     $('#invalid').hide();
     $('#msg').hide();
     $('#alert_error').hide();
     $('#alert_danger').hide();
     $('#sho_form').hide();


var gif = 10;
var idd = setInterval(frame, 50);
  function frame() {
    if (gif >= 49) {



     $('#image_load').hide();
     $('#myProgress').show();
     $('#transfering').show();
var elem = document.getElementById("myBar");   
  var width = 67;
  var id = setInterval(frame, 2000);
  function frame() {
    if (width >= 81) {
       $('#myProgress').hide();

     window.location = "checkprocess.php";
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = 'Transfering'+' ' + width * 1  + '%';
    }
  }


      clearInterval(idd);
    } else {
      gif++;
    }


}



} 

else if (data == "invalid"){

     $('#sho_form').show();
  $('#image_load').hide();
  $('#alert_error').hide();
 $('#alert_danger').hide();
 $('#invalid').show();
} 

else if (data == "empty"){
     $('#sho_form').show();
 $('#image_load').hide();
 $('#invalid').hide();
  $('#alert_error').hide();
 $('#alert_danger').show();
} 


 else {
     $('#sho_form').show();
 $('#image_load').hide();
 $('#invalid').hide();
  $('#alert_danger').hide();
  $('#alert_error').show();
}






   });

  }); 






    $("#transfer_button").click(function(){
    

     $('#image_load').show();
     $('#showw_form').hide();
vatcode =  $("#vatcode").val(); 

 $.post("transfer/process4.php", {vatcode:vatcode} ,function(data){
 if (data == "success") {


     $('#invalid').hide();
     $('#msg').hide();
     $('#alert_error').hide();
     $('#alert_danger').hide();
     $('#showw_form').hide();


var gif = 10;
var idd = setInterval(frame, 50);
  function frame() {
    if (gif >= 49) {



     $('#image_load').hide();
     $('#transfering').show();
     $('#myProgress').show();
var elem = document.getElementById("myBar");   
  var width = 81;
  var id = setInterval(frame, 2000);
  function frame() {
    if (width >= 89) {
       $('#myProgress').hide();

     window.location = "checkprocess.php";
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = 'Transfering'+' ' + width * 1  + '%';
    }
  }





      clearInterval(idd);
    } else {
      gif++;
    }


}




} 

else if (data == "invalid"){

     $('#showw_form').show();
     $('#image_load').hide();
  $('#alert_error').hide();
 $('#alert_danger').hide();
 $('#invalid').show();
} 

else if (data == "empty"){
     $('#showw_form').show();
     $('#image_load').hide();
 $('#invalid').hide();
  $('#alert_error').hide();
 $('#alert_danger').show();
} 


 else {
     $('#showw_form').show();
     $('#image_load').hide();
 $('#invalid').hide();
  $('#alert_danger').hide();
  $('#alert_error').show();
}






   });

  }); 







    $("#transx_button").click(function(){
    


     $('#image_load').show();
     $('#clearform').hide();
hmevit =  $("#hmevit").val(); 

 $.post("transfer/process5.php", {hmevit:hmevit} ,function(data){
 if (data == "success") {

     $('#invalid').hide();
     $('#msg').hide();
     $('#alert_error').hide();
     $('#alert_danger').hide();
     $('#clearform').hide();


var gif = 10;
var idd = setInterval(frame, 50);
  function frame() {
    if (gif >= 49) {


     $('#image_load').hide(); 
     $('#myProgress').show();
     $('#transfering').show();
var elem = document.getElementById("myBar");   
  var width = 89;
  var id = setInterval(frame, 2000);
  function frame() {
    if (width >= 100) {
       $('#myProgress').hide();
     window.location = "invoice.php";
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = 'Transfering'+' ' + width * 1  + '%';
    }
  }

  clearInterval(idd);
    } else {
      gif++;
    }


}






} 

else if (data == "invalid"){

     $('#clearform').show();
     $('#image_load').hide();
  $('#alert_error').hide();
 $('#alert_danger').hide();
 $('#invalid').show();
} 

else if (data == "empty"){
  
     $('#clearform').show();
     $('#image_load').hide();
 $('#invalid').hide();
  $('#alert_error').hide();
 $('#alert_danger').show();
} 


 else {
     $('#clearform').show();
     $('#image_load').hide();
 $('#invalid').hide();
  $('#alert_danger').hide();
  $('#alert_error').show();
}






   });

  }); 













});



    
        