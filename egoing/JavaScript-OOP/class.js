class Person{
	//생성자
	constructor(name, first, second){
		this.name = name;
		this.first = first;
		this.second = second;
	}

	//메소드 : Person이라는 class의 객체들이 공유하는 prototype함수!
	sum(){
	    return 'prototype : '+(this.first+this.second);
	}
}
// Person.prototype.sum = function(){
//     return 'prototype : '+(this.first+this.second);
// }


var kim = new Person('kim', 10, 20);
kim.sum = function(){
	return 'this : '+(this.first+this.second)
}
console.log('kim.name : ', kim.name);
console.log('kim.sum() : ', kim.sum());

//객체의 sum함수 호출시
//먼저 객체에 sum이라는 함수가 있는지 확인
//없다면 class 안에 sum이라는 메소드가 정의되어 있는지 확인한다.