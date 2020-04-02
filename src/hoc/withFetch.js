import React, { Component } from 'react';

export function withFetch(DataComponent, api) {
    return class extends Component{
        state = {
            data: [],
        }

        componentDidMount() {
            fetch(api)
            .then(res => res.json())
            .then(json => this.setState({data: json.results}))
        }

        render(){
            const {data} = this.state
            return(
                <DataComponent data={data} />
            )
        }
    }
}