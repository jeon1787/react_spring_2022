//배열
var memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log("memberArray[2] : ", memberArray[2]);

//객체 create
var memberObject = {
    manager: 'egoing',
    developer: 'graphittie',
    designer: 'leezhce'
}
console.log("memberObject.designer : ", memberObject.designer); // 객체멤버는 .으로 접근할 수 있고
console.log("memberObject[designer] : ", memberObject['designer']); // 배열과 같이 대괄호[]로도 접근할 수 있다.(안의 문자열을 바꿔끼울 수 있다는 장점)

//멤버 update
memberObject.designer = 'leezche';
console.log("memberObject.designer : ", memberObject.designer);

//멤버 delete
delete memberObject.manager
console.log('after delete memberObject.manager : ', memberObject.manager)