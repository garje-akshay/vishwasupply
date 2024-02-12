(function($){
	
	
	$(document).ready(function(){
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////						   
		
		// -------------------------------------------------------------------------------------------------------
		// Select Nav - converts your website navigation into a select drop-down menu | 
		// -------------------------------------------------------------------------------------------------------
		
		selectnav('dropdown-menu', {
			label: 'Menu',
			nested: true,
			indent: '-'
		});
		
		// -------------------------------------------------------------------------------------------------------
		// Imagebox - Responsive Lightbox |
		// -------------------------------------------------------------------------------------------------------
		
		imagebox.build();
		
		// -------------------------------------------------------------------------------------------------------
		// FlexSlider - responsive slider |
		// -------------------------------------------------------------------------------------------------------
		
		$('.flexslider').flexslider({
			animation: "fade",            //String: Select your animation type, "fade" or "slide"
			slideshow: true,              //Boolean: Animate slider automatically
			slideshowSpeed: 7000,         //Integer: Set the speed of the slideshow cycling, in milliseconds
			initDelay: 0,                 //Integer: Set an initialization delay, in milliseconds
			pauseOnAction: true,          //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
			pauseOnHover: false,          //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
			video: false,                 //Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
			// Primary Controls
			controlNav: true,            //Boolean: Create navigation for paging control of each clide?
			directionNav: false,           //Boolean: Create navigation for previous/next navigation? (true/false)
			prevText: "Previous",         //String: Set the text for the "previous" directionNav item
			nextText: "Next"              //String: Set the text for the "next" directionNav item
		});
		
		
		// -------------------------------------------------------------------------------------------------------
		// Revolution Slider
		// -------------------------------------------------------------------------------------------------------
		
		if ($('#revolutionslider').length){
			 
			$('.fullwidthbanner').revolution({
				delay:9000,
				startwidth:960,
				startheight:500,
				
				onHoverStop:"on",						// Stop Banner Timet at Hover on Slide on/off
				
				thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
				thumbHeight:50,
				thumbAmount:3,
				
				hideThumbs:0,
				navigationType:"none",					// bullet, thumb, none
				navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none
				
				navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
				
				
				navigationHAlign:"center",				// Vertical Align top,center,bottom
				navigationVAlign:"top",					// Horizontal Align left,center,right
				navigationHOffset:0,
				navigationVOffset:20,
				
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				
				touchenabled:"on",						// Enable Swipe Function : on/off
	
				stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. 
				stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic
				
				hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
				hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
				hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value
				
				
				fullWidth:"on",
				
				shadow:0								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)
			});
			
		}

		
		// -------------------------------------------------------------------------------------------------------
		// Dynamic Carousel - Responsive Carousel |
		// -------------------------------------------------------------------------------------------------------
		
		/*next / prev nav carousel */
		$('#carousel-slider1').carousel({
			slider: '.carousel-slider',
			slide:  '.carousel-slide',
			nextSlide : '.carousel-next',
			prevSlide : '.carousel-prev',
			addPagination: false,
			addNav : false
		});
		
		/* paged navigation carousel */
		$('#carousel-slider2').carousel({
			slider: '.carousel-slider',
			slide: '.carousel-slide',
			addNav: false,
			addPagination: true,
			speed: 300 // ms.
		});
		
		// -------------------------------------------------------------------------------------------------------
		//  Tabify - jQuery tabs plugin
		// -------------------------------------------------------------------------------------------------------
		
		$('#tab-1, #tab-2, #tab-3, #tab-4, #tab-5').tabify();
		
		// -------------------------------------------------------------------------------------------------------
		//  Accordeon - jQuery accordeon plugin
		// -------------------------------------------------------------------------------------------------------
		
		$('#accordion-1, #accordion-2, #accordion-3, #accordion-4, #accordion-5').accordion();

		// -------------------------------------------------------------------------------------------------------
		//  gMap
		// -------------------------------------------------------------------------------------------------------
		
		$('#google-map').gMap({
			maptype: 'ROADMAP',
			scrollwheel: false,
			zoom: 15,
			markers: [{
					address: "Central Park, New York, USA",
					icon: {image: "images/gmap-icon.png", 
						  iconsize: [79, 93],
                          iconanchor: [40, 100] },
					html: '',
					popup: false
				}
			]
		});

				  

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	});

})(window.jQuery);



			




