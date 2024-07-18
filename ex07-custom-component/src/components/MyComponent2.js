import { Component } from "react";

export default class MyComponent2 extends Component{
    render(){
        return (
            <div style={ {margin:'10px'} }>
                <span style={{padding:'.5rem 1rem', color:'blue'}}>이것은 MyComponent2 컴포넌트 입니다.</span>
                <button>버튼</button>
            </div>

            // 리액트는 이런식으로 개별 컴포넌트가 스타일을 스스로 완성하여 사용하는것을 권장함
            
        )
    }
}