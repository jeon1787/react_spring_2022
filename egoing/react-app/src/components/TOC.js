import React, {Component} from "react"
/*
	1. list로 태그 생성시
	list를 통째로 삽입하여 태그를 생성할 땐 list의 child마다 'key'라는 attribute를 생성하여 유니크값을 넣어주어야 한다.
*/
/*
	2. shouldComponentUpdate()
	- state가 변경될 때마다 모든 component가 렌더링되게 되는데
	  리렌더링이 불필요한 component의 경우 shouldComponentUpdate함수의
		return 값을 false로 둠으로써 해당 component의 렌더링을 막을 수 있다.
		(return이 true면 render()함수 호출)
	- shouldComponentUpdate 함수는 두 개의 매개변수를 갖는다.
	  첫째 변수는 newProps, 둘째 변수는 newState이다.
		각각 props와 state가 바뀌었을 때 그 바뀐 값을 매개변수로 넘겨준다.
	- props나 state의 변경점을 비교하고 싶을 때는
	  newProps.data 와 this.props.data를 비교하여 알 수 있다.
		(즉 이전값과 현재값 모두에 접근 가능함)
*/


class TOC extends Component{
	shouldComponentUpdate(newProps, newState){
		console.log("shouldComponentUpdate!"
			, newProps.data
			, this.props.data
		);
		if(this.props.data === newProps.data){
			return false;
		}
		return true;
	}

	render(){
		console.log("TOC!")
		var lists = [];
		var data = this.props.data;
		var i = 0;
		while(i < data.length){
			lists.push(
				<li key={data[i].id}>
					<a
						href={"/content/"+data[i].id}
						data-id={data[i].id}
						onClick={function(e){
							e.preventDefault();
							this.props.onChangePage(e.target.dataset.id);
						}.bind(this)}
					>
						{data[i].title}
					</a>
				</li>
			);
			i=i+1;
		}

		return(
			<nav>
				<ul>
					{lists}
				</ul>
			</nav>
		);
	}
}

export default TOC;