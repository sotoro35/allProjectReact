import {Component, Fragment} from 'react'
import MyComponent2 from './components/MyComponent2'
import MyComponent3 from './components/MyComponenet3'
import MyInput from './components/MyInput'
import MyInput2 from './components/MyInput2'
import MyComponenet4 from './components/MyComponent4'
import MyComponenet5 from './components/MyComponent5'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'

export default class Home extends Component{
    render(){
        return (
            <Fragment>
                <h2>Custom Component</h2>

                {/* (실습1) 나만의 컴포넌트 만들고 적용하기 - 아래 만들어보기*/}
                <MyComponent></MyComponent>
                <MyComponent/>

                <hr></hr>

                {/* (실습2) 별도의 .js에서 나만의 컴포넌트 만들기 - 스타일까지 적용함*/}
                <MyComponent2></MyComponent2>
                <MyComponent2></MyComponent2>

                {/* (실습3) 컴포넌트의 재사용은 편하지만 매번 같은 값을 보여주는 것은 큰 의미 없음 - 커스텀 컴포넌트를 사용하면서 값을 전달하여 보여주기*/}
                <MyComponent3 aaa="sam"/>
                <MyComponent3 aaa="robin"/>

                {/* 속성을 안쓰면? - undefind 리액트에서는 undefind는 빈화면으로 표시 */}
                <MyComponent3></MyComponent3>
                <MyComponent3 aaa='hong' bbb='20'></MyComponent3>

                <MyInput type='text' size='30' hint='이메일'></MyInput>
                <MyInput type='password' size='30'hint='비밀번호'></MyInput>

                <MyInput type='password' size='30'hint='bbb' autoFocus ></MyInput>
                <MyInput type='password' size='30'hint='aaa' readOnly ></MyInput>

                {/* 여러속성을 모두 props로 대응하기 어려움. 한방에 다 적용하기 ...spread연산자 이용 */}
                <MyInput2 type='text' size='30' placeholder='이메일' autoFocus></MyInput2>
                <MyInput2 type='search' size='20' placeholder='검색'></MyInput2>
                <MyInput2 type='password' size='20' placeholder='비밀번호' readOnly></MyInput2>
                
                <hr></hr>
                {/* 내가 만든 컴포넌트도 자식요소를 가질 수 있고 이를 전달할 수 있음 */}
                <MyComponenet4>
                    <h5>컴포넌트4의 자식요소</h5>
                    <span>자식요소들의 전달 실습</span>
                </MyComponenet4>
                <MyComponenet4>
                    <h5>컴포넌트4의 자식요소</h5>
                    <button>자식요소들의 전달 실습</button>
                </MyComponenet4>
                
                <hr></hr>

                {/* 속성에 전달하는 것이 변수가 아니라 함수여도 됨 */}
                <MyComponenet5 aaa={this.showDialog}></MyComponenet5>
                <MyComponenet5 aaa={()=>{alert('바로 이벤트 콜백함수 지정')}}></MyComponenet5>

                <hr></hr>
                <ComponentA nickname={this.state.nickname}></ComponentA>
                <ComponentB clickBtn={this.changeNickname}></ComponentB>

                {/* 이런식 데이터 변경 흐름을 페이스북팀에서 단방향 데이터 흐름 이라고 부름 */}

            </Fragment>
        )
    }

    state={
        nickname:'oops',
    }

    changeNickname= ()=>{
        this.setState({nickname:'sam'})
    }

    showDialog= ()=>{
        alert('Home Component의 showDialog Method.....')
    }
}

class MyComponent extends Component{
    render(){
        return(
            <div>
                <p>This is MyComponent</p>
                <button>BUTTON</button>
            </div>
        )
    }
}