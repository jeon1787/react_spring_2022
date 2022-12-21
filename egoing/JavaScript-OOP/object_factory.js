var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    third: 30,
    sum: function(){
        return this.first+this.second+this.third;
    }
}
var lee = {
    name: 'lee',
    first: 10,
    second: 10,
    third: 10,
    sum: function(){
        return this.first+this.second+this.third;
    }
}
console.log('kim.sum() : ', kim.sum());
console.log('lee.sum() : ', lee.sum());

var d1 = new Date('2022-12-20');
console.log('d1.getFullYear() : ', d1.getFullYear());
console.log('d1.getMonth() : ', d1.getMonth()); // month 범위 : 0 ~ 11, 12월은 11

console.log('Date : ', Date);

// 객체는 함수다.
function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){// 단점, 생성자로 객체를 생성할 때마다 sum함수도 메모리를 할당받아 새로 생성되고 있음
        return this.first+this.second+this.third;
    }
}
//new 키워드를 붙이면 일반적인 함수가 아니라 객체의 생성자가 된다.(constructor)
console.log('new Person()', new Person());

//객체 양산
var park = new Person('park', 10, 20, 30);
var jeon = new Person('jeon', 10, 10, 10);
console.log('park.sum() : ', park.sum());
console.log('jeon.sum() : ', jeon.sum());