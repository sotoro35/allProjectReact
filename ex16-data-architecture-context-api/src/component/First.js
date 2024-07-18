import Board from "./Board"
import Second from "./Second"

const First= ()=>{
    return (
        <div style={{padding:16, backgroundColor:'lightgreen'}}>
            <h4>First component</h4>

            <Second/>
            <hr></hr>
            <Board/>
        </div>
    )
}

export default First