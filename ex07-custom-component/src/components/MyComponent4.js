import { Component } from "react";

export default class MyComponenet4 extends Component{
    render(){
        return(
            <div style={{margin:'8px', padding:8, border:'1px dotted red'}}>
                {/* 컴포넌트에 속성이 아니라 자식요소로 전달된 것을 보여주기 */}
                {this.props.children}
            </div>
        )
    }
}