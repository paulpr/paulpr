import React from 'react';
import {Line} from 'react-chartjs';

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
				<div>DashboardData</div>
				<PullRequestTimeline data={data} />
				<PullRequestCounter count={0}/>
			</div>
		);
	}
}

class PullRequestTimeline extends React.Component{
	render() {
		var options = {
			multiTooltipTemplate: "<%= value %> <%= datasetLabel %>",
			datasetStrokeWidth : 2,
		};
		var legendStyle = {
			display: 'inline-block',
			marginRight: 20
		};
		var blockStyle = function(color) {
			return {
				backgroundColor: color,
				display: 'inline-block',
				width: '1em',
				height: '1em',
				marginRight: 2,
				verticalAlign: -3
			}
		};
		var legend = data.datasets.map(dataset => {
			return <span style={legendStyle}><span style={blockStyle(dataset.fillColor)}></span>{dataset.label}</span>;
		});
		return (
			<div>
				<h2>Pull Requests vs Issues</h2>
				<Line ref="lineChart" data={this.props.data} options={options} width="600" height="250"/>
				<div style={{ textAlign: 'center', padding: 10, boxShadow: 'inset 0 0 5px rgba(0,0,0,0.2)', width: 600, backgroundColor: '#fffbe2' }}>{legend}</div>
			</div>
		);
	}
}

class PullRequestCounter extends React.Component{
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

  render()
  {
    return (
      <div>
      Paul has caught {this.state.count}
      </div>
    )
  }
}
