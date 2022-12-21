var kim = {name: 'kim', first: 10, second: 20}
var lee = {name: 'lee', first: 10, second: 10}
function sum(prefix){
    return prefix+(this.first+this.second);
}
//sum.call(); : sum(); 과 동일, 첫번째 인자는 this에 해당하는 객체, 두번째 인자부터는 함수의 argument이다.
console.log('sum.call(kim) : ', sum.call(kim, ' => '));
//sum은 kim의 프로퍼티가 아니고 this도 비어있지만
//call함수에 kim을 전달함으로써 sum이라는 함수가 kim의 메소드가 된 것(sum이 호출 될 때마다 call 필요)
console.log('sum.call(lee) : ', sum.call(lee, ' : '));
// console.log('kim.sum() : ', kim.sum());//error
// console.log('lee.sum() : ', lee.sum());//error

//call을 통해 아무 객체에나 아무 함수를 붙여 사용할 수 있다.
//apply도 call과 거의 동일하다.

//call()과 같이 sum이 호출될 때마다 this를 바꾸는 것이 아니라 내부적으로 사용할 this를 고정하는 방식이 bind()
var kimSum = sum.bind(kim, ' -> ');//sum과 kim을 바인딩한 새로운 함수를 만들어 return한다. 즉, sum이나 kim에는 영향을 주지 않는다.
console.log('kimSum()', kimSum());

//※결론
//call : 실행시 this의 값을 바꾼다.
//bind : this의 값을 영구적으로 바꾸는 새로운 함수를 만든다.