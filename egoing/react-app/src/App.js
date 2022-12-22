import { Component } from 'react';
import './App.css'; // MyReactApp의 디자인을 결정
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
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
class MyReactApp extends Component{
  constructor(props){
    super(props);
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
  render(){
    var _title, _desc = null, _article = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i=i+1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }
    else if(this.state.mode === 'create'){
      _article = <CreateContent></CreateContent>
    }

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
          this.setState({mode:_mode})
        }.bind(this)}></Control>
        {_article}
      </div>
    )
  }
}

export default MyReactApp;