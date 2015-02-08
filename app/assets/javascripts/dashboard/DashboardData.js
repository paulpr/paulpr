import React from 'react';
import PullRequestTimeline from './PullRequestTimeline';
import PullRequestCounter from './PullRequestCounter';
import {TopRuleBreakers, TopRulesBroken} from './TopStats';

var data = {
	labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
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
			data: [28, 29, 24, 19, 54, 18, 21, 26, 24]
		},
		{
			label: "Issues Found",
			fillColor: "rgba(220,10,10,0.2)",
			strokeColor: "rgba(220,10,10,1)",
			pointColor: "rgba(220,10,10,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,10,10,1)",
			data: [65, 59, 47, 31, 43, 13, 15, 31, 20]
		}
	]
};


export default class DashboardData extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<div classNameName="col twelve">
						<PullRequestCounter count={0}/>
						<PullRequestTimeline data={data} />
					</div>
				</div>
				<div className="row">
					<div className="col six">
						<TopRuleBreakers style={{ width: '100%' }} />
					</div>
					<div className="col six">
						<TopRulesBroken style={{ width: '100%' }} />
					</div>
				</div>
			</div>
		);
	}
}
