function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

//(중요)생성자 함수의 sum함수의 원형을 정의 : 생성자로 객체를 양산해도 sum함수는 오로지 하나(성능 절약, 메모리 절약)
Person.prototype.sum = function(){
    return 'prototype : '+(this.first+this.second+this.third);
}

//kim만 다르게 하고 싶다면
var kim = new Person('park', 10, 20, 30);
kim.sum = function(){
    return 'this : '+(this.first+this.second+this.third)
}
var lee = new Person('jeon', 10, 10, 10);
console.log('kim.sum() : ', kim.sum());
console.log('lee.sum() : ', lee.sum());