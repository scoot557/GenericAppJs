(function($){
	var POE = function(options){
			var defaults = {
				DEBUG : false
			};
			this.config = $.extend({},defaults,options);
		}
		
	POE.prototype = {
		log: function(msg, level) {
			var lvl = (typeof level != 'undefined') ? level : 'log';
			if (this.config.DEBUG)
				try {
					console[lvl](msg);
				} 
				catch (e) {
					var htmlConsole = $('body').find('.poe-console');
					if (htmlConsole.length==0)
						htmlConsole = $('<div>')
										.addClass('poe-console')
										.appendTo($('body'));
					var newLogMsg = $('p').text(msg).addClass(lvl);
					htmlConsole.append(newLogMsg);
					}
					
			}
	}
		
	window.POEApp = new POE({DEBUG:true});
	POEApp.log('POE Damage Calculater booted.');
})(jQuery);
	
