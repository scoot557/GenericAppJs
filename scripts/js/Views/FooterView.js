GenericApp.Views.FooterView = GenericApp.Views.BaseView.extend({
	tagName: "footer",
	className: "app-footer",
	events: {},
	templateSrc: 'scripts/js/Templates/footer.hbs',
	footerColumns: [],
	initializeCallback: function(){
		var self = this;
		$.ajax({
			url:'scripts/js/Templates/footer.json',
			dataType:'json',
			cache:false,
			type:'get',
			success:function(footerColumns){
					self.footerColumns = footerColumns;
					self.render();
				}
		});
		
		
	
	}
});
