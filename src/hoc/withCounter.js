import React, { Component } from 'react';

export function withCounter(CounterComponent, type) {
    return class extends Component {
        state = { counter: 0 }

        componentDidMount() {
            const localStorageCounter = localStorage.getItem(type);
            if (localStorageCounter) {
                this.setState({counter: Number(localStorageCounter)})
            }
        }        

        updateLocalStorage = () => {
            setTimeout( () =>localStorage.setItem(type, this.state.counter),0);
        }

        incrementCounter = () => {
        this.setState({counter: this.state.counter + 1})
        this.updateLocalStorage();
        }
        decrementCounter = () => {
        this.setState({counter: this.state.counter - 1})
        this.updateLocalStorage();
        }
        reset = () => {
        this.setState({counter: 0})
        this.updateLocalStorage();    
        }

        save = (key,value) => localStorage.setItem(key,value);
        load = (key) => localStorage.getItem(key);


        render(){
            const { counter } = this.state;
            return (
                <CounterComponent 
                counterValue={counter}
                incrementCounter={this.incrementCounter}
                decrementCounter={this.decrementCounter}
                reset={this.reset}
                save={this.save}
                load={this.load}
                />
            )
        }
    }
}

