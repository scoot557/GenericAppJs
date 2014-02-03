App.Router = Backbone.Router.extend({
	views: {
		'home': App.Views.HomeView
	},
	renderedViews: {},
	activeViews: {},
	routes: {
		"home":		"home", //#home
		},
	home: function(){
		this.loadView(this.views['home']);
		
	},
	loadView: function(view){
		if(typeof renderedViews[view] == 'undefined') {
			//create initial instance of view.
			this.createView(view);
		}
		this.activateView(view);
				
	},
	createView: function(view) {
		if (typeof this.views[view] == 'undefined') 
			
	}
	
});
