// Webapp

/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());


/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {

    if ($(window).scrollTop() > 300) {
        $('.main_nav').addClass('sticky');
    } else {
        $('.main_nav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.main_nav').removeClass('open-nav');
    } else {
        $('.main_nav').addClass('open-nav');
    }
});

$('.main_nav li a').click(function() {
    if ($('.main_nav').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_nav').removeClass('open-nav');
    }
});


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function($) {

	//for ontouch effect
	document.addEventListener("touchstart", function(){}, true);
	
	
	//for drug release
	$("#drugloading").hide();
	$("#ReleaseBtn").bind('click',function(e){
		
		
		
		
		if ($(".drugrelease").hasClass("connect")) {
		  
		} else {
			$(".drugrelease").addClass("connect");
		}

		$("#drugloading").show().delay(7000).fadeOut(1000);
		
		$("#drugloading p").text("Connect to your watch band...");
		
		
		setTimeout(function() {
        $("#drugloading p").text("Releasing");
			$(".drugrelease").removeClass("connect");
    }, 2500);
		
	});
	
	//Create New item click
	$("#createNewlistitem").bind('click',function(){
		$("#MedicationName").val("");
		$("#StartTime").val("");
		$("#select-medication").val("");
	});
	
	$("#createNewBtnitem").bind('click',function(){
		$("#MedicationName").val("");
		$("#StartTime").val("");
		$("#select-medication").val("");
	});
	
	//Create New Medication
	$("#CreateNewItem").bind('click',function(){
		
		var mname = $("#MedicationName").val();
		var start = $("#StartTime").val();
		
		var frequent = $("#select-medication").val();
		
		console.log(mname + " | " + start + " | " + frequent);
		
		$("#mediationnamevalue").text("");
		$("#mediationnamevalue").text(mname);
		
		
		$("#appendItemList").prepend('<div class="item editlist"><label>'+mname +'</label> <div class="mitem">Start from <span class="timer">'+ start+'</span></div><div class="mitem">'+frequent+'</div></div>')		
		
	});
	
   $('.smoothscroll').on('click',function (e) {
	   // e.preventDefault();

	    var target = this.hash,
	    $target = $(target);
	   
	   console.log(target);
/*
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
		*/
	   
	   
	   if ($(target).hasClass('fadeIn')) {
		  
    } else {
        $(target).addClass('animated');
		$(target).addClass('fadeIn');
    }
	   
	});
	
	
	$('.sel').each(function() {
  $(this).children('select').css('display', 'none');
  
  var $current = $(this);
  
  $(this).find('option').each(function(i) {
    if (i == 0) {
      $current.prepend($('<div>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box')
      }));
      
      var placeholder = $(this).text();
      $current.prepend($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
        text: placeholder,
        'data-placeholder': placeholder
      }));
      
      return;
    }
    
    $current.children('div').append($('<span>', {
      class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
      text: $(this).text()
    }));
  });
});

	
	
// Toggling the `.active` state on the `.sel`.
$('.sel').click(function() {
  $(this).toggleClass('active');
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function() {
  var txt = $(this).text();
  var index = $(this).index();
  
  $(this).siblings('.sel__box__options').removeClass('selected');
  $(this).addClass('selected');
  
  var $currentSel = $(this).closest('.sel');
  $currentSel.children('.sel__placeholder').text(txt);
  $currentSel.children('select').prop('selectedIndex', index + 1);
});
	
	
	
  
});


TweenMax.staggerFrom(".heading", 0.8, {opacity: 0, y: 20, delay: 0.2}, 0.4);
