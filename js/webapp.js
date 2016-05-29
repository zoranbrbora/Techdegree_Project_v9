var  $notBtn = $('#notificationBtn'),
	 $alerts = $('#alerts'),
	 $message1 = $('#message1'),
	 $message2 = $('#message2'),
	 $offBtn1 = $('#offButton1'),
	 $offBtn2 = $('#offButton2');

$offBtn1.click("on" ,function(){
    $message1.hide(500);
});

$offBtn2.click("on" ,function(){
    $message2.hide(500);
});

$notBtn.click("on" ,function(){
    $alerts.toggle(500);
});