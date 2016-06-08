var  $notBtn = $('#notificationBtn'),
     $light = $('#alert-light'),

     $message1 = $('#message1'),
  	 $offBtn1 = $('#offButton1'),
     $message2 = $('#message2'),
     $offBtn2 = $('#offButton2'),
     $message3 = $('#message3'),
     $offBtn3 = $('#offButton3'),

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
  	 $cancel = $('.cancel'),
     $send = $('#send');

//DOCUMENT READY FUNCTION
$( document ).ready(function() {
    $weekly.addClass( "selected" );
});

//SHOW ADITIONAL TWO ALERTS
$notBtn.click("on", function() {
    $light.hide();
    $message2.show();
    $message3.show();
});

// ALERT CLOSE
$offBtn1.click("on" ,function(){
    $message1.slideUp(300);
});

$offBtn2.click("on" ,function(){
    $message2.slideUp(300);
});

$offBtn3.click("on" ,function(){
    $message3.slideUp(300);
});


$send.click(function () {
    if (document.getElementById("contact_name").value === "") {
        $(".user-member").text("Please Select User");
    } else {
        $(".user-member").text("User Selected");
    }
    if (document.getElementById("contact_message").value === "") {
        $(".warning-message").text("Please Enter Message");
    } else {
        $(".warning-message").text("Your Message is on the way!!!");
    } 
});




// MEMBERS AUTOCOMPLETE SEARCH
$( ".autocomplete" ).autocomplete({
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
});





