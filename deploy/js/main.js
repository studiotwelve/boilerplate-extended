$(document).ready(function(){

	var initHeight = $(".pushup").height();
	
	$("#content").css({ 'margin-top' : initHeight, });

	
		$(window).resize(function(){
		
			var dynHeight = $(".pushup").height();
			
			$("#content").css({ 'margin-top' : dynHeight, });
			
			return dynHeight;
			
		});		

});