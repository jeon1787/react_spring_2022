//번외) class가 아닌 prototype을 통한 상속을 하고 싶다면(class로 상속받는 것과 결론은 같기 때문에 그냥 class 사용하면 됨)
function Person(name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;
}
Person.prototype.sum = function(){
    return this.first+this.second;
}
function PersonPlus(name, first, second, third){
    // Person(this, name, first, second); // 여기서 Person에서 일어나는 this는 PersonPlus가 아니고 new가 없기 때문에 Person도 그저 함수에 불과
    Person.call(this, name, first, second); // call을 통해 this를 넘겨줌으로써 우리가 원하는 this의 작용을 할 수 있다.
    //즉 Person.call(this)는 class문법의 super()와 동일한 기능을 한다.
    this.third = third;
}

// 순서에 관계 없이 한 번에 해결하는 방법이나 __proto__는 비표준
// PersonPlus.prototype.__proto__ = Person.prototype;
// 따라서 아래의 방식을 사용하는 것이 바람직
PersonPlus.prototype = Object.create(Person.prototype);
PersonPlus.prototype.constructor = PersonPlus;

// 만약 avg가 Person.prototype으로 바꾸기 전에 들어가면 prototype object가 바뀌어 avg는 사라진다.(주의)
PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.third)/3;
}

var kim = new PersonPlus('kim', 10, 20, 30);
console.log('kim.sum() : ', kim.sum());
console.log('kim.avg() : ', kim.avg());
console.log('kim.constructor : ', kim.constructor);

/*
Person object
------
-prototype -> Person's prototype object

Person's prototype object
------------------
-constructor -> Person object
-sum

PersonPlus object
------
-prototype -> PersonPlus's prototype object

PersonPlus's prototype object
------------------
-constructor -> PersonPlus object
-avg

kim object
---
-__proto__ -> PersonPlus's prototype object
-name
-first
-second
-third
*/
//결론
//kim에는 avg가 없음 -> __proto__에는 있음
//kim에는 sum이 없음 -> __proto__에는 없음 -> __proto__.__proto__에 있으면 됨