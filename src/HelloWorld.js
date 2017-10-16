import React, {Component} from 'react';

export default class  HelloWorld extends Component{
    constructor(props){
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
        this.state = {
            helloWorld: "stranger"
        }
    }
    changeHandler(e){
       this.setState({helloWorld: e.target.value.trim() || "stranger"});
    }
    render(){
        return <div>
            <p><input type="text" onChange={this.changeHandler} /></p>
            <b style={{fontSize: "36px"}}>Hello, {this.state.helloWorld}</b>
        </div>
    }
}