//this 예약어
var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function(){
        return this.first+this.second; // this는 kim을 말함, this 대신 kim을 사용해도 동작
    }
}
//console.log('kim.sum(kim.first, kim.second) : ', kim.sum(kim.first, kim.second));
console.log('kim.sum() : ', kim.sum());