import {Component} from 'react'

class Home extends Component{

    // Component 클래스는 생성부터 소멸까지 상황별로 대응되어 자동 호출되는 라이프사이클 콜백메소드가 존재함
    // 너무 많음... 다 못함... 교재에는 소개되어 있음. 여기서는 중요도가 있는 라이프사이클 메소드 5개만 소개


    // 1. 생성자 메소드 : Home 클래스가 객체로 생성될때 발동
    constructor(){
        super() // JS의 자식생성자는 명시적으로 첫줄에 부모생성자 호출문이 있어야 함.
        console.log('Home Component construtor..')
    }

    state={
        message:'Hello react'
    }

    // 2. 화면에 보여질 그림을 그려내기 위해 실행되는 메소드
    render(){
        console.log('Home Component render ~~~ ')
        return(
            <>
                <h2>Home Component</h2>

                <p>메세지 : {this.state.message}</p>
                <button onClick={ ()=>{this.setState({message:'nice to meet you'})} }>메세지 변경</button>
            </>
        )
    }

    // 3. 화면에 완전히 보여진 후 발동하는 메소드 android이 onResume() 비슷한 .. (맨처음에만...실행됨..)
    componentDidMount(){
        console.log('Home component did mount!!')
        // 보통 이곳에서 서버에 데이터를 요청하는 코드가 작성됨
    }

    // 4. state나 props의 값 변경에 의해 화면이 갱신되었을때 발동하는 메소드
    componentDidUpdate(){
        console.log('Home component did update~~!!')
    }

    // 5. 컴포넌트가 더이상 보여지지 않을때 발동하는 메소드
    componentWillUnmount(){
        console.log('Home component will unmaunte ### ')
    }

}

export default Home