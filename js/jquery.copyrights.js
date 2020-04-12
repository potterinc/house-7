(function($){
	
	$.fn.copyrights = function(){
		
		// to use this for variable selectors
		return this.each(function(){
			let d = new Date();
			return $(this).html(d.getFullYear());
		});
	};

}(jQuery));
