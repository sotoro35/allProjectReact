import First from "./component/Fist"
import Second from "./component/Second"
import Info from "./component/info"

const Main= ()=>{
    return (
        <div>
            <h1>Main Component</h1>

            {/* store에 있는 number를 사용하는 컴포넌트 */}
            <First/>

            {/* store에 있는 number 사용하기 - HOOK으로 쉽게 */}
            <Second/>

            <hr></hr>
            <Info/>
        </div>
    )
}

export default Main