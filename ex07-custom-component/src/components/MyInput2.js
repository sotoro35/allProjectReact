import { Component } from "react";

export default class MyInput extends Component{
    render(){
        //전달받은 속성들을 스프레드 연산자로 풀어서 모두 적용함.
        return <input {...this.props} style={{padding:'.5rem', margin:'4px'}}></input>
    }
}