import React from 'react';

export default class PullRequestCounter extends React.Component{
	constructor(props) {
		super(props);
		this.state = {count: props.count};
	}

	componentDidMount(){
		var loop = ()=> {
			setTimeout(()=> {
				this.setState({count: this.state.count + 1});
					loop();
				}, Math.round(Math.random() * (5000)) + 200
			);
		};

		loop();
	}

	render(){
		return (
			<div className="counter">
				Paul has caught {this.state.count}
			</div>
		)
	}
}