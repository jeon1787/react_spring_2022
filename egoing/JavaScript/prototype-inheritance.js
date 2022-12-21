var superObj = {superVal: 'super'}//클래스가 아닌 인스턴스
var subObj = {subVal: 'sub'}

//__proto__라는 링크를 통해서 subObj의 부모를 연결할 수 있다.(상속)
subObj.__proto__ = superObj;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
//먼저 자식 객체의 속성들을 확인 후 없다면 부모 객체의 속성을 확인한다.

//어떤 객체의 property를 바꾸면 그 객체의 property를 바꾸는 것이지 그 객체의 proto를 바꾸는 것이 아니다.(즉 sub를 통해 super를 변경할 수 없다.)
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);

//prototype : class가 아닌 object를 직접 다룸
//1. prototype : object의 공용 함수를 연결
//2. __proto__ : object의 super object를 연결, JavaScript에서는 표준이 아니지만 사실상의 표준인 상태이다.
//
//JavaScript는 prototype based language(프로토타입 기반 언어)이다.
//객체지향 프로그래밍의 한 갈래로, 클래스가 없고 객체를 원형으로 하여 복제의 과정을 통해 객체의 동작방식을 재사용할 수 있다.
//상속 또한 클래스가 아닌 객체를 기반으로 상속받는다.