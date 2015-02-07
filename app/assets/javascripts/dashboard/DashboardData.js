var React = require('react');

class DashboardData extends React.Component {
	render() {
		return (
			<div>
			  <div>DashboardData</div>
			  <div><PullRequestTimeline/></div>
      </div>
		);
	}
}

class PullRequestTimeline extends React.Component{
  render()
  {
    return (
        <div>TimeLine</div>
        )
  }
}

export default DashboardData;
