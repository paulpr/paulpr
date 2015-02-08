import React from 'react';

class DataTable extends React.Component {
    render() {
        var rows = this.props.data.map((row, x) => {
            var rowHtml = row.map((column, y) => {
                return <td key={x+'-'+y+'-col'}>{column}</td>
            });
            return <tr key={x+'-row'}>{rowHtml}</tr>
        });
        return (
            <table style={this.props.style}>
                <caption><h3>{this.props.title}</h3></caption>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

export class TopRulesBroken extends React.Component {
    render() {
        var data = [
            ['Indentation', 102],
            ['Missing PR Description', 5],
            ['Missing Semicolon', 54],
            ['PR Contains Too Many Commits', 23],
            ['PR Contains Too Many LOC', 12]
        ].sort((a, b) => b[1] - a[1]);
        return <DataTable data={data} title="Rules Broken" {...this.props} />;
    }
}

export class TopRuleBreakers extends React.Component {
    render() {
        var data = [
            ['Chris Campbell', 13],
            ['Chris Schmitz', 105],
            ['Justin Seidl', 53],
            ['Ross Larson', 89],
            ['Scott C', 23]
        ].sort((a, b) => b[1] - a[1]);
        return <DataTable data={data} title="Rule Breakers" {...this.props} />;
    }
}