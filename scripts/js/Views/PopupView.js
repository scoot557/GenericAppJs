GenericApp.Views.PopupView = GenericApp.Views.BaseView.extend({
	tagName: 'div',
	className: "app-popup",
	events: {},
	templateSrc: 'scripts/js/Templates/popup',
	initializeCallback: function(){
		this.$el.hide();
		
	},
	show: function(options){
		var self = this,
			defaults = {
			title: "GenericApp Popup",
				content: 'No Message Specified',
				modal: false,
				buttons: {
					Ok: function(){
							self.$el.dialog('destroy');
						}
					}
				},
			opts = $.extend({}, defaults, options); 

		this.content = opts.content;
		this.render();
		this.$el.dialog({
				title: opts.title,
				modal: opts.modal,
				buttons: opts.buttons
			});
	},
	hide: function(){
		this.$el.dialog('destroy');
	}
});
