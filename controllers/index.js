import Ember from 'ember';

export default Ember.Controller.extend({
	foo:'',
	queryParams:['content','foo'],
	content:'',
	init:function(){
	this._super();
		//this.set('content','sdadadd');
		//this.transitionToRoute('detail',{queryParams:{foo:'asdasdwww'}})
	},
	actions:{
		click:function(){
			console.log(this.get('foo'));
			}
		},
		kkepo:function(){console.log(this.get('foo'));
			return true;
			}
});
