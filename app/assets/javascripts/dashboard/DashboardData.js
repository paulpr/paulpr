import React from 'react';
import PullRequestTimeline from './PullRequestTimeline';
import PullRequestCounter from './PullRequestCounter';

var data = {
	labels: ["January", "February", "March", "April", "May", "June", "July"],
	datasets: [
		{
			label: "Pull Requests",
			fillColor: "rgba(100,100,100,0.4)",
			strokeColor: "rgba(100,100,100,1)",
			pointColor: "rgba(100,100,100,1)",
			pointStrokeColor: "#fff",
			strokeWidth: 2,
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(100,100,100,1)",
			data: [28, 29, 24, 19, 54, 18, 21]
		},
		{
			label: "Comments by Paul",
			fillColor: "rgba(220,10,10,0.2)",
			strokeColor: "rgba(220,10,10,1)",
			pointColor: "rgba(220,10,10,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,10,10,1)",
			data: [65, 59, 47, 31, 43, 13, 15]
		}
	]
};


export default class DashboardData extends React.Component {
	render() {
		return (
			<div>
				<PullRequestCounter count={0}/>
				<PullRequestTimeline data={data} />
			</div>
		);
	}
}
