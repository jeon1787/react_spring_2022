import React, {Component} from "react"
/*
	1. onSubmit : react가 아닌 HTML 고유 기능
	- submit type input이 포함된 form태그에서 사용 가능
	- submit 버튼 클릭시 실행되도록 약속되어 있다.
*/

class CreateContent extends Component{
	render(){
		return(
			<article>
				<h2>Create</h2>
				<form action="/create_process" method="post"
					onSubmit={function(e){
						e.preventDefault();//a태그와 같이 submit도 화면이 렌더링됨(action)
						this.props.onSubmit(
							e.target.title.value,
							e.target.desc.value
						);
					}.bind(this)}
				>
					<p><input type="text" name="title" placeholder="title"></input></p>
					<p><textarea name="desc" placeholder="description"></textarea></p>
					<p><input type="submit"></input></p>
				</form>
			</article>
		)
	}
}

export default CreateContent;