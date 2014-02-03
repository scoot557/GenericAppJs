GenericApp.Router = Backbone.Router.extend({
	initialize: function(){
		this.templateBaseDir = 'scripts/js/Templates';
		this.navBarView = new GenericApp.Views.NavBarView();
		this.contentView = new GenericApp.Views.ContentView();
		this.footerView = new GenericApp.Views.FooterView();
		this.popupView = new GenericApp.Views.PopupView();
		this.renderedViews = {};
		GenericApp.log('attaching navbar');
		$('#app').append(this.navBarView.el);
		$('#app').append(this.contentView.el);
		$('#app').append(this.footerView.el);
		$('#app').append(this.popupView.el);
		
		
	},
	routes: {
		"*path":	"defaultRoute"
		},
	defaultRoute: function(path){
		if(path==null)path='home';
		this.loadView(this.templateBaseDir + '/' + path);
		
	},
	loadView: function(view){
		
		GenericApp.log('Loading view ' + view);
		if(typeof this.renderedViews[view] == 'undefined') {
			this.createView(view);
		}
		else
			this.activateView(view);
				
	},
	createView: function(view) {
		
		GenericApp.log('Creating view ' + view);
		if (typeof this.renderedViews[view] == 'undefined') {
			
			GenericApp.log('Instantiating view ' + view);
			try {
				this.renderedViews[view] = new GenericApp.Views[view]();
			}
			catch (e) {
				//if this failed, we don't have a predefined route/handler.
				//fallback to template filename/lazy route setup
				this.renderedViews[view] = new GenericApp.Views.BaseView({templateSrc:view});
			}
			
			GenericApp.log('Creating generic listener ' + view);
			this.renderedViews[view].once('template-ok template-fail',
				function(){
					this.activateView(view);
				}, this);
			
			
		}
		
		
			
	},
	activateView: function(view) {
		
		GenericApp.log('Activating ' + view + this.renderedViews[view].$el.html());
		this.contentView.$el.html(this.renderedViews[view].$el.html());
	},
	
	
});
