$(document).ready(function() {


 
     

    $('#btcadd').hide();
    $('#phonen').hide();
    $('#ethadd').hide();
    $('#dgeadd').hide();
    $('#cashtg').hide();
    $('#emat').hide(); 
   
   
     $("#select_id").change(function(){
       
      if ($(this).val() == 'Venmo') {
    $('#btcadd').hide();
    $('#phonen').show();
    $('#emat').show(); 
    $('#dgeadd').hide(); 
    $('#ethadd').hide();
    $('#cashtg').hide();
      } 
   else if ($(this).val() == 'Ethereum') {
    $('#ethadd').show();
    $('#phonen').show();
    $('#btcadd').hide();
    $('#dgeadd').hide();
    $('#emat').hide();
    $('#cashtg').hide();
      }
     else if ($(this).val() == 'Dogecoin') {
    $('#dgeadd').show();
    $('#phonen').show();
    $('#btcadd').hide();
    $('#ethadd').hide();
    $('#emat').hide();
    $('#cashtg').hide();
     }
     else if ($(this).val() == 'Bitcoin') {
     $('#btcadd').show();
    $('#phonen').show(); 
    $('#ethadd').hide();
    $('#dgeadd').hide();
    $('#emat').hide();
    $('#cashtg').hide();
     }
     else if ($(this).val() == 'CashApp') {
    $('#btcadd').hide();
    $('#cashtg').show();
    $('#phonen').show(); 
    $('#ethadd').hide();
    $('#dgeadd').hide();
    $('#emat').hide();
    $('#cashtg').show();
     }
     else if ($(this).val() == 'PayPal') {
    $('#btcadd').hide();
    $('#emat').show();
    $('#phonen').show(); 
    $('#ethadd').hide();
    $('#dgeadd').hide();
    $('#cashtg').hide();
     }
     else if ($(this).val() == 'Bank Transfer') {
    $('#btcadd').hide();
    $('#emat').show();
    $('#phonen').show();
    $('#ethadd').hide();
    $('#dgeadd').hide();
    $('#cashtg').hide();
     }
       
   
     }); 
   
   
   });

