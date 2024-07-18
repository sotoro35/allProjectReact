import { Component } from "react";

export default class MyComponenet5 extends Component{
    render(){
        return(
            <div style={{margin:8, padding:8, border:'1px dotted blue'}}>
                <p>This is MyComponenet5</p>
                <button onClick={this.props.aaa}>Home 컴포넌트의 메소드를 대신 호출</button>
            </div>
            
        )
    }
}