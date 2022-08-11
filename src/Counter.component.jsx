import { Component } from "react";

export default class Counter extends Component{
    constructor(props){
        super()
        this.state={counter: props.num}
        this.plusOne=this.plusOne.bind(this)
        this.changeToFive=this.changeToFive.bind(this)
        this.minusOne=this.minusOne.bind(this)
        this.resetToZero=this.resetToZero.bind(this)
    }
    changeToFive(){
        this.setState({counter:this.state.counter=5})
    }
    plusOne(){
        if ({counter:this.state.counter}%7===0) {
            return <h1>BOOM!</h1>
        }
        this.setState({counter:this.state.counter+1})
    }
    minusOne(){
        this.setState({counter:this.state.counter-1})
    }
    resetToZero(){
        this.setState({counter:this.state.counter=0})
    }
    
    render(){
        return(
            <div>
                <button onClick={this.changeToFive}>Change To Five</button>
                <button onClick={this.plusOne}>Plus</button>
                <button onClick={this.minusOne}>Minus One</button>
                <button onClick={this.resetToZero}>Reset</button>
            <h2>{this.state.counter}</h2>
            </div>
        )
    }
}