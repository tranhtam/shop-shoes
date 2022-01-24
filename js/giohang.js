var datahangcha = localStorage.getItem('datahangcha');
console.log("datahangcha: ", datahangcha)
if(datahangcha){
    datahangcha=JSON.parse(datahangcha);
}
var tonggia=0;



var html ='';
 Object.keys(datahangcha).map(function(key,index){
     console.log("key", key, datahangcha)
    var b = datahangcha[key]['gia'];
    var ret = b.replace('price: $','');
    var tong =  parseInt(ret) * parseInt(datahangcha[key]['soluong']);
    console.log("tong: ", tong)
    tonggia = tong + tonggia;
    // html += `
    //     <tr class="trhtm">
    //     <td class="cart_product"><a href=""><img src=${datahangcha[key]['hinh']} class="hinh"></a></td>
    //     <td class="cart_description">
    //         <h4><a href="">${datahangcha[key]['ten']}</a></h4>
    //         <p>${datahangcha[key]['diachi']}</p>
    //         <p class="id">ID:${datahangcha[key]['id']}</p>
    //     </td>
    //     <td class="cart_price">
    //         <p>${datahangcha[key]['gia']}</p>
    //     </td>
    //     <td class="cart_quantity">
    //         <div class="cart_quantity_button"><a class="cart_quantity_up"> + </a><input class="cart_quantity_input"
    //                 type="text" name="quantity" value=${datahangcha[key]['soluong']} autocomplete="off" size="2"><a class="cart_quantity_down"> -
    //                 .</a></div>
    //     </td>
    //     <td class="cart_total">
    //         <p class="cart_total_price">${tong}</p>
    //     </td>
    //     <td class="cart_delete"><a class="cart_quantity_delete"><i class="fa fa-times"></i></a> </td>
    // </tr>`
    // tonggia += tong;
    html += "<tr class='trhtm'>"+
    "<td class='cart_product'>"+
    "<a href=''><img src = '" +datahangcha[key]['hinh']+"' class='hinh'></a>"+
    '</td>'+
   ' <td class="cart_description">'+
        '<h4>'+'<a href="">'+datahangcha[key]['ten']+'</a>'+'</h4>'+
        '<p>'+datahangcha[key]['diachi']+'  id:'+'</p>'+
        '<p class="id">'+datahangcha[key]['id']+'</p>'+
    '</td>'+
    '<td class="cart_price">'+
        '<p>'+datahangcha[key]['gia']+'</p>'+
    '</td>'+
    '<td class="cart_quantity">'+
        '<div class="cart_quantity_button">'+
            '<a class="cart_quantity_up"> + </a>'+
            '<input class="cart_quantity_input" type="text" name="quantity" value="'+datahangcha[key]['soluong']+'" autocomplete="off" size="2">'+
            '<a class="cart_quantity_down"> - </a>'+
        '</div>'+
   ' </td>'+
    '<td class="cart_total">'+
        '<p class="cart_total_price">'+ '$'+tong+ '</p>'+
   ' </td>'+
    '<td class="cart_delete">'+
        '<a class="cart_quantity_delete"><i class="fa fa-times"></i></a>'+
   ' </td>'+
   ' </tr>'
 })

 $('tbody#bang').append(html);
 $('span#tonggia').text('Tổng tiền: $'+tonggia);

$('a.cart_quantity_up').click(function(){
    var tongg=0;
    var id = $(this).closest('td.cart_quantity').closest('tr').find('td.cart_description').find('p.id').text();
    var sl = $(this).next('input.cart_quantity_input').val();
    $(this).next('input.cart_quantity_input').val(parseInt(sl)+parseInt(1));
    var soluong = parseInt(sl)+parseInt(1);
    var b = $(this).closest('td.cart_quantity').prev('td.cart_price').find('p').text();
    var gia = b.replace('price: $','');
    var tong = parseInt(soluong) * parseInt(gia);
    $(this).closest('td.cart_quantity').next('td.cart_total').find('p.cart_total_price').text('$'+tong);

    datahangcha[id]['soluong'] = soluong;
    localStorage.setItem('datahangcha',JSON.stringify(datahangcha));

    var tt = $('span#tonggia').text();
    var t = tt.replace('Tổng tiền: $','');
    tongg= parseInt(t) + parseInt(gia);

    $('span#tonggia').text('Tổng tiền: $'+tongg);

})

$('a.cart_quantity_down').click(function(){
    var tongg=0;
    var id = $(this).closest('td.cart_quantity').closest('tr').find('td.cart_description').find('p.id').text();
    var sl = $(this).prev('input.cart_quantity_input').val();
    if(sl === 1) return;
    if(sl>1){
        $(this).prev('input.cart_quantity_input').val(parseInt(sl)-parseInt(1));
        var soluong = parseInt(sl)-parseInt(1);
        var b = $(this).closest('td.cart_quantity').prev('td.cart_price').find('p').text();
        var gia = b.replace('price: $','');
        var tong = parseInt(soluong) * parseInt(gia);
        $(this).closest('td.cart_quantity').next('td.cart_total').find('p.cart_total_price').text("$"+tong);

        datahangcha[id]['soluong'] = soluong;
        localStorage.setItem('datahangcha',JSON.stringify(datahangcha));
       
        var tt = $('span#tonggia').text();
        var t = tt.replace('Tổng tiền: $','');
        tongg= parseInt(t) - parseInt(gia);
    
        $('span#tonggia').text('Tổng tiền: $'+tongg);
    }
})

$('a.cart_quantity_delete').click(function(){

    var id = $(this).closest('td.cart_delete').closest('tr.trhtm').find('td.cart_description').find('p.id').text();
    $(this).closest('td.cart_delete').closest('tr.trhtm').remove();
    console.log(id);
    delete datahangcha[id];
    localStorage.setItem('datahangcha',JSON.stringify(datahangcha));
   
})
$('.btn-buy').click(function(){
    alert('Mua thành công')
})


