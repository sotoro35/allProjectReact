import { useContext } from "react"
import { MyContext } from "../Main"

const Board= ()=>{

    // Context.provider의 value값을 쉽게 사용하기 위한 HOOK
    const value= useContext(MyContext)
    const {data, setMessage}= useContext(MyContext)

    return (
        <div style={{padding:16, backgroundColor:'lightpink'}}>
            <h4>Board component</h4>

            {/* <p>Main 컴포넌트의 message : <strong>{value.data}</strong></p>
            <button onClick={()=>{value.setMessage('와~~!')}}>변경</button> */}

            <p>Main 컴포넌트의 message : <strong>{data}</strong></p>
            <button onClick={()=>{setMessage('와~~!')}}>변경</button>
        </div>
    )
}

export default Board