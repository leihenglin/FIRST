//新建一个Person.js,即一个Person类
function Person(name,age,city){
	 this.name= name; 
	 this.age = age;
	 this.city = city;	 
}
//创建3个对象person1,person2,person3
var person1 = new Person('jack',24,'New York');
var person2 = new Person(102,28,'Melbourne');
var person3 = new Person(25,28,'San Francisco');
//定义一个toString方法，返回对象的name属性，
//用person1.toString(),得到name属性的值。
Person.prototype.toString = function(){
	return this.name;
}
//用count属性返回对象个数，这个没实现，
//我觉得应该先判断对象和Person类的关系，
//再遍历一遍，把符合的对象存进一个数组，再用length属性即可
Person.prototype.count = 0;
Person.prototype.count = function(){
	if (this instanceof Person) {
		Person.prototype.count++;
	} 
}










