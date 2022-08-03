$(document).ready(function(){
	var winW = $(window).width();
	function tabOn() {
		$('.tabBtn > li > a').on('click', function(){
			var tabIndex = $(this).parent().index()

			//$('.fp-scroller').css({'transform': 'translate(0px, 0px) translateZ(0px)'}).scrollTop(0) //2022-04-14

			$(this).parent().addClass('active').siblings().removeClass('active').parents('.tabBtn').next('.tabCnt').children().eq(tabIndex).show().siblings().hide()

			if(tabIndex == 0){$(this).parents('#parallax').removeClass('bg04').addClass('bg01')}
			else if(tabIndex == 3){$(this).parents('#parallax').removeClass('bg01').addClass('bg04')}
			else {$(this).parents('#parallax').removeClass('bg01');
				$(this).parents('#parallax').removeClass('bg04');}

			console.log(tabIndex)
		})
	} tabOn();


	

	function groupImg() {
		if(winW < 1200) {$('.group > img').attr('src', './inc/img/img_mogroup.jpg')}
		else {$('.group > img').attr('src', './inc/img/img_group.jpg')}
	} groupImg();

	$('.m_button').on('click', function(){
		if($('.m_button').hasClass('on')){
			$('.m_button').removeClass('on');
			$('#fp-nav').stop().slideUp();
		}
		else {
			$('.m_button').addClass('on');
			$('#fp-nav').stop().slideDown();
			/* $('#fp-nav').stop().animate({'height': $('#fp-nav.fp-right ul li').innerHeight() * 4}).slideDown(); */
			$('#fp-nav').stop().slideDown(), function () {
				$('#fp-nav').css({'height': $('#fp-nav.fp-right ul li').innerHeight() * 5}).show();
			}
		}
		return false;
	})

	
	$(window).on("resize", function () {
		var reWin = $(window).width();
		

		function groupImg() {
			if(reWin < 1159) {$('.group > img').attr('src', './inc/img/img_mogroup.jpg')}
			else {$('.group > img').attr('src', './inc/img/img_group.jpg')
			}
		} groupImg();

		if($('body').hasClass('fp-viewing-2')){$('#fp-nav.fp-right > ul > li:nth-child(2) > a').addClass('active')}
			
		if(reWin >= 1159) {
				$('#fp-nav').css({'display':'block',  'padding-top': '0', 'minHeight': 'auto'}) 

				$('#fp-nav a').on('click', function(){
					$(this).parents('#fp-nav').stop().slideDown()	

				})
		}else {
			$('#fp-nav').hide();	 
			$('.m_button').removeClass('on');
			

			$('#fp-nav a, #fp-nav a + div').on('click', function(){
				$(this).parents('#fp-nav').stop().slideUp();
				$('.m_button').removeClass('on');

			})
		} 
	}); $(window).trigger("resize");

	
});


$(function() {
  var count0 = count1 = count2 = 0;

  timeCounter();

  function timeCounter() {

    id0 = setInterval(count0Fn, 17);

    function count0Fn() {
      count0++;
      if (count0 > 30) {
        clearInterval(id0);
      } else {
        $(".main_list > li").eq(0).children('strong').text(count0);
      }

    }

    id1 = setInterval(count1Fn, 10);

    function count1Fn() {
      count1++;
      if (count1 > 50) {
        clearInterval(id1);
      } else {
        $(".main_list > li").eq(1).children('strong').text(count1);
      }
    }

    id2 = setInterval(count2Fn, 1);

    function count2Fn() {
      count2++;
      if (count2 > 100) {
        clearInterval(id2);
      } else {
        $(".main_list > li").eq(2).children('strong').text(count2);
      }
    }
  }
});




