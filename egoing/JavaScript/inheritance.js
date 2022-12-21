//클래스에 수정이 필요할 때
//직접 클래스를 수정할 수도 있지만
//클래스의 수정이 불가능할 때 상속을 사용할 수 있다.
//상속을 함으로써 중복 코드를 줄이면서 새로운 요소를 클래스에 넣을 수 있다.
//또 상속을 하는 부모 클래스의 수정만으로 자식 클래스까지 전부 수정할 수 있다는 점에서 유지보수의 장점이 있다.

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
  avg(){
    return (this.first+this.second)/2;
  }
}

var kim = new PersonPlus('kim', 10, 20);
console.log('kim.sum() : ', kim.sum());
console.log('kim.avg() : ', kim.avg());

//전통적인 주류 언어에서는(Java) super class와 그를 상속받는 sub class가 존재하고
//sub class를 통해 object를 선언한다.
//즉 전통적인 언어에서는 한 번 object가 생성되고 나서는 object를 고칠 수 없다.
//반면에 JavaScript에서는 super object와 그를 상속받는 sub object가 존재하고
//이미 생성된 sub class를 고치는 것이 가능하며 객체가 직접 객체를 상속받는 관계이다.
//만약 부모객체를 바꾸고 싶다면 prototype link만 변경하면 된다. 이 링크와 연결된 부모 객체를 prototype object라고도 부른다.