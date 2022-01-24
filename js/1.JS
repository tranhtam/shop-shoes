
var iclendau = document.getElementById('iclendau')
console.log(iclendau.innerHTML);
iclendau.innerHTML = '<div class="btn btn-info">lên đầu trang</div>';


var datahangcon={};
var datahangcha={};
var i=0;
 



$('div.btn.btn-primary').click(function(){

    var hinh = $(this).closest('div.card-body').prev('div.carousel.slide').find('div.carousel-inner').find('div.carousel-item.active').find('img').attr('src');
    
    var ten = $(this).closest('div.card-body').find('h4').text();

    var gia = $(this).prev('p.card-text').text();

    var id = $(this).attr('id');

    var diachi = $(this).prev('p.card-text').prev('p.card-text').text();
    


    datahangcha = localStorage.getItem('datahangcha');
    if(datahangcha){
        datahangcon=JSON.parse(datahangcha);
        Object.keys(datahangcon).map(function(key,index){                
            if(datahangcon[key]['id']==id){
               i=1;
               datahangcon[key]["soluong"]++;
            }              
        })
    } 
    if(i==0){
    datahangcon[id]={
            'hinh': hinh,
            'ten': ten,
            'diachi': diachi,
            'gia': gia,
            'soluong': 1,
            'id': id
        }
    }
    localStorage.setItem('datahangcha',JSON.stringify(datahangcon));
    alert('mời bạn kiểm tra giỏ hàng')
    
})


