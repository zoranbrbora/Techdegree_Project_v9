var  $message1 = $('#message1'),
	 $offBtn1 = $('#offButton1'),
	 $onoffswitch1 = $('#myonoffswitch'),
	 $onoffswitch2 = $('#myonoffswitch2'),
	 $timezone = $('.timezone'),
	 $save = $('.save'),
	 $cancel = $('.cancel');


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



// SETTING LOCAL STORAGE
function loadSettings() {
	if (localStorage.email == "unchecked") {
    	$onoffswitch1.prop('checked', false);
	}	
	if (localStorage.profile == "unchecked") {
    	$onoffswitch2.prop('checked', false);
	}
    	$timezone.val(localStorage.timezone);
	}


function saveSettings() {
	if ($onoffswitch1.is(":checked")) {
		localStorage.email = "checked";
	} else {
		localStorage.email = "unchecked";
	}

	if ($onoffswitch2.is(":checked")) {
		localStorage.profile = "checked";
	} else {
		localStorage.profile = "unchecked";
	}
    	localStorage.timezone = $timezone.val();
}    

$save.click( function() { 
	saveSettings();
});

$cancel.click( function() {
	localStorage.timezone = 0;
	localStorage.profile = "checked";
	localStorage.email = "checked";
});

loadSettings();

