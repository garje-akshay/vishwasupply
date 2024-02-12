/* Style Switcher */

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();

$(document).ready(function(){ 

	var styleswitcherstr = ' \
		<h3>Style Switcher <a href="#"><i class="icon-pencil"></i></a></h3> \
		<div class="content"> \
		<h5>Choose Layout Style</h5> \
		<div class="layout-switcher fixed"> \
		<a id="wide" class="layout">Wide</a> \
		<a id="boxed" class="layout">Boxed</a> \
		</div> \
		<h5>Choose Skin Color</h5> \
		<div class="switcher-box fixed"> \
		<a id="default" class="styleswitch color"></a> \
		<a id="blue" class="styleswitch color"></a> \
		<a id="green" class="styleswitch color"></a> \
		<a id="orange" class="styleswitch color"></a> \
		<a id="purple" class="styleswitch color"></a> \
		</div><!-- End switcher-box --> \
		<h5>Patterns for Boxed</h5>  \
		<div class="fixed"> \
		<a id="bg" class="pattern"></a> \
		<a id="bg2" class="pattern"></a> \
		<a id="bg3" class="pattern"></a> \
		<a id="bg4" class="pattern"></a> \
		<a id="bg5" class="pattern"></a> \
		<a id="bg6" class="pattern"></a> \
		<a id="bg7" class="pattern"></a> \
		<a id="bg8" class="pattern"></a> \
		<a id="bg9" class="pattern"></a> \
		<a id="bg10" class="pattern"></a> \
		<a id="bg11" class="pattern"></a> \
		<a id="bg12" class="pattern"></a> \
		<a id="bg13" class="pattern"></a> \
		<a id="bg14" class="pattern"></a> \
		<a id="bg15" class="pattern"></a> \
		<a id="bg16" class="pattern"></a> \
		<a id="bg17" class="pattern"></a> \
		<a id="bg18" class="pattern"></a> \
		<a id="bg19" class="pattern"></a> \
		<a id="bg20" class="pattern"></a> \
		</div> \
		</div><!-- End content --> \
		';
	
	$(".switcher").prepend( styleswitcherstr );

});

/* boxed & wide syle */
$(document).ready(function(){ 

	var cookieName = 'wide';
	function changeLayout(layout) {
		$.cookie(cookieName, layout);
		$('head link[name=layout]').attr('href', 'assets/css/' + layout + '.css');
	}

	if( $.cookie(cookieName)) {
		changeLayout($.cookie(cookieName));
	}

	$("#wide").click( function(){ $
		changeLayout('wide');
	});

	$("#boxed").click( function(){ $
		changeLayout('boxed');
	});

});


/* background images */
$(document).ready(function(){ 
  
	var startClass = $.cookie('mycookie');
	$("body").addClass("bg");


	$("#bg").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg');
		$.cookie('mycookie','bg');
	});
	
	$("#bg2").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg2');
		$.cookie('mycookie','bg2');
	});
	
	$("#bg3").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg3');
		$.cookie('mycookie','bg3');
	});
	
	$("#bg4").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg4');
		$.cookie('mycookie','bg4');
	});
	
	$("#bg5").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg5');
		$.cookie('mycookie','bg5');
	});
	
	$("#bg6").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg6');
		$.cookie('mycookie','bg6');
	});
	
	$("#bg7").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg7');
		$.cookie('mycookie','bg7');
	});
	
	$("#bg8").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg8');
		$.cookie('mycookie','bg8');
	});
	
	$("#bg9").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg9');
		$.cookie('mycookie','bg9');
	});
	
	$("#bg10").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg10');
		$.cookie('mycookie','bg10');
	});
	
	$("#bg11").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg11');
		$.cookie('mycookie','bg11');
	});
	
	$("#bg12").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg12');
		$.cookie('mycookie','bg12');
	});
	
	$("#bg13").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg13');
		$.cookie('mycookie','bg13');
	});
	
	$("#bg14").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg14');
		$.cookie('mycookie','bg14');
	});
	
	$("#bg15").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg15');
		$.cookie('mycookie','bg15');
	});
	
	$("#bg16").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg16');
		$.cookie('mycookie','bg16');
	});
	
	$("#bg17").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg17');
		$.cookie('mycookie','bg17');
	});
	
	$("#bg18").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg18');
		$.cookie('mycookie','bg18');
	});
	
	$("#bg19").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg19');
		$.cookie('mycookie','bg19');
	});
	
	$("#bg20").click( function(){ 
		$("body").removeClass();
		$("body").addClass('bg20');
		$.cookie('mycookie','bg20');
	});
	
	
	if ($.cookie('mycookie')) {
		$('body').addClass($.cookie('mycookie'));
	}

});

/* Skins Style */
$(document).ready(function(){ 

	var cookieName = 'skin';

	function changeLayout(layout) {
		$.cookie(cookieName, layout);
		$('head link[name=skins]').attr('href', 'assets/css/skins/' + layout + '.css');
	}

	if( $.cookie(cookieName)) {
		changeLayout($.cookie(cookieName));
	}

	$("#default").click( function(){ changeLayout('default'); });
	$("#blue").click( function(){ changeLayout('blue'); });
	$("#green").click( function(){ changeLayout('green'); });
	$("#orange").click( function(){ changeLayout('orange'); });
	$("#purple").click( function(){ changeLayout('purple'); });

});

/* Fonts 01 */
$(document).ready(function(){ 

	var cookieName = 'Droid+Sans';

	function changeLayout(layout) {
		$.cookie(cookieName, layout);
		$('head link[name=fonts]').attr('href', 'https://fonts.googleapis.com/css?family=' + layout);
	}

	if( $.cookie(cookieName)) {
		changeLayout($.cookie(cookieName));
	}

	$("#menu-style").change(function(){
		if( $(this).val() == 1){
			changeLayout('Droid+Sans');        
		} else{
			changeLayout('Droid+Serif');        
		}
	})

});


/* Reset Switcher */
$(document).ready(function(){ 

	// Style Switcher	
$('.switcher').animate({
		left: '-200px'
});

	$('.switcher h3 a').click(function(e){
		e.preventDefault();
		var div = $('.switcher');
		if (div.css('left') === '-200px') {
			$('.switcher').animate({
				left: '20px'
			}); 
		} else {
			$('.switcher').animate({
				left: '-200px'
			});
		}
	});
	
});						   

