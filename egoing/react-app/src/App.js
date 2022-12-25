import { Component } from 'react';
import './App.css'; // MyReactApp의 디자인을 결정
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Subject from './components/Subject';
import Control from './components/Control';
// compile = npm run start
// deploy = npx serve -s build

/*
  1. class형 component
  컴포넌트 이름 첫 글자는 항상 대문자(공통)
  반드시 하나의 최상위 태그로 시작해야 한다.(공통)
  Component를 상속
  render(){} 함수 필요
  state, lifeCycle 사용 가능
  임의의 메소드 정의 가능
  함수형보다 메모리 자원을 더 사용한다는 단점
*/
/*
  2. react의 JS는 JavaScript가 아니다.
  react의 JavaScript처럼 보이는 코드들은
  유사 JS일 뿐이다. 태그가 들어간다는 점, 따옴표를 사용하지 않는다는 점에서 차이가 있는
  JSX(JavaScript XML)를 사용한다.
*/
/*
  3. react의 장점 - 완벽한 사용자 정의 태그인 컴포넌트를 사용할 수 있다는 점
  component의 이름에만 집중하도록 함으로써 html 문서의 복잡성을 획기적으로 낮출 수 있다.
  component를 재사용할 수 있다.
  재사용시 props를 변경하여 사용할 수 있다.
*/
/*
  4. state
  컴포넌트를 사용하는 외부와 컴포넌트를 구현하는 내부를 분리하기 위한 것
  component를 사용할 때 사용자정의 태그 안에 props들이 하드코딩되어 있음, 이것을 감추는 것이 state
  외부에서 알 필요없는 정보를 은닉하는 것이 좋은 사용성을 만드는 핵심이다.
  상위 컴포넌트인 MyReactApp의 상태를 하위 컴포넌트인 Subject의 props 값으로 전달하는 것도 가능
  
    state의 사용 방법
    - 컴포넌트 실행시 render보다 먼저 실행되어 컴포넌트를 초기화하고 싶은 코드는 constructor에 구현한다.(가장 먼저 실행되므로)
    - constructor는 생성자함수이므로 super를 통해 상속받은 Component도 생성해준다.
    - 그 다음 초기화하고 싶은 state를 작성한다.

    컴포넌트 생성 이후 동적으로 state를 변경하는 방법
    - this.setState({변경할state:'변경할값'}); = react에세 state 변경 사실이 알려저 화면이 새로 렌더링된다.
    - this.state.변경할state = '변경할값'; = 이렇게 변경하게 되면 react가 모르게 변경이 되므로 화면이 새로 렌더링되지 않는다.
*/
/*
  5. render 호출 시점
  render는 해당 component의 state나 props 값이 변동하면 호출되게 되어있다. 즉 화면이 새로 렌더링된다.
*/
/*
  6. react 이벤트 사용법
  onClick={}과 같이 on 뒤의 첫 글자는 대문자
  중괄호 안에 오는 function(e){}은 this가 비어있기 때문에
  function(e){}.bind(this)를 해주어야 한다.
*/
/*
  7. props와 state의 차이
  - props는 read only, state는 부모의 state 수정 가능
  - props는 부모에서 자식으로 보내는 data, state는 자식에서 부모의 state 변경 가능
*/
/*
  8. 베열 push와 concat 차이
  - var arr = [1, 2];일 때
  - arr.push(3)은 원본 arr에 3을 추가 -> arr = [1, 2, 3]
  - arr.concat(3)은 원본 arr의 복제 배열을 생성하여 3을 추가 -> arr = [1, 2]
  - 이 차이점은 shouldComponentUpdate()함수에서 큰 차이를 만들게 됨
    shouldComponentUpdate 함수는 이전 데이터 현재 데이터 모두에 접근할 수 있음
    이 때 push를 통해 update시에는 이전값(원본)이 현재값과 동일해지는 문제가 있음
    push는 원본을 수정하므로..
    새로운 복제 객체를 생성하여 state에 넣어주어야 이전 객체와의 차이점을 보장할 수 있음.
*/
/*
  9. 불변성(immutable) 지키기
  - 불변성 : 원본이 변하지 않는다.
  - 불변성 지키는 방법 2가지
    - 배열 : Array.from(arr)
      - var arr2 = arr.concat('a');
      - var arr2 = Array.from(arr); -> 이 경우 push, concat 무엇을 써도 무방
      - arr === arr2 로 비교를 해도 변수의 주소값이 달라(참조변수) false가 도출됨
    - 객체 : Object.assign({}, obj)
      - var a = {name: 'egoing'}
      - var obj = Object.assign({}, a)
        - 객체를 복사할 땐 첫째 argument는 빈객체, 두번째 argument는 복사할 객체
        - 이미 존재하는 두 객체를 하나로 합칠 때 첫째 argument는 합체될 객체, 두번째 argument는 복사될 객체
      - a === obj 의 return 값은 false
*/
/*
  결론 shouldComponentUpdate를 다루기 위해서는
  원본이 되는 props와 state의 불변성을 지켜줄 필요가 있다.
  그저 setState하여 문자열이나 숫자를 대입하는 경우는 교체
  concat이나 Array.from(), Object.assign()의 경우도 교체
  push는 교체가 아닌 원본의 수정이다.(불변성 지켜지지 않음)
*/
/*
  java의 경우 배열과 list는 구분되어 있다.
  그러나 js의 경우 배열과 list는 동일하다.
  immutable.js 쓰면 편함(모든 객체를 불변객체화)
*/


class MyReactApp extends Component{
  
  constructor(props){
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'create',
      selected_content_id:2,
      subject:{title:'WEB', sub:'world wide web!'},
      welcome:{title:'Welcome', desc:'Hello React!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for information'},
        {id:3, title:'JavaScript', desc:'JavaScript is for information'}
      ]
    }
  }

  getReadContent(){
    var i = 0;
    while(i < this.state.contents.length){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
      }
      i=i+1;
    }
  }

  getContent(){
    var _title, _desc = null, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'read'){
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }
    else if(this.state.mode === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        
        this.max_content_id = this.max_content_id+1;
        // push 보다 concat을 권장
        // 1. push
        // this.state.contents.push(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        // 2. concat
        // var _contents = this.state.contents.concat(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // );
        // 3. from
        var _contents = Array.from(this.state.contents);
        _contents.push(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          contents:_contents,
          mode:'read',
          selected_content_id:this.max_content_id
        });

      }.bind(this)}></CreateContent>
    }
    else if(this.state.mode === 'update'){
      var _content = this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={

        function(_id, _title, _desc){
          var _contents = Array.from(this.state.contents);//불변성
          var i = 0;
          while(i < _contents.length){
            if(_contents[i].id === _id){
              _contents[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i = i + 1;
            this.setState({
              contents:_contents,
              mode: 'read'
            });
          }
        }.bind(this)

      }></UpdateContent>
    }

    return _article
  }

  render(){
    return(
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'welcome'});
          }.bind(this)}//여기서 this는 실행은 Subject component에서 될지라도 bind은 MyReactApp으로 됨
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)}
        ></TOC>
        <Control onChangeMode={function(_mode){
          if(_mode === 'delete'){
            if(window.confirm(this.state.selected_content_id + "을/를 삭제하시겠습니까?")){
              var _contents = Array.from(this.state.contents);
              var i = 0;
              while(i < _contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i, 1);//i번부터 1개를 배열에서 삭제
                  this.setState({
                    mode:'welcome',
                    contents:_contents
                  })
                  break;
                }
                i = i + 1;
              }
            }
            alert("deleted!");
          }else{
            this.setState({mode:_mode})
          }
        }.bind(this)}></Control>
        {this.getContent()}
      </div>
    )
  }
}

export default MyReactApp;