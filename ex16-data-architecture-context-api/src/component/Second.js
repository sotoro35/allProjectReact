import { MyContext } from "../Main"

const Second= ()=>{
    return (
        <div style={{padding:16, backgroundColor:'aqua'}}>
            <h4>Second component</h4>

            {/* MyContext.provider가 제공한 value 객체를 사용하려면.. 소비자가 되야 함 */}
            {/* Consumer를 배치하면 자동으로 안에 있는 함수가 발동함 */}
            <MyContext.Consumer>
                 {
                    ({data,setMessage})=>{
                        return (
                            <div>

                            <p>Main 컴포넌트의 message : <strong>{data}</strong></p>
                            <button onClick={()=>{ setMessage('Good context') }}>메세지 변경</button>

                            </div>
                        )
                    }
                 }
            </MyContext.Consumer>
            
        
        </div>
    )
}

export default Second