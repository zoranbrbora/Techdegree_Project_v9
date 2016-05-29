var  $notBtn = $('#notificationBtn'),
	 $alerts = $('#alerts'),
	 $alertLight = $('#alert-light'),
	 $message1 = $('#message1'),
	 $message2 = $('#message2'),
	 $offBtn1 = $('#offButton1'),
	 $offBtn2 = $('#offButton2');

$offBtn1.click("on" ,function(){
    $message1.hide(500);
    $alertLight.hide();
});

$offBtn2.click("on" ,function(){
    $message2.hide(500);
    $alertLight.hide();
});

$notBtn.click("on" ,function(){
    $alerts.toggle(500);
});