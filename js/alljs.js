$(document).ready(function () {
    $('.collect').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('fas');
      });

//商品頁aside點選畫面//
      $('.aside-list li').click(function (e) { 
        e.preventDefault();

        $(this).addClass('active').siblings().removeClass('active');

    });

     $('.pagination li').click(function (e) { 
      e.preventDefault();

      $(this).addClass('active').siblings().removeClass('active');

    });

    //購物車刪除鍵//
    $('.close').click(function (e) { 
      e.preventDefault();

      $(this).parent().remove();

    });

    //漢堡選單出現
    $('.bars').click(function (e) { 
      e.preventDefault();
    $('body').toggleClass('open');
     });

     //漢堡選單aside 下拉效果
     $('.dropdown').click(function (e) { 
      e.preventDefault(); 
      $('.drop').slideToggle();
      $('.dropdown').toggleClass('active');
      
      
      });


    //點擊空白處關閉選單
    $(document).mouseup(function(e) {
    var _con = $('.nav-aside'); // 不希望被點到的 div
    if (!_con.is(e.target) && _con.has(e.target).length === 0 ) {
        $('body').removeClass('open'); // 功能代碼
    }
      });

 
      




 

    

        
      });

 





      
