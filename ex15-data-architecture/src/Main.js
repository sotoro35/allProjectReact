import { useState } from 'react'
import First from './component/First'

const Main = ()=>{

    // Main componet 의 state
    const [message, setMessage] = useState('Hello react') // 변수의 초기값

    return (
        <div style={{padding:16, backgroundColor:'lightyellow', height:'100vh' }}>
            <h2>Data Architecture Test</h2>

            <p>Main componet state data : {message}</p>

            {/* 자식 컴포넌트를 만들고 사용해보기  */}
            <First data={message} setMessage={setMessage}/>
        </div>
    )
}

export default Main