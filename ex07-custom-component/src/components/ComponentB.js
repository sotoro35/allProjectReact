import { Component } from "react";

export default class ComponentB extends Component{
    render(){
        return(
            <div>
                <h3>컴포넌트 B</h3>
                <button onClick={this.props.clickBtn}>컴포넌트 A의 닉네임 변경</button>
            </div>
        )
    }
}