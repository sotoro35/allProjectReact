import { Component, Fragment } from "react";
import styled from 'styled-components'
import logo from './image/instagram-logo.png'
import loginFormStyle from './Home.module.css'
import facebook_logo from './image/facebook-logo.png'
import { GoHome } from "react-icons/go";
import { GoSearch } from "react-icons/go";
import { BiMoviePlay } from "react-icons/bi";
import { HiShoppingBag } from "react-icons/hi2";

class Home extends Component{
    render(){
        return (
            // (실습1) 여러요소를 배치하기 위해 div 요소 - 불필요한 중첩구조가 됨
            // <div>
            //     <p>Hello</p>
            //     <p>Nice</p>
            // </div>

            // (실습2) 그룹은 만들어주지만 요소로서 DOM에 추가되지 않는 컴포넌트
            // <Fragment>
            //     <p>Hello</p>
            //     <p>Nice</p>
            // </Fragment>
            // 축약표현
            // <>
            // <p>Hello</p>
            // <p>Nice</p>
            // </>

            // React의 화면배치에서 권장하는 방식은 Flex 스타일을 권장함

            <>
            {/* 3개의 요소를 배치 flex style [스타일 적용방식은 styled-components] */}
                <Root>
                    <div>Resion #1</div>
                    <div>Resion #2</div>
                    <div>Resion #3</div>
                </Root>

                <hr></hr>

                <Header>
                    <img src={logo}></img>
                    <input placeholder="검색"></input>
                    <div>
                        <span>SAM</span>
                        <img src="./assets/purin06.png"></img>
                    </div>

                </Header>

                <hr></hr>

                {/* 인스타그램 로그인 UI 클론해보기 - 스타일은 .module.css*/}
                <form>
                    <div className={loginFormStyle.container}>
                        <img src={logo} alt="instagram" className={loginFormStyle.logo}></img>

                        <input placeholder="전화번호, 사용자 이름 또는 이메일" name="user_id" className={loginFormStyle.input}></input>
                        <input placeholder="비밀번호" type="password" name="user_ps" className={loginFormStyle.input}></input>

                        <input type="submit" className={loginFormStyle.submitButton} value='로그인'></input>

                        <div className={loginFormStyle.separator}>
                            {/* 글씨 양옆의 실선은 CSS의 ::befor, ::after 속성으로 추가 할 수 있음 */}
                            <span>또는</span>
                        </div>

                        <div className={loginFormStyle.loginFacebook}>
                            <a href="">
                                <img src={facebook_logo}></img>
                                <div>Facebook으로 로그인</div>
                            </a>
                        </div>

                        <div className={loginFormStyle.loginForgot}>
                            비밀번호를 잊으셨나요?
                        </div>
                    </div>
                </form>

                {/* BottomNavigationView 모양 만들어보기 - 리액트에서 사용하기 편하도록 아이콘들을 제공하는 라이브러리 react-icons*/}
                <Bnv>
                    <div><GoHome/></div>
                    <div><GoSearch/></div>
                    <div><BiMoviePlay/></div>
                    <div><HiShoppingBag/></div>
                </Bnv>

            </>
        )
    }
}

export default Home
// BottomNavigation bar 모양 만들기
const Bnv= styled.div`
    display: flex;
    width: 100%;
    border-top: 1px solid silver;
    padding: 1rem 0;

    position: fixed;
    bottom: 0px;
    background-color: white;

    div{
        flex-grow: 1;
        text-align: center;
    }
`

// 인스타그램 헤더모양 or 앱의 툴바 스타일 컴포넌트
const Header= styled.div`
    
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    
    box-shadow: 0px 3px 3px #00000033;

    >img{
        height: 2rem;
    }

    input{
        padding: 0.5rem 1rem;
        text-align: center;
    }

    div{
        display: flex;
        align-items: center;
        

        img{
            width: 2rem;
            height: 2rem;
            border-radius: 1rem;
            margin: 4px;
        }

        span{
            font-weight: bold;
            padding: 8px;
        }
    }

`

// 자식요소 3개를 flex style로 배치하는 연습용
const Root= styled.div`
    display: flex;
    flex-direction: row;

    border: 1px solid black;
    padding: 1rem;

    justify-content: space-between;
    
`