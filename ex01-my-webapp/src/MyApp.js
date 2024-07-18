// 리액트 라이트브러리 중 Component 클래스를 임포트
import React, { Component, Fragment } from 'react' // react 라이브러리에서 default는 React 임으로 다른것들은 {} 로 받아야한다
// 외부 스타일시트 가져오기
import './MyApp.css'
// src폴더에 있는 이미지파일을 로드하여 객체로 가져오기 [참조변수명 catDog]
import catDog from './mung.jpg'

// 리액트는 Component를 상속받은 클래스들이 android의 Fragment(화면 조각)같은 역할을 수행함
class MyApp extends Component{
    // 리액트의 Component가 화면에 보여줄 요소들을 그려내는 작업을 하는 render 콜백 메소드 - 오버라이드
    render(){
        //return "Hello world"
        //return "<2>Hello world</h2>"  // 문자열로 html 태그문을 써도 인식 못함. 단지 textContent로 바라봄.
        //리액트의 요소로 만들어서 리턴해야 함
        // let e= React.createElement('h2',{},'Hello React Element')
        // return e

        // 웹 브라우저가 보여줄 요소들 명령형 방식으로 작성하는 것은 짜증
        // 태그문을 작성하는 선언형 방식으로 요소를 만들면 보다 쉽게 화면구성이 가능함
        //return <h2>Hello React JSX</h2> //JavaScript에서 XML태그문을 사용하도록 허용한 언어 [ JSX언어 ]

        // 여러개의 요소 만들어보기
        // return (
        //     // <h2>Hello React JSX</h2>
        //     // <p>This is pa... </p>
        //     // ERROR - 오직 1개의 요소만 return할 수 있음

        //     // 2개 이상을 리턴하려면 Group의 역할을 하는 요소가 필요함
        //     <div>
        //         <h2>Hello React JSX</h2>
        //         <p>This is paragraph element</p>
        //     </div>
        // )
        // JSX는 Javascript 안에서 XML 태그문을 사용할 수 있다는 것임.

        // XML안에서 Javascript변수를 사용할 수도 있음
        let name= "sam" // 지역변수
        let type= 'search' // 속성의 값도 변수로 지정가능함

        // return (
        //     <div>
        //         {/* XML안에서 그냥 변수명을 쓰면 인식하지 못함 */}
        //         <h2>Hello name</h2>
        //         {/* XML안에서 JS변수영역을 나타내는 {}를 사용 */}
        //         <h2>Hello {name}</h2>
        //         {/* 속성값을 정할때도 JS변수값을 사용할 수 있음 */}
        //         <input type='text'></input>
        //         <input type={type}></input>
        //     </div>
        // )

        // React 스타일 적용 맛보기.. 외부 .CSS [ HTML이 아니기에 <link>로 연결못함. JS에서 다른 문서를 가져오는 문법 import ]
        // html의 class속성은 가급적 className속성명으로 대체하여 사용을 권고.. 
        // return (
        //     <div className='root'>
        //         <h2>Hello React Style</h2>
        //         <p>This is paragraph</p>
        //     </div>

        // )

        // 리액트에서 이미지 보여주기 맛보기
        return (
            // Fragment 컴포넌트(요소) : 실제 DOM 트리에 그려지지 않는 요소 - 단지 group용
            // <Fragment>
            //     <h2>Hello React Image</h2>
            // </Fragment>

            // <Fragment> 글씨가 길어서 축약으로.. <> [실제 요소가 아니어서 스타일 못줌]
            // <>
            //     <h2>Hello React Image</h2>
            // </>

            <div className='root'>
                <h2>Hello React Image</h2>

                {/* src폴더에 있는 이미지파일 보여주기 시도!! - 안보임. why? 여긴 html이 아님 */}
                <img src='./mung.jpg' alt='캣도그'></img>

                {/* src폴더의 이미지파일을 load하여 Image객체로 만들어서 src속성에 적용해야함 - 다행히 파일리더는 필요없음 */}
                {/* 리액트에서 import를 하여 이미지파일을 객체로 받을 수 있음. */}
                <img src={catDog} width={150}></img>

                {/* index.html이 있는 public폴더안에 이미지를 위치하기 [결국 MyApp.js에 있는 요소들은 index.js에 의해
                    가상 DOM요소가 되어 index.html에 붙음. 즉, 현재 요소는 indext.html에 있다고 생각해야 함.] */}
                <img src='./cat.jpg' width={150}></img>

                {/* 서버에 있는 이미지들은? 네트워크 이미지는 그냥 URL쓰면 보이나? */}
                <img src='https://media.istockphoto.com/id/1471370789/ko/%EC%82%AC%EC%A7%84/%EB%B4%84%EC%9D%98-%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EC%88%B2.jpg?s=1024x1024&w=is&k=20&c=8ra6gWT5bG4uST3AW6fDD4M2_h6OHOobX5_xY4GEEY4=' width={150}></img>
            </div>
        )

    }
}

// index.js에서 import를 하기 위해 export를 해야만 함
export default MyApp
