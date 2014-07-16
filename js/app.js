var $loading = $('.loading'),
	$preload = $('.preload'),
	$topBg = $('.top-bg'),
	$bottomBg = $('.bottom-bg'),
	$loadLine = $('.load-line'),
 	$line = $('.line'),
	index = 0;

function eleLoad(url,currentIndex){
	var img = new Image();
	
	img.onload = function(){
		index++;
		var lineWidth = (index/11)*100;
		// console.log(lineWidth);
		$line.animate({
			width:lineWidth+'%'
		}, 100,'linear',function(){
				if (lineWidth == 100) {
					nextAni();
				}
		});
	}
	img.src = url;
	// console.log(img.src);
	$preload.eq(currentIndex).append(img);
}
function nextAni(){
	$topBg.animate({
		top:'-50%'
	}, 800);
	$bottomBg.animate({ 
		bottom:'-50%'
	}, 800,'linear',function(){
		$loading.animate({
			opacity:0
		}, 200,'linear',function(){
			$loading.css('display', 'none');
		});
	});
	$loadLine.css('display', 'none');
}
$preload.each(function(currentIndex) {
	var self = $(this);
	var src = $(this).attr('jw-source');
	// self.append()
	eleLoad(src,currentIndex);
	// console.log(currentIndex);
});