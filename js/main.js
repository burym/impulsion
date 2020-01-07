

$(document).ready(function() {

		$('a[href="#"]').click(function(event) {
			event.preventDefault();
		});

	//--------------------------------------------------------------------------------------
		$(window).load(function(){


		}); // -- window.load
	//--------------------------------------------------------------------------------------
		$(window).scroll(function(){
			$('.popup').center();

		}); // -- window.scroll

	//--------------------------------------------------------------------------------------
		$(window).resize(function(){
       // $('.tmp-out').text( $(window).width() ); // remove on release
			$('.popup').center();

		}); // -- window.resize

	//--------------------------------------------------------------------------------------
    $('input:text').on('keypress', function(event)
      {
        if(event.which == 0) return true;
        var trg = event.target;
        var res = 0;

        if($(trg).hasClass('digit')) if(!in_array(event.which,[8, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57])) res++;
        if($(trg).hasClass('ceil')) if(!in_array(event.which,[8, 45, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57])) res++;
        if($(trg).hasClass('positive')) if(!in_array(event.which,[8, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57])) res++;
        if($(trg).hasClass('phone')) if(!in_array(event.which,[8, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 41, 40, 32, 45])) res++;

        if(res > 0) {event.keyCode = 0; return false;}
      }
    );

	//--------------------------------------------------------------------------------------
	if( $('.bgtile').length ) {

		var swapBg = setInterval(function() {
		  if( $('.bg1').css('opacity') == 1 ) {

				  $('.bg2').animate({
				    opacity: 1,
				  }, 2000, function() {
				    $('.bg1').animate({
				    	opacity: 0,
				    }, 2000)
				  });

		  } else {

				  $('.bg1').animate({
				    opacity: 1,
				  }, 2000, function() {
				    $('.bg2').animate({
				    	opacity: 0,
				    }, 2000)
				  });

		  }

		}, 10000);


	}
	//--------------------------------------------------------------------------------------
  if( $('#map').length ) {

        function mapInit() {
          var mapOptions = {
            zoom: 10,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            streetViewControl: false,
            center: new google.maps.LatLng(44.535797,4.249992)
          }
          var map = new google.maps.Map(document.getElementById('map'),
                                        mapOptions);

          //var image = 'images/beachflag.png';
          var myLatLng = new google.maps.LatLng(44.535797,4.249992);
          var beachMarker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              //icon: image
          });
        }

//        google.maps.event.addDomListener(window, 'load', mapInit);
  }
	//--------------------------------------------------------------------------------------


   if($(".front-slider").length) {
      var frontSlider1 = $(".front-sl1").sudoSlider(
        {
        customLink:'a.slarr1',
        responsive: false,
        prevNext: false,
        numeric: false,
        continuous: true,
        controlsShow: false,
        slideCount: 1,
        auto: false,
        effect: 'slide',
        speed: 800,
        pause: 6000
        }
      );

      var frontSlider2 = $(".front-sl2").sudoSlider(
        {
        customLink:'a.slarr2',
        responsive: false,
        prevNext: false,
        numeric: false,
        continuous: true,
        controlsShow: false,
        slideCount: 1,
        auto: false,
        effect: 'slide',
        speed: 800,
        pause: 6000
        }
      );
   }
	//--------------------------------------------------------------------------------------

   if( $('.know-scroll').length ) {

      var knowSlider1 = $(".know-scroll").sudoSlider(
        {
        customLink:'a.know-control',
        responsive: false,
        prevNext: false,
        numeric: false,
        continuous: true,
        controlsShow: false,
        slideCount: 1,
        auto: false,
        effect: 'slide',
        vertical: true,
        speed: 800,
        pause: 6000
        }
      );

      var knowSlider2 = $(".know-bg").sudoSlider(
        {
        customLink:'a.know-control',
        responsive: false,
        prevNext: false,
        numeric: false,
        continuous: true,
        controlsShow: false,
        slideCount: 1,
        auto: false,
        effect: 'slide',
        vertical: true,
        speed: 800,
        pause: 6000
        }
      );

      var getArr = parseGetParams();
      if( array_key_exists('page', getArr) ) {
        var startFrame = parseInt( getArr['page'] );
          knowSlider1.goToSlide( startFrame );
          knowSlider2.goToSlide( startFrame );
      }

   }
	//--------------------------------------------------------------------------------------

   var bottCnt = $('.wine-bottle');
   if( $(bottCnt).length ) {
      $('.control-wrap').css('visibility', 'hidden');
      $(bottCnt).each(function(index) {
        var liCnt = $(this).children('ul').children('li').length;
        if(liCnt >= 4 ) {
          var scrClass = 'bottscrol'+index;
          var botSlide = 'bottSlider'+index;
          var scrButtn = '<a href="#" title="" class="winescrl-lft '+scrClass+'" rel="next">&larr;</a><a href="#" title="" class="winescrl-rgt '+scrClass+'" rel="prev">&rarr;</a>';
          $(this).children('.control-wrap').html(scrButtn).css('visibility', 'visible');
          $(this).addClass('bottslide'+index);

            var botSlide = $('.bottslide'+index).sudoSlider(
              {
              customLink:'a.'+scrClass,
              responsive: false,
              prevNext: false,
              numeric: false,
              continuous: true,
              controlsShow: false,
              slideCount: 3,
              auto: false,
              effect: 'slide',
              vertical: false,
              speed: 800,
              pause: 6000
              }
            );
        }
      });

      $('.wine-bottle ul li a').click(function(){
          var showId = $(this).data('id');

          var popupContent = $.ajax({
                url: "_popup_"+showId+".html",
                global: false,
                type: "GET",
                dataType: "html",
                success: function(msg){
                  $('.wine-box').html(msg);
                }
             }
          ).responseText;


          $('#dlgOverlap').show();
          $('.wine-box').show().center();

          return false;
      });

      $('.pop-link').live('click', function(){
          var showId = $(this).data('id');

          var popupContent = $.ajax({
                url: "_popup_"+showId+".html",
                global: false,
                type: "GET",
                dataType: "html",
                success: function(msg){
                  $('.wine-box').html(msg);
                }
             }
          ).responseText;
          return false;
      });

      $('.switch-frame').live('click', function(){
          var frNum = $(this).data('frame');
          $('.switch-frame').removeClass('active');
          $(this).addClass('active');
          if( frNum == 1 ) {
            $('.subinfo2').fadeOut(200, function() {
               $('.subinfo1').fadeIn(200);
            });
          } else {
            $('.subinfo1').fadeOut(200, function() {
               $('.subinfo2').fadeIn(200);
            });
          }
      });

   } //--- if .wine-bottle is present



  $('.pop-close, #dlgOverlap').live('click', function(){
    $('.popup').hide();
    $('#dlgOverlap').hide();
    return false;
  });


	// Тайлы
	if ($('.tile').length) {
		var tileItemOrient = new function() {
			$('.tile-item-img a').each(function() {
				var itemImgWidth = $(this).attr('data-width');
				var itemImgHeight = $(this).attr('data-height');
				var itemImgOrient = itemImgWidth / itemImgHeight;
				if (itemImgOrient > 1.5) {
					$(this).parents('.tile-item').addClass('hor');
				} else if (itemImgOrient <= 0.75) {
					$(this).parents('.tile-item').addClass('ver');
				} else {
               $(this).parents('.tile-item').addClass('double');
				}
			});
		}

		var tile = new Masonry('.tile', {
			columnWidth: 193, // $('.tile-sizer').width(),
			itemSelector: '.tile-item',
			transitionDuration: 0
		});

		/* for wide version
		if ($('.main-tile').length) {
			var tilePages = new Sly('.main-tile', {
				horizontal: 1,
				mouseDragging: 1,
				touchDragging: 1,
				elasticBounds: 1,
				speed: 200
			}).init();
      tilePages.reload();
		}
		*/

    $('.colorbox').colorbox({slideshow: true, loop:true, preloading:true, maxWidth:'95%', maxHeight:'95%', scrolling:false, slideshowSpeed:5000, rel:'slide'});
	}



}); // --- document.ready

//----------------------------------------------------------------------------------------
function parseGetParams() {
   var $_GET = {};
   var __GET = window.location.search.substring(1).split("&");
   for(var i=0; i<__GET.length; i++) {
      var getVar = __GET[i].split("=");
      $_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1];
   }
   return $_GET;
}
//----------------------------------------------------------------------------------------
function array_key_exists ( key, search ) {
   if( !search || (search.constructor !== Array && search.constructor !== Object) ){
       return false;
   }
   return search[key] !== undefined;
}
//----------------------------------------------------------------------------------------
function in_array(what, where) {
    for(var i=0; i<where.length; i++)
        if(what == where[i])
            return true;
    return false;
}
//----------------------------------------------------------------------------------------
 function getClientWidth() {
     //return ((document.compatMode=='CSS1Compat') && !(window.opera)) ? document.documentElement.clientWidth : document.body.clientWidth;
     return document.documentElement.clientWidth;
 }
//----------------------------------------------------------------------------------------
 function getClientHeight() {
    //return ((document.compatMode=='CSS1Compat') && (!window.opera)) ? document.documentElement.clientHeight : document.body.clientHeight;
    return document.documentElement.clientHeight;

}
//----------------------------------------------------------------------------------------

  jQuery.fn.center = function() {
     var w = $(window);
     var scrTop;
     this.css("position","absolute");
     scrTop = document.documentElement.scrollTop;
	  if (scrTop == 0) scrTop = $("html").scrollTop() || $("body").scrollTop();
     this.css("top", scrTop + ((getClientHeight()-this.height())/2) + "px");
     this.css("left",document.documentElement.scrollLeft + ((getClientWidth()-this.width())/2) + "px");
     if( ((getClientHeight()-this.height())/2) < 0 ) this.css("top", "10px");
     return this;
 }


/*
 jQuery.fn.center = function() {
     var w = $(window);
     this.css("position","absolute");
     this.css("top", document.documentElement.scrollTop + ((getClientHeight()-this.height())/2) + "px");
     this.css("left",document.documentElement.scrollLeft + ((getClientWidth()-this.width())/2) + "px");
     if( ((getClientHeight()-this.height())/2) < 0 ) this.css("top", "10px");
     return this;
 }

*/









