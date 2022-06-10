import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super();

        this.state={number:0}
        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);

    }
    increment(){
        this.setState(prevNumber =>{
            return {number:prevNumber.number+1}
        })
    }
    decrement(){
        this.setState(prevState =>{
            return {number:prevState.number-1}
        })
    }
    render() {
        

        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.increment} className='btn btn-success'>increment </button>
                <button onClick={this.decrement} className='btn btn-danger mx-5'>decrement </button>
            </div>

        )
    }
}
export default Counter