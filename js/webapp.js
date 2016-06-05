var  $message1 = $('#message1'),
	 $offBtn1 = $('#offButton1');


// ALERT CLOSE
$offBtn1.click("on" ,function(){
    $message1.slideUp(500);
});


// SENDING MESSAGE
$("form").click(function(){
    $(".nav li").removeAttr('id');
   	$(this).attr('id');
});

$("#send").click(function(){
 	if (!$(".user-message").val()) {
   		$(".warning-message").text("Please enter a message").show();
	} else {
		$(".warning-message").text("Your Message is on the way!");
	}
});

// MEMBERS AUTOCOMPLETE SEARCH
$( "#autocomplete" ).autocomplete({
  source: [ "Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver" ]
});


