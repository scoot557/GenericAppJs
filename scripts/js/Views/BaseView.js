GenericApp.Views.BaseView = Backbone.View.extend({
	fetchTemplates: function(){
		var self = this;
		
		$.ajax({
			url:	this.templateSrc,
			type:	'get',
			success:	function(resp){
				self.template = Handlebars.compile(resp);
				self.render();
				self.trigger('template-ok');
			},
			error: function(resp){
				var errorPayload = {error: true, msg:'Unable to load template.  Unknown Error.'};
				if(resp.status==404)
					errorPayload.msg = '404, page not found.  Hmmmm.  I know I put that somewhere...';
				else
					errorPayload.msg = [resp.status,' - ',resp.statusText].join(' ');
				self.render(errorPayload);
				self.trigger('template-fail',resp);
			}
		});
	},
	render: function(obj){
		if(typeof obj=='undefined')
			this.$el.html(this.template(this));
		else if (obj.error)
			this.renderError(obj);	
	},
	renderError: function(obj){
		$('.error-msg').remove();
		var errorMsg = $('<div>').addClass('error-msg');
		errorMsg.append($('<p>').text(obj.msg));
		App.log(obj.msg,'error');
		this.$el.html(errorMsg.html());
	},
	initialize: function(options){
		var opts = options || {};
		
		if (opts.templateSrc) this.templateSrc = opts.templateSrc;
		
		this.once('template-ok',function(){
				
			if(typeof this.initializeCallback == 'function')
				this.initializeCallback(opts);
			}, this);
		
		this.fetchTemplates();
			
	}
});
	
