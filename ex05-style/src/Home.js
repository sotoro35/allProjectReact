import {Component} from 'react'
import './Home.css'
import './Home.module.css' //import를 이렇게 하면 전역스타일이 됨
// Home.js에서만 사용할 수 있도록 import 해보기
import homeStyle from './Home.module.css'
import './Home.scss'

import styled from 'styled-components'

class Home extends Component{
    render(){
        return (
            <div>
                {/* 리액트에서 스타일을 적용하는 방법 5가지 [3개는 기본방식, 2개는 라이브러리] */}

                {/* 먼저 기본으로 제공하는 3가지 스타일 적용방법 */}
                {/* (실습1) inline style - JSX요소는 html요소가 아님. 그래서 인라인 스타일 적용할때 CSS문자열을 주는게 아니라 JS의 객체를 줘야 함 */}
                <p style={ textStyle }>Hello React</p>
                <p style={ textStyle }>Nice to meet you</p>
                <p style={{margin:16, color:'blue'}}>Have a good day</p>
                <hr></hr>

                {/* (실습2) 별도의 css파일 만들고 적용하기 - 여기는 html이 아님. <link>태그는 아님. import로 다른 문서를 가져옴*/}
                <h3>외부 CSS파일을 통한 스타일 적용</h3>
                <p>클래스 선택자 연습하기</p>
                <p className='aa'>클래스 선택자 연습하기</p>
                <p className='aa'>클래스 선택자 연습하기</p>
                {/* 2번 실습방식을 일반적으로는 사용하지 않음. why? 이 css파일의 내용이 다른 js에서도 적용되기 */}
                <hr></hr>

                {/* (실습3) CSS-module 파일을 만들고 해당 js에만 적용하기 [파일확장자 .module.css] import 해야함 */}
                <h4>외부 모듈 css를 통한 컴포넌트 단위 스타일 적용</h4>

                <div className={homeStyle.bb}>모듈 클래스 선택자 연습</div>
                <hr></hr>

                {/* 현업에서 선호하는 방법 2가지 모두 라이브러리 [SCSS, styled-component] */}
                {/* (실습4) SASS/SCSS - css의 약간 업그레이드 버전 - 라이브러리여서 프로젝트에 추가해야함 */}
                {/* SASS - 들여쓰기를 통해 계층구조를 스타일링*/}
                {/* SCSS - {}를 통해 계층구조를 스타일링 */}
                {/* 위 2가지는 모두 SASS 라이브러리에 포함되어 있음. 즉, 무엇을 쓰든 라이브러리는 sass로 받음 */}
                {/* 설치 방법: $ npm install sass   or  yarn add sass */}

                {/* .scss를 적용할 대상 계층구조 DOM요소 */}
                <h2>SCSS 라이브러리</h2>
                <nav>
                    <ul>
                        <li><a>NAVER</a></li>
                        <li><a>GOOGLE</a></li>
                        <li><a>KAKAO</a></li>
                    </ul>
                </nav>
                {/* SCSS 파일 방식을 리액트의 레거시 프로젝트에 많이 사용했음. */}
                <hr></hr>

                {/* (실습5) [CSS in JS] styled-components 라이브러리 (요즘 가장 hot) */}
                {/* 라이브러리 추가 $ npm install styled-components */}

                {/* [1] 스타일이 적용된 나만의 버튼 요소 만들기 */}
                <MyButton>스타일버튼</MyButton>
                <MyButton>스타일버튼2</MyButton>


                {/* [2] 스타일이 적용된 input 요소 만들기 */}
                <MyInput></MyInput>

                {/* [3] SCSS처럼 계층구조의 스타일도 적용가능함 */}
                <MyContainer>
                    <span>Good</span>
                    <p>Hello <span>REACT</span></p>
                </MyContainer>
                <span>Nice to meet you</span>

                {/* [4] &와 함께 사용하는 + , ~ 기호 */}
                <TextInput placeholder='이메일'></TextInput>
                <TextInput placeholder='비밀번호'></TextInput>
                <TextInput placeholder='주소'></TextInput>
                <div>그냥 다른요소</div>
                <TextInput placeholder='닉네임'></TextInput>

                {/* [5] 요소에 설정된 속성(property)에 따라 다른 스타일도 적용가능 */}
                <DynamicStyledButton aaa="blue">로그인</DynamicStyledButton>
                <DynamicStyledButton aaa="green">회원가입</DynamicStyledButton>

            </div>
        )
    }
}

export default Home

const DynamicStyledButton= styled.button`
    display: block;
    width: 100%;
    margin: .5rem 1rem;
    box-sizing: border-box;
    padding: 0.5rem 1rem;

    //요소의 적용된 속성에 따라.. 배경색 변경
    background-color: ${ (props)=>{return props.aaa} };


`

const TextInput= styled.input`
    padding: 0.5rem 0.2rem;
    display: block;

    // &(현재 요소)의 바로 다음에 같은 요소(&)에 적용하는 스타일
    & + & {
        margin-top: 1rem;
    }

    // &(현재 요소)의 뒤에 같은 요소(&)에 모두 적용하는 스타일
    & ~ &{
        border: 1px solid red;
    }
`

const MyContainer= styled.div`
    margin: 1rem;
    padding: 1rem;
    box-shadow: 0px 5px 3px gray;

    &:hover{
        background-color: yellow;
    }
    
    span{ // 자손 (아무것도 안쓰면)
        color: blue;
    }

    >span{ // 자식
        font-style: italic;
        font-weight: bold;
    }
`

const MyInput= styled('input')`
    padding: 0.25rem 1rem;
    width: 100%;
    margin: 16px;
`


// (실습5) 스타일이 적용된 버튼 요소(컴포넌트) 만들기
// ``빽틱 기호안에 css의 문법사용 
const MyButton= styled.button` 
    font-size: 1rem;
    font-weight: bold;
    background-color: black;
    color: white;
    padding: .25rem 1rem;
    border-radius: 4px;
`



// 첫번째 p요소에 적용할 스타일값을 가진 객체
const textStyle= {
    color: 'red', //CSS의 속성명과 흡사한 속성값으로 스타일 지정
    fontSize: 20,
    fontWeight: 'bold',
    margin: '16px',

}