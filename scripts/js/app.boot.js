baseApp = function(options){
	var defaults = {
		DEBUG : false
	};
	this.config = $.extend({},defaults,options);
	this.Views = {};
	this.Router = {};
	

}
baseApp.prototype = {
	log: function(msg, level) {
		var lvl = (typeof level != 'undefined') ? level : 'log';
		if (this.config.DEBUG)
			try {
				console[lvl](msg);
			} 
			catch (e) {
				var htmlConsole = $('body').find('.console');
				if (htmlConsole.length==0)
					htmlConsole = $('<div>')
									.addClass('console')
									.appendTo($('body'));
				var newLogMsg = $('<p>').text(msg).addClass(lvl).appendTo(htmlConsole);
				}
				
		}
}

GenericApp = new baseApp({DEBUG:false});

$(document).ready(function(){
	GenericApp.router = new GenericApp.Router();
	Backbone.history.start();
	GenericApp.router.navigate('home');
});
