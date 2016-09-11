//注销登录
window.onload=lala;
function lala(){
  getNumber1();
  setInterval('getNumber()',15000);
}
function loginout(){
  $.ajax({
    type:'get',
    url:'logout.action',
    success:function(){
    	window.location.href='login.jsp';
    },
  });
}
  $(document).ready(function() {

    $('.carousel').carousel({
      interval: 3500
    });
});


function getNumber1(){
  $.ajaxSetup({ cache: false }); 
  $.ajax({
    type:'get',
    url:'sum.action',
    success:function(msg){
      var new_content = $('<span style="float:right;">现在已检测<span id="number" style="color:rgb(245,245,220);">'+msg+'</span>篇论文</span>').appendTo($('#subheader'));
    },
  });
}

function getNumber(){
  $.ajaxSetup({ cache: false }); 
  $.ajax({
    type:'get',
    url:'sum.action',
    success:function(msg){
      $('#number').html(msg);
    },
  });
}