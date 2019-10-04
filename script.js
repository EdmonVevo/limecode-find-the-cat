
$(document).ready(function(){
   $(document).mousemove((e)=>{
   		const mouseX = e.pageX;
   		const mouseY = e.pageY;
   		$('.container').css('background','#fff');
   		$('.light').css(
   			'background',`radial-gradient(circle at ${mouseX}px ${mouseY}px,transparent,#000 15%`
		);	
   })
   $('.cat').mouseenter(()=>{
   		$('.cat').css('right','+1500px')
   })
});