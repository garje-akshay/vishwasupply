(function($){
	
	
	// -------------------------------------------------------------------------------------------------------
	// Form Validation script - used by the Contact Form script
	// -------------------------------------------------------------------------------------------------------
	
	function validateMyAjaxInputs() {
		
		$.validity.start();
		// Validator methods go here:
		$("#name")
			.require()
			.assert(
				( $("#name").val() != 'Your name' ), 
				"Your Name is required."
		  	 );

		$("#email")
			.require()
			.assert(
				( $("#email").val() != 'Your e-mail address' ), 
				"Email is required."
		   )
			.match("email");
			
		$("#subject")
			.require()
			.assert(
				( $("#subject").val() != 'Subject' ), 
				"Subject is required."
		   );
			
		$("#message").require();	

		// End the validation session:
		var result = $.validity.end();
		return result.valid;
	}
	
	// -------------------------------------------------------------------------------------------------------
	// ClearForm 
	// -------------------------------------------------------------------------------------------------------
	
	$.fn.clearForm = function() {
		return this.each(function() {
		var type = this.type, tag = this.tagName.toLowerCase();
		if (tag == 'form')
		return $(':input',this).clearForm();
		if (type == 'text' || type == 'password' || tag == 'textarea')
		this.value = '';
		else if (type == 'checkbox' || type == 'radio')
		this.checked = false;
		else if (tag == 'select')
		this.selectedIndex = -1;
		});
	};
	

	$(document).ready(function(){
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////						   
		
		// -------------------------------------------------------------------------------------------------------
		// Contact Form 
		// -------------------------------------------------------------------------------------------------------
		
		$("#contact-form").submit(function () {
								
			if (validateMyAjaxInputs()) { //  procced only if form has been validated ok with validity
				var str = $(this).serialize();
				$.ajax({
					type: "POST",
					url: "",
					data: str,
					success: function (msg) {
						$(document).ajaxComplete(function (event, request, settings) {
							if (msg == 'OK') { // Message Sent? Show the 'Thank You' message
								result = '<div class="alert alert-success">Your message has been sent. Thank you!</div>';
								$('#contact-form').clearForm();
							} else {
								result = msg;
							}
							$("#formstatus").html(result);
						});
					}
		
				});
				return false;
			}
		});


		
		// -------------------------------------------------------------------------------------------------------
		// Dropdown Menu
		// -------------------------------------------------------------------------------------------------------
		
		$("ul#dropdown-menu li").hover(function () {							 
			$(this).addClass("hover");
			$('ul:first', this).css({visibility: "visible",display: "none"}).slideDown(200);
		}, function () {
			$(this).removeClass("hover");
			$('ul:first', this).css({visibility: "hidden"});
		});

		// -------------------------------------------------------------------------------------------------------
		// Portfolio Hover
		// -------------------------------------------------------------------------------------------------------

		$('.portfolio-item').hover(function () {							 
			$(this).addClass("hover");
			$('.portfolio-item-overlay', this).css({display: "block"}).slideDown(200);
		}, function () {
			$(this).removeClass("hover");
			$('.portfolio-item-overlay', this).css({display: "none"});
		});
		
		
		// -------------------------------------------------------------------------------------------------------
		// Make service overviews clickable
		// -------------------------------------------------------------------------------------------------------
		
		$(".services-overview").click(function(){
			 window.location=$(this).find("a").attr("href");
			 return false;
		});


		// -------------------------------------------------------------------------------------------------------
		// Med Items
		// -------------------------------------------------------------------------------------------------------
		
		$(".med-item").hover(function () {
		var item = $(this).find(".number").attr("id");
		$(this).find(".med-tooltip").fadeIn("fast").addClass("show");
		$(this).find(".number").addClass("num" + item + "h");
		$(this).find(".med-tooltip").addClass("med-tooltip-bottom" + item)
	}, function () {
		$(this).find(".med-tooltip").fadeOut("fast");
		var item2 = $(this).find(".number").attr("id");
		$(this).find(".number").removeClass("num" + item2 + "h");
		$(this).find(".med-tooltip").removeClass("med-tooltip-bottom" + item2)
	});
	
		// -------------------------------------------------------------------------------------------------------
		// Accordion
		// -------------------------------------------------------------------------------------------------------
	
	$('#accordion').accordion();
	
	// -------------------------------------------------------------------------------------------------------
	// Tabify
	// -------------------------------------------------------------------------------------------------------
		
	$('#menu').tabify();
     
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	});
	
	/*----------------------------------------------------*/
/*	Scroll To Top Section
/*----------------------------------------------------*/
	jQuery(document).ready(function () {
	
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('.scrollup').fadeIn();
			} else {
				jQuery('.scrollup').fadeOut();
			}
		});
	
		jQuery('.scrollup').click(function () {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 700);
			return false;
		});
	
	});
	
})(window.jQuery);	

// non jQuery scripts below