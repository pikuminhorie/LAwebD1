$(function(){
  //まだあんまりわかってないところ
  //ここから
    var cursor=$("#cursor");
    

    $(document).on("mousemove",function(e){

      var x=e.clientX;
      var y=e.clientY;

      cursor.css({
        "opacity":"1",
        "top":y+"px",
        "left":x+"px"
      });
    });
    //ここまでのカーソル変更
    
    //ローディング画面
    $(window).on('load',function(){
      $("#loading").fadeOut('slow');
      $("#loading_word").fadeOut('slow');
    })

  });
