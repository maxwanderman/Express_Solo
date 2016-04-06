$(function(){

$("#money").on('click', function(){
  $.ajax({
    url: '/balance',
    type: 'GET',
  }).done(function(response){
    console.log(response);
    var moneyBalance = response;
    $("body").append("<div>" + moneyBalance + "</div>");
    $("div").hide();
    $("div").slideDown(300);

});
});


});
