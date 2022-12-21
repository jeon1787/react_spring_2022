//내장 객체 : Math와 그 변수, 함수
console.log('Math.PI : ', Math.PI); // variable변수
console.log('Math.random() : ', Math.random()); // method메소드
console.log('Math.floor(3.9) : ', Math.floor(3.9)); // method메소드

var MyMath = { //객체 생성
    PI: Math.PI, // 변수 생성 방법
    random: function(){ // 메소드 생성 방법
        return Math.random();
    },
    floor: function(val){
        return Math.floor(val);
    }
}
console.log("MyMath.PI : ", MyMath.PI)
console.log("MyMath.random() : ", MyMath.random())
console.log("MyMath.floor() : ", MyMath.floor(3.9))

var MyMath_PI = Math.PI;
function MyMath_random(){
    return Math.random();
}

function MyMath_floor(val){
    return Math.floor(val);
}