var memberArray = ['egoing', 'graphittie', 'leezche'];
console.group('array loop');
var i = 0;
//while문
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

console.group('object loop');
var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezche'
}
//for in문 : 객체의 경우 for문에 in을 사용하기 때문에 for in문이라고 부름
for(var name in memberObject){
    console.log(name, memberObject[name]);//멤버의 키와 값, 값은 배열을 호출하는 방식으로 멤버를 호출할 수 있다.
}
console.groupEnd('object loop');