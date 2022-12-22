import React, {Component} from "react"
/*
	1. list로 태그 생성시
	list를 통째로 삽입하여 태그를 생성할 땐 list의 child마다 'key'라는 attribute를 생성하여 유니크값을 넣어주어야 한다.
*/


class TOC extends Component{
	render(){
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