import Ember from 'ember';
export default Ember.Component.extend({
	foo:'',
	queryParams:['content','foo'],
	content:'',
init:function(){
this._super();
}
})