import {useEffect, useState} from 'react'

// 함수형 컴포넌트에서 라이프사이클을 대체하는 HOOK
const Second= ()=>{

    // 1. 생성자함수 없음.. 그냥 이 컴포넌트가 생성자 함수
    console.log('Second start!!')

    const [nickname, setNickname] = useState('별명')    
    const [email, setEmail] = useState('이메일')

    // 2. 화면이 그려진 후 발동하는 라이프사이클에 메소드가 필요 - 이때 netwourk 요청 작업을 많이함.
    // 이를 위해 탄생한 HOOK -- 오버라이드 아님!! useEffect() -- 무조건 화면이 그려진 후 발동함. 즉, 화면이 갱신되어도 호출됨.
    // [DidMount + DidUpdate] = useEffect()
    // effect가 호출될때 실행될 코드를 작성한 함수를 파라미터로 전달하면 됨
    useEffect( function(){
        // 이 곳에서 서버작업을 수행
        console.log('Second useEffect()!! ')
    },[email]) //두번째 파라미터 : 변경되었을때 useEffect를 발동할 대상 state변수 - 아무변수도 쓰지 않으면.. 업데이트 할때 반응하지 않음

    // 두번째 파라미터를 아애 안쓸경우... DidMount 처럼 최초1회만 실행되고 더이상 갱신하지 않는다.
    // 두번째 파라미터에 [] 빈배열만 줄 경우.. 최초 1회 실행되고 DidUpdate 처럼 갱신될때마다 실행된다.
    // 두번째 파라미터에 [값] 을 줄 경우... 최초 1회 실행되고 해당 값이 바뀔때마다 갱신된다. 다른값이 변경되면 갱신하지 않는다. 

    
    // render()역할을 return이 함
    return(
        <div>
            <h4>functional conponent</h4>
            <p>닉네임 : {nickname}</p>
            <button onClick={()=>setNickname('oops')}>별명 변경</button>

            <p>이메일 : {email}</p>
            <button onClick={()=>setEmail('aaa@aaa.com')}>별명 변경</button>
        </div>
    )
}

export default Second