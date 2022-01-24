



$('form#in').submit(function(){
    
    var getin_mail = $('#in_mail').val();
    var getin_pass = $('#in_pass').val();
    var dem=1;
    var pass=1;
    var data = localStorage.getItem('datacha')
    if(data){
        data = JSON.parse(data);
        Object.keys(data).map(function(key,index){
            if(getin_mail != data[key]['mail']){
                $('p.enter_pass').text('mail hoac pass sai');
                dem=2;
            }else{
                $('p.enter_mail').text('');
                dem=1;
            }
            if(getin_pass != data[key]['pass']){
                $('p.enter_pass').text('mail hoac pass sai');
                pass=2;
            }else{
                $('p.enter_pass').text('');
                pass=1;
            }


        })
    }

    console.log(dem);
    console.log(pass);
    if(dem==1 && pass==1){
        return true;
    }
    return false;
})