import React from 'react'
import {Line} from 'react-chartjs'

var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "My Second dataset",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};


export default class DashboardData extends React.Component {
	render() {
		return (
			<div>
			  <div>DashboardData</div>
			  <div><PullRequestTimeline/></div>
			  <div><PullRequestCounter count={0}/></div>
      </div>
		);
	}
}

class PullRequestTimeline extends React.Component{
  render()
  {
    return (
        <div><Line  data={data} width="600" height="250"/></div>
        )
  }
}

class PullRequestCounter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {count: props.count};
  }

  componentDidMount(){
    console.log(this);
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
