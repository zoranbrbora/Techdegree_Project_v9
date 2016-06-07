var  $message1 = $('#message1'),
	 $offBtn1 = $('#offButton1'),

	 $weekly = $('#weekly'),
	 $hourly = $('#hourly'),
	 $daily = $('#daily'),
	 $monthly = $('#monthly'),

	 $weeklyChart = $('#lineChart-weekly'),
	 $hourlyChart = $('#lineChart-hourly'),
	 $dailyChart = $('#lineChart-daily'),
	 $monthlyChart = $('#lineChart-monthly'),

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

$( document ).ready(function() {
    $weekly.addClass( "selected" );
});


//ADDED FUNCIONALLITY TO LINE CHART NAVIGATION
$hourly.click("on" ,function(){
    $weekly.removeClass( "selected" );
    $daily.removeClass( "selected" );
    $monthly.removeClass( "selected" );
    $hourly.addClass( "selected" );
});

$daily.click("on" ,function(){
    $weekly.removeClass( "selected" );
    $hourly.removeClass( "selected" );
    $monthly.removeClass( "selected" );
    $daily.addClass( "selected" );
});

$weekly.click("on" ,function(){
    $hourly.removeClass( "selected" );
    $daily.removeClass( "selected" );
    $monthly.removeClass( "selected" );
    $weekly.addClass( "selected" );
});

$monthly.click("on" ,function(){
    $weekly.removeClass( "selected" );
    $hourly.removeClass( "selected" );
    $daily.removeClass( "selected" );
    $monthly.addClass( "selected" );
});



//CHANGING LINE CHARTS ON CLICK
$hourly.click("on" ,function(){
   $hourlyChart.show();
   $dailyChart.hide();
   $weeklyChart.hide();
   $monthlyChart.hide();
});

$daily.click("on" ,function(){
   $hourlyChart.hide();
   $dailyChart.show();
   $weeklyChart.hide();
   $monthlyChart.hide();
});

$weekly.click("on" ,function(){
   $hourlyChart.hide();
   $dailyChart.hide();
   $weeklyChart.show();
   $monthlyChart.hide();
});

$monthly.click("on" ,function(){
   $hourlyChart.hide();
   $dailyChart.hide();
   $weeklyChart.hide();
   $monthlyChart.show();
})


