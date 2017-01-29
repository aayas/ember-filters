import Ember from 'ember';
export default Ember.Component.extend({
data:null,
brands:[
	{s:'sony', x:false, 'sony':true},
	{s:'toshiba', x:false, 'toshiba':true},
	{s:'hp', x:false, 'hp':true},
	{s:'lenovo', x:false, 'lenovo':true},
	{s:'intex', x:false, 'intex':true},
	{s:'samsung', x:false, 'samsung':true},
	{s:'dell', x:false, 'dell':true},
	{s:'micromax', x:false, 'micromax':true},
	{s:'hcl', x:false, 'sony':true},
	{s:'ibm', x:false, 'ibm':true}
],
b:{'sony':false,'toshiba':false,'hp':false,'lenovo':false,'intex':false,'samsung':false,'dell':false,'micromax':false,'hcl':false,'ibm':false},
xb:[false,false,false,false,false,false,false,false,false,false],
t:{mouse:false,tablet:false,laptop:false,headphone:false,keyboard:false,lcd:false},
types:[
	{s:'mouse', x:false},
	{s:'tablet', x:false},
	{s:'laptop', x:false},
	{s:'headphone', x:false},
	{s:'keyboard', x:false},
	{s:'lcd', x:false}
],
// ch:function(){
// 	var s='';
// 	return brands.reduce(s,(s,i)=>{return s+(i.x ? 1 : 0)})
// }.property('brands.@each.x'),
// items:[],
brSelected:false,
init :function(){
	this._super();
	this.set('xfoo','jhgjghj');
	var brands=this.get('brands'),
	types=this.get('types'),
	data = [];

	for(var i=0;i<1000;i++){
			var br = brands[i%10].s,
			name = brands[i%10].s+'-'+types[i%6].s,
			ty=types[i%6].s;

		data.pushObject({
			id:i,
			name:name,
			brand : br,
			type : ty,
			price : (i*4+332),
			xData:'sffe'
		});
	}
	this.set('items',data.splice(0,20));
	this.set('data',data.splice(0,20));
},
brandsChanged:function(){
	var data = this.get('data'),
	b=this.get('b'),
	brands=this.get('brands'),
	res=[];

	for(var i=0;i<brands.length;i++){
		b[brands[i].s] = brands[i].x;
	}
	for(var i=0;i<data.length;i++){
		var x = data[i];
		if(b[x.brand]) {
			res.pushObject(x);
		}
	}
	this.set('items',res);
}.observes('brands.@each.x'),
typesChanged:function(){
	var data = this.get('data'),
	t=this.get('t'),
	types=this.get('types'),
	res=[];

	for(var i=0;i<types.length;i++){
		t[types[i].s] = types[i].x;
	}
	for(var i=0;i<data.length;i++){
		var x = data[i];
		if(t[x.type]) {
			res.pushObject(x);
		}
	}
	this.set('items',res);
}.observes('types.@each.x'),
actions:{
	
	click:function(){
		alert('kappa');
		},
		fun:function(){
			this.set('xfoo','keepo');
		console.log(this.get('xfoo'))		
			// this.sendAction('klappa');
			console.log(this.get('brands')[0].x);
			return true;
			}
}
})