import Second from "./Second"

const First= ({data,setMessage})=>{
    return (
        <div style={{padding:16, backgroundColor:'lightblue'}}>
            <p>Main 컴포넌트로부터 전달받은 props data : <strong>{data}</strong></p>

            {/* First의 자식 컴포넌트 Second */}
            <Second data={data} setMessage={setMessage}/>
        </div>
    )
}

export default First