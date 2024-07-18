const Second= ({data,setMessage})=>{
    return (
        <div style={{padding:16, backgroundColor:'lightcoral'}}>
            <p>Main component의 값을 보여주기 : <strong>{data}</strong></p>

            <button onClick={()=>{setMessage('Nice')}}>data 변경</button>
        </div>
    )
}

export default Second