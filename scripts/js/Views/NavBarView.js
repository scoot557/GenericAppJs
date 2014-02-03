GenericApp.Views.NavBarView = GenericApp.Views.BaseView.extend({
	tagName: "header",
	className: "app-header",
	events: {},
	templateSrc: 'scripts/js/Templates/navbar.hbs',
	headerOptions: {},
	initializeCallback: function(){
		var self = this;
		$.ajax({
			url:'scripts/js/Templates/navbar_menu.json',
			dataType:'json',
			cache:false,
			type:'get',
			success:function(headerOpts){
					self.headerOptions = $.extend({},headerOpts);
					self.render();
				}
		});
		
	
	}
});
