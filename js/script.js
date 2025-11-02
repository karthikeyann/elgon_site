$(function(){
	$('.box').hide();
	$('.bnr-icn a').click(function(){
		var value = $(this).data('cont');
		$('.box').html(value);
		$('.box').toggle();
	});
});