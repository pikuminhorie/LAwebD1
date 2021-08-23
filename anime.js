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
    

    
    //ローディング画面案1
    // $(window).on('load',function(){
    //   $("#loading").fadeOut('slow');
    //   $("#loading_word").fadeOut('slow');
    // })

    //ローディング画面案2
    $(window).on('load',function(){
      $("#loading").slideUp('slow');
      $("#loading2").delay(100).slideUp('slow');
      $("#loading3").delay(200).slideUp('slow');
    })

  });
