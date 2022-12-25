import React, {Component} from "react"
/*
	1. onSubmit : react가 아닌 HTML 고유 기능
	- submit type input이 포함된 form태그에서 사용 가능
	- submit 버튼 클릭시 실행되도록 약속되어 있다.
*/

class UpdateContent extends Component{
	constructor(props){
		super(props);
		this.state={
			id:this.props.data.id,
			title:this.props.data.title,
			desc:this.props.data.desc
		}
		this.inputFormHandler = this.inputFormHandler.bind(this);
	}

	inputFormHandler(e){
		this.setState({[e.target.name]:e.target.value});
	}

	render(){
		return(
			<article>
				<h2>Update</h2>
				<form action="/create_process" method="post"
					onSubmit={function(e){
						e.preventDefault();
						this.props.onSubmit(
							this.state.id,
							this.state.title,
							this.state.desc
						);
					}.bind(this)}
				>
					<input type="hidden" name="id" value={this.state.id}></input>
					<p>
						<input
							type="text"
							name="title"
							placeholder="title"
							value={this.state.title}
							onChange={this.inputFormHandler}
						></input>
					</p>
					<p>
						<textarea
							name="desc"
							placeholder="description"
							value={this.state.desc}
							onChange={this.inputFormHandler}
						></textarea>
					</p>
					<p><input type="submit"></input></p>
				</form>
			</article>
		)
	}
}

export default UpdateContent;