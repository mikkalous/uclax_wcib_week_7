jQuery(function() {

	let my_switch = false;

	$('#my_button').click(function () {

		if ( my_switch == false ) {
			my_switch = true;

		$(this).html('Will it bloom?')
						.removeClass('btn-secondary')
						  .addClass('btn-success');

		$("#my_name, #my_text")
						.removeClass("sprout")
						 .addClass("bloom");

		$('#my_flower').attr('src', 'images/before.png');

	} else {
		my_switch = false;

		$(this).html('Yes it will!')
						.removeClass('btn-success')
							.addClass('btn-secondary');

		$("#my_name, #my_text")
						.removeClass("bloom")
		 				 	.addClass("sprout");

		$('#my_flower').attr('src', 'images/after.png');

	}

	});

});
