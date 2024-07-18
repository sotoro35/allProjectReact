import { Component } from "react";

export default class MyInput extends Component{
    render(){
        return <input type={this.props.type} size={this.props.size} placeholder={this.props.hint} style={{padding:'.5rem', margin:'4px'}}></input>
    }
}