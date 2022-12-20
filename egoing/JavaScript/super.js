//이미 사용하는 곳이 있어 수정이 불필요한 부모클래스와
//수정이 필요한 자식클래스가 있을 때
//부모클래스에 영향 없이 자식클래스만 수정을 하는 것이 super이다.
//super를 사용함으로써 상속의 의의(중복코드 제거)를 지키면서 수정을 할 수 있다.
//마치 this. 를 사용하는 듯한 느낌이 듬

class Person{
	constructor(name, first, second){
		this.name = name;
		this.first = first;
		this.second = second;
	}
	sum(){
	    return this.first+this.second;
	}
}

class PersonPlus extends Person{
	constructor(name, first, second, third){
		super(name, first, second);
		this.third = third;
	}
	sum(){
	    return super.sum()+this.third;
	}
  avg(){
    return (super.sum()+this.third)/3;
  }
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum() : ', kim.sum());
console.log('kim.avg() : ', kim.avg());