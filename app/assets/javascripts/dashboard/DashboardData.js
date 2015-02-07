var React = require('react');
var ReactD3 = require('react-d3');

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
