import {Component, Fragment} from 'react'
import ItemComponent from './Components/ItemComponent'

export default class Main extends Component{

    // 일반 string 데이터 변수
    message= "Hello world"
    // 요소를 문자열로 작성한 데이터 string 변수
    message2= "<h4>Hello react</h4>"

    // JSX언어의 요소객체를 저장하고 있는 변수 
    message3= <h2>Nice to meet you</h2>

    // 대량의 데이터를 가진 배열 준비
    state= {
        data: ['aaa', 'bbb', 'ccc', 'ddd'],
        data2: [<li>aaa</li>, <li>bbb</li>, <li>ccc</li>, <li>ddd</li> ], // JSX 요소객체를 가진 배열

        items: [
            {no:1 , name:'sam', message:'Hello react'},
            {no:2 , name:'robin', message:'Hello android'},
            {no:3 , name:'hong', message:'Hello web'},
            {no:4 , name:'son', message:'Hello ios'},
        ]
    }

    render(){
        return(
            <Fragment>

                {/* 일반 데이터를 가진 변수를 출력 */}
                { this.message }

                {/* 태그문을 가진 string 데이터를 가진 변수 출력 */}
                { this.message2 }

                {/* JSX 요소객체를 가진 변수 출력 */}
                { this.message3 }

                <hr></hr>

                {/* string을 가진 배열을 그냥 출력 - 요소들이 나열됨.. JSX는 배열요소의 내용물을 나열할때 , 를 넣지 않는다 */}
                {this.state.data}
                {/* JSX객체를 요소로 가지는 배열을 그냥 출력하면.. 요소들이 나열됨. 나열된 것이 JSX요소 */}
                <ul>
                    {this.state.data2}
                </ul>

                <hr></hr>
                {/* 배열의 요소에 JSX를 저장하는 경우는 사실 많지 않음. 그래서 string 배열 data를 요소로 변환하기 */}
                {/* 배열의 요소 개수만큼 길이를 가진 새로운 배열을 만들어주는 map() 기능 활용  */}
                <ul>
                    { 
                        this.state.data.map( (value,index,array)=>{
                            // 리턴한 값들을 모아서 새로운 배열을 만들어 한방에 리턴
                            // 각 아이템 요소들은 반드시 key속성을 부여해야 하고 중복되지 않는 값을 지정해야만 함
                            return <li key={value+index}>{value}</li>} ) 
                    }
                </ul>

                <hr></hr>

                {/* 대량의 데이터가 객체들일때.. */}
                <div style={{border:'2px solid black', padding:8, margin:8}}>
                    {
                        this.state.items.map((item,index,array)=>{
                            return (
                                <div key={index} style={{border:'1px solid gray', borderRadius:4, margin:4, padding:4, display:'flex', flexDirection:'column'}}>
                                    <span>{item.no}</span>
                                    <span>{item.name}</span>
                                    <span>{item.message}</span>
                                </div>
                            )
                        })
                    }
                </div>

                <hr></hr>

                {/* Main컴포넌트에서 item 하나의 모양까지 스타일 하려니 짜증 */}
                {/* Item 1개의 모양을 별도의 CustomComponent로 만들기 */}
                <div style={{border:'2px solid blue', padding:8, margin:8}}>
                    {
                        this.state.items.map((item,index)=> <ItemComponent key={index} item={item} onClick={()=>alert('선택항목 이름:'+item.name)}/>)
                    }
                </div>
            </Fragment>
        )
    }
}