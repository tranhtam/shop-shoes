
var data={};
var dem = 1;
var datacha={};


 $('form#up').submit(function(){

    var check_mail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var getup_mail = $('#up_mail').val();
    var getup_pass = $('#up_pass').val();
    var getup_pass_confirm = $('#up_pass_confirm').val();
    
    var mail1=1;
    var pass1=1;
    var  pass2=1
    var pass3=1
    var tich=1
    if(getup_mail=='Email'){
              
        $('p.mail_error').text('moi nhap mail');
        mail1=2
    }else if(!check_mail.test(getup_mail)){
     
        $('p.mail_error').text('mail khong hop le');
        mail1=2
    } else {
        $('p.mail_error').text('');
        mail1=1
    }
    if(getup_pass==''){
        
        $('p.pass_error').text('moi nhap pass');
        pass1=2
    }else{
        $('p.pass_error').text('');
        pass1=1
    }
    if(getup_pass_confirm==''){
        
        pass2=2
        $('p.confirm_error').text('moi nhap lai pass');
    }else{
        $('p.confirm_error').text('');
        pass2=1
    }

    if(getup_pass_confirm != getup_pass){
        pass3=2
        $('p.confirm_error').text('pass khong trung khop');
    }else{
        $('p.confirm_error').text('');
        pass3=1
    }

    if($('input.check').is(':checked')) {       
        $('p#agree').text("");
        tich=1
    } else {
        $('p#agree').text("tich dong y");     
        tich=2
    }

    datacha=localStorage.getItem('datacha');
    if(datacha){
        data=JSON.parse(datacha);
        
    }
    
    Object.keys(data).map(function(key,index){
        if(getup_mail==data[key]['mail']){
            dem=2;
            $('p.mail_error').text('nhap mail bi trung');
            
        }else{
            dem=1;
        }
    })

    if(dem==1 && mail1==1 && pass1==1 && pass2==1 && pass3==1 && tich==1){
        $('p#success').text("You have successfully registered");
        data[getup_mail]={
            'mail': getup_mail,
            'pass': getup_pass
        }
        localStorage.setItem('datacha',JSON.stringify(data));
        return true;
    }else{
        $('p#success').text("");
    }

    
     return false;
 })