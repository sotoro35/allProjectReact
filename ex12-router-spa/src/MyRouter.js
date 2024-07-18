import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Second from './page/Second'
import Second2 from './page/Second2'
import Third from './page/Third'
import Introduce from './page/Introduce'
import BoardList from './page/BoardList'
import Board from './page/Board'
import BoardList2 from './page/BoardList2'
import Board2 from './page/Board2'
import Layout from './page/Layout'
import Tab1 from './page/Tab1'
import Tab2 from './page/Tab2'
import Tab3 from './page/Tab3'
import Intro from './page/Intro'
import Login from './page/Login'
import Signup from './page/Signup'

const MyRouter= ()=>{
    return (
        // (실습1) 여러 페이지들의 경로(Route) 를 감싸는 최상위 라우터 컴포넌트 객체
        <BrowserRouter>
        {/* (실습2) 여러 페이지(컴포넌트)들이 어떤경로일때 실행될지...  Route를 등록 */}
            <Routes>
                {/* 기본 경로 'localhost:3000/'일때 Home컴포넌트가 실행되도록.. */}
                <Route path='/' element={<Home/>}></Route>
                
                {/* Second page로 이동하는 경로 등록 */}
                <Route path='/second' element={<Second/>}/> 
                <Route path='/second2' element={<Second2/>}/> 

                {/* 데이터 전달 실습용 루트등록 */}
                <Route path='/third' element={<Third/>}/>

                {/* [4.1] URL parameter ~ 서브경로를 이용하여 데이터 전달 [ 게시판 상세글 보기의 글번호 전달용 ] */}
                {/* :aa 변수명으로 지정하여 서브경로에 전달된 값을 Third 컴포넌트에서 얻어오기  */}
                <Route path='/third/:aa' element={<Third/>}/>

                {/* [4.2] Query string 전달 .. url뒤에 ?key=value 데이터 전달 */}
                <Route path='/introduce' element={<Introduce/>}></Route>

                {/* [5] 중첩 라우팅 실습해보기 */}
                {/* [5.1] 중첩 라우팅을 사용하지 않고 유사하게 만들어보기 */}
                <Route path='/board' element={ <BoardList/> }></Route>
                <Route path='/board/:no' element={ <Board/> }></Route>

                {/* [5.2] 중첩 라우팅을 사용하여 공통모양을 유지해보기 */}
                <Route path='/board2' element={<BoardList2/>}> 
                    {/* 이 자식 Route의 요소는 <Outlet>에 그려짐 */}
                    <Route path=':no' element={<Board2/>}></Route>
                </Route>

                {/* [6] 중첩 라우팅을 이용한 공통 레이아웃 만들기 */}
                <Route path='/layout' element={<Layout/>}>
                    {/* 자식 루트의 컴포넌트는 <Outlet> 영역에 그려짐 */}
                    <Route path='tab1' element={<Tab1/>}></Route>
                    <Route path='tab2' element={<Tab2/>}></Route>
                    <Route path='tab3' element={<Tab3/>}></Route>
                </Route>

                {/* [7] 버튼으로 페이지 이동 실습용 루트 */}
                <Route path='/intro' element={<Intro/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>

            </Routes>  
        </BrowserRouter>
    )
}

export default MyRouter