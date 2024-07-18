import { Component } from "react";

export default class MyComponent3 extends Component{
    render(){
        return(
            <div>
                <h4>This is MyComponent3</h4>

                {/* 이 컴포넌트에 속성(aaa)으로 전달된 값은 이 컴포넌트 클래스에 아주 특별한 멤버변수 props에 멤버변수로 저장되어 있음. */}
                <span>Hello {this.props.aaa}</span>

                {/* 값이 전달되지 않았을때를 대응하기 */}
                { this.props.aaa === undefined ? <em>'aaa'값이 없음</em> : <em>'aaa'값이 있음</em> }

                <hr></hr>
                <span style={{color:this.props.ccc}}>나이: {this.props.bbb}살</span>

            </div>
        )
    }
}