//__proto__의 대체재 : Object.create()
var superObj = {superVal: 'super'}
var subObj = Object.create(superObj);//superObj를 부모로 하는 새로운 객체 subObj를 생성
subObj.subVal = 'sub';
debugger;//JavaScript 일시정지
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);

//__proto__를 사용하는 것보단 Object.create()를 통해서 prototype link를 정해주는 방법이 더 좋은 방법

var kim = {
    name: 'kim',
    first: 10, second: 20,
    sum: function(){
        return this.first+this.second;
    }
}
var lee = {
    name: 'lee',
    first: 10, second: 10,
    avg: function(){
        return (this.first+this.second)/2;
    }
    // 다시 sum을 정의하기 싫다면
}
//__proto__로 kim을 연결해준다.
lee.__proto__ = kim;
console.log('kim.sum() : ', kim.sum());
console.log('lee.sum() : ', lee.sum());
//lee.sum()을 했을 때 lee에 있는지 먼저 확인한다.
//없다면 __proto__를 통해 거슬러 올라간다.
//다음 상위 객체인 kim에서 sum()을 확인하여 실행한다.
//상속을 받았으니 자식만의 함수를 생성하는 것도 가능
console.log('lee.avg() : ', lee.avg());

//Object.create 사용시
var park = Object.create(kim);
park.name = 'park';
park.first = 30;
park.second - 20;
park.avg = function(){
    return (this.first+this.second)/2;
}
console.log('park.avg() : ', park.avg());